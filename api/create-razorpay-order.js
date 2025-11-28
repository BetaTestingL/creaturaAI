// /api/create-razorpay-order.js
const Razorpay = require('razorpay');

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

module.exports = async (req, res) => {
  try {
    if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');
    const { amount, currency = 'INR', receipt } = req.body;
    if (!amount) return res.status(400).json({ error: 'amount required (in paise)' });

    const options = {
      amount: amount, // e.g. 99900 for ₹999.00
      currency,
      receipt: receipt || `rcpt_${Date.now()}`,
      payment_capture: 1,
    };

    const order = await razorpay.orders.create(options);
    res.status(200).json(order);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};
