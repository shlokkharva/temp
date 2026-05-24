import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

// Parse .env natively using standard Node fs/path (eliminates external dotenv dependency!)
try {
  const envPath = path.resolve(process.cwd(), '.env');
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf8');
    envContent.split(/\r?\n/).forEach(line => {
      const trimmed = line.trim();
      if (trimmed && !trimmed.startsWith('#')) {
        const [key, ...values] = trimmed.split('=');
        const val = values.join('=').trim();
        if (key && val) {
          process.env[key.trim()] = val;
        }
      }
    });
  }
} catch (e) {
  console.log('Skipping local .env parsing:', e.message);
}

export default async function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, company, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  // Gmail SMTP Auth details loaded dynamically from env (or falling back to your provided ones)
  const EMAIL_USER = process.env.EMAIL_USER || 'rajthakur.aurbient@gmail.com';
  const EMAIL_PASS = process.env.EMAIL_PASS || 'yqdyjtzubugntsdm';

  // Setup transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS
    }
  });

  const mailOptions = {
    from: `"Aurbient Lead System" <${EMAIL_USER}>`,
    to: EMAIL_USER,
    subject: `New Lead Inquiry from ${name} (${company || 'Individual'})`,
    text: `
You have received a new contact inquiry from your website (Aurbient Technologies).

Lead Details:
------------------------------------------
Name:    ${name}
Email:   ${email}
Company: ${company || 'N/A'}
Message:
${message}
------------------------------------------

Reply directly to this email to contact the lead: ${email}
    `,
    replyTo: email
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('SMTP sending failed:', error);
    return res.status(500).json({ error: 'Failed to send email: ' + error.message });
  }
}
