const crypto = require("crypto");

module.exports = async (req, res) => {
  const rawBody = await new Promise((resolve, reject) => {
    let data = [];
    req.on("data", (chunk) => data.push(chunk));
    req.on("end", () => resolve(Buffer.concat(data).toString()));
    req.on("error", reject);
  });

  const signature = req.headers["x-razorpay-signature"];
  const expected = crypto
    .createHmac("sha256", process.env.RAZORPAY_WEBHOOK_SECRET)
    .update(rawBody)
    .digest("hex");

  if (signature !== expected) {
    return res.status(400).send("Invalid signature");
  }

  const event = JSON.parse(rawBody);
  console.log("RAZORPAY EVENT:", event);

  res.status(200).json({ received: true });
};
