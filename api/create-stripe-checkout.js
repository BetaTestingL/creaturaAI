// /api/create-stripe-checkout.js
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).end();
  const { priceId, customerEmail } = req.body || {};
  if (!priceId) return res.status(400).json({ error: 'priceId required' });

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [{ price: priceId, quantity: 1 }],
      customer_email: customerEmail,
      success_url: `${process.env.BASE_URL}/dashboard?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.BASE_URL}/pricing`
    });
    res.json({ url: session.url, id: session.id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};
