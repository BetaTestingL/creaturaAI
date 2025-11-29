// /api/stripe-webhook.js
const Stripe = require('stripe');
const rawBody = require('./_rawBody');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const sendEmail = require('./send-email');

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).end();

  try {
    // IMPORTANT: get raw body before JSON parsing
    const buf = await rawBody(req);
    const sig = req.headers['stripe-signature'];

    // Verify signature
    const event = stripe.webhooks.constructEvent(buf, sig, endpointSecret);

    // Handle specific events
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;

      await supabase.from('subscriptions').insert([
        {
          stripe_subscription_id: session.subscription || null,
          plan: session.display_items?.map(i => i?.price?.id)?.join(',') || null,
          status: 'active',
          created_at: new Date().toISOString()
        }
      ]);

      await sendEmail({
        to: process.env.EMAIL_FROM,
        subject: 'New Stripe Checkout Completed',
        text: `Session: ${session.id}\nCustomer Email: ${session.customer_email}`
      });
    }

    res.json({ received: true });
  } catch (err) {
    console.error('stripe webhook error:', err.message);
    res.status(400).send(`Webhook Error: ${err.message}`);
  }
};

// VERY IMPORTANT: disable Vercel body parsing
module.exports.config = {
  api: {
    bodyParser: false
  }
};
