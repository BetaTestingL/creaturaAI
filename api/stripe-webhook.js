// /api/stripe-webhook.js
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  // IMPORTANT: get raw body
  const rawBody = await new Promise((resolve, reject) => {
    let data = [];
    req.on("data", (chunk) => data.push(chunk));
    req.on("end", () => resolve(Buffer.concat(data)));
    req.on("error", reject);
  });

  const sig = req.headers["stripe-signature"];

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      rawBody,
      sig,
      endpointSecret
    );
  } catch (err) {
    console.error("Signature mismatch:", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // now handle events safely
  if (event.type === "checkout.session.completed") {
    console.log("Checkout success!", event.data.object);
  }

  res.status(200).json({ received: true });
};
