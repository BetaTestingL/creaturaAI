// /api/lead.js
const { createClient } = require('@supabase/supabase-js');
const sendEmail = require('./send-email'); // see below
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

module.exports = async (req, res) => {
  try {
    if (req.method !== 'POST') return res.status(405).end();
    const { name, email, requirements } = req.body || {};
    if (!email || !requirements) return res.status(400).json({ error: 'email & requirements required' });

    const { data, error } = await supabase
      .from('leads')
      .insert([{ name, email, requirements }])
      .select()
      .single();

    if (error) throw error;

    // optional: create user record by email
    await supabase.from('users').upsert({ email, full_name: name }, { onConflict: ['email'] });

    // send notification email to admin
    try {
      await sendEmail({
        to: process.env.EMAIL_FROM,
        subject: `New Lead - ${name}`,
        text: `New lead:\n\nName: ${name}\nEmail: ${email}\nRequirements:\n${requirements}`
      });
    } catch (e) {
      console.error('email error', e.message);
    }

    res.status(201).json({ ok: true, lead: data });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};
