// /api/send-email.js
const fetch = require('node-fetch'); // included as dependency only if needed
module.exports = async function sendEmail({ to, subject, text, html }) {
  const key = process.env.SENDGRID_API_KEY;
  if (!key) throw new Error('SENDGRID_API_KEY not configured');

  const body = {
    personalizations: [{ to: [{ email: to }] }],
    from: { email: process.env.EMAIL_FROM || 'noreply@deployedinnovations.org' },
    subject,
    content: [
      { type: 'text/plain', value: text || '' },
      ...(html ? [{ type: 'text/html', value: html }] : [])
    ]
  };

  const r = await fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  if (!r.ok) {
    const txt = await r.text();
    throw new Error('SendGrid error: ' + txt);
  }
  return true;
};
