// /api/get-leads.js
const { createClient } = require('@supabase/supabase-js');
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

module.exports = async (req, res) => {
  try {
    // Basic protection: require a header X-ADMIN-KEY (set the value as an env var ADMIN_KEY)
    const adminKey = req.headers['x-admin-key'] || '';
    if (adminKey !== process.env.ADMIN_KEY) return res.status(401).json({ error: 'Unauthorized' });

    const { data, error } = await supabase.from('leads').select('*').order('created_at', { ascending: false });
    if (error) throw error;
    res.json({ ok: true, leads: data });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};
