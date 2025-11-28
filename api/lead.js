// /api/lead.js
const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

module.exports = async (req, res) => {
  try {
    if (req.method !== 'POST') return res.status(405).send('Method not allowed');

    const { name, email, requirements } = req.body;
    if (!email || !requirements) return res.status(400).json({ error: 'email and requirements required' });

    const { data, error } = await supabase
      .from('leads')
      .insert([{ name, email, requirements }])
      .select()
      .single();

    if (error) throw error;

    // Optionally: create user row if not exists
    await supabase
      .from('users')
      .upsert({ email, full_name: name }, { onConflict: ['email'] });

    res.status(201).json({ ok: true, lead: data });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message || 'Internal error' });
  }
};
