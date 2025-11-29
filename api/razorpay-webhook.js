// /api/razorpay-webhook.js
const rawBody = require('./_rawBody');
const crypto = require('crypto');
const { createClient } = require('@supabase/supabase-js');
const sendEmail = require('./send-email');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

module.exports = async (req, res) => {
  try {
    if (req.method !== 'POST') return res.status(405).end();

    // IMPORTANT: get raw body before Vercel parses JSON
    const bodyBuf = await rawBody(req);
    const raw = bodyBuf.toString();

    const signature = req.headers['x-razorpay-signature'];
    const expected = crypto
      .createHmac('sha256', process.env.RAZORPAY_WEBHOOK_SECRET)
      .update(raw)
      .digest('hex');

    if (signature !== expected) {
      console.error('Invalid razorpay signature', signature, expected);
      return res.status(400).send('Invalid signature');
    }

    const event = JSON.parse(raw);

    // handle events
    if (event.event === 'payment.captured') {
      const payment = event.payload.payment.entity;
      await supabase.from('invoices').insert([
        {
          provider: 'razorpay',
          provider_invoice_id: payment.id,
          amount: payment.amount,
          currency: payment.currency,
          status: 'captured',
          created_at: new Date().toISOString()
        }
      ]);

      await sendEmail({
        to: process.env.EMAIL_FROM,
        subject: 'Razorpay Payment Captured',
        text: `Payment ${payment.id} amount ${payment.amount}`
      });
    }

    res.json({ received: true });
  } catch (err) {
    console.error('razorpay webhook error:', err.message);
    res.status(500).json({ error: err.message });
  }
};

// VERY IMPORTANT: disable default JSON parser!
module.exports.config = {
  api: {
    bodyParser: false
  }
};
