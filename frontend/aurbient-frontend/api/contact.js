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
    subject: `⚡ New Lead: ${name} (${company || 'Individual'})`,
    replyTo: email,
    text: `New Lead: ${name} (${email}) | Company: ${company || 'N/A'}\n\nMessage:\n${message}`,
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Lead Inquiry</title>
  <style>
    body {
      font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      background-color: #F4F8F7;
      margin: 0;
      padding: 0;
      -webkit-font-smoothing: antialiased;
    }
    .wrapper {
      width: 100%;
      background-color: #F4F8F7;
      padding: 40px 0;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #FFFFFF;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(17, 35, 48, 0.05);
      border: 1px solid #E2EBE7;
    }
    .header {
      background: linear-gradient(135deg, #112330 0%, #1A3547 100%);
      padding: 36px 32px;
      text-align: center;
      border-bottom: 3px solid #13AAB3;
    }
    .header h1 {
      color: #FFFFFF;
      margin: 0;
      font-size: 24px;
      font-weight: 700;
      letter-spacing: -0.5px;
    }
    .header p {
      color: #13AAB3;
      margin: 0 0 8px 0;
      font-size: 13px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1.5px;
    }
    .content {
      padding: 40px 32px;
    }
    .section-title {
      font-size: 11px;
      font-weight: 700;
      color: #13AAB3;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 12px;
    }
    .lead-card {
      background-color: #F8FDFD;
      border: 1px solid rgba(19, 170, 179, 0.15);
      border-radius: 12px;
      padding: 24px;
      margin-bottom: 28px;
    }
    .message-card {
      background-color: #FAFCFB;
      border: 1px solid #E2EBE7;
      border-radius: 12px;
      padding: 24px;
      margin-bottom: 32px;
    }
    .message-text {
      color: #395568;
      font-size: 15px;
      line-height: 1.6;
      margin: 0;
      white-space: pre-line;
      font-style: italic;
    }
    .btn-container {
      text-align: center;
    }
    .btn-reply {
      display: inline-block;
      background-color: #13AAB3;
      color: #FFFFFF !important;
      text-decoration: none;
      font-weight: 700;
      font-size: 15px;
      padding: 16px 36px;
      border-radius: 30px;
      box-shadow: 0 8px 20px rgba(19, 170, 179, 0.25);
    }
    .footer {
      background-color: #112330;
      padding: 24px;
      text-align: center;
      border-top: 1px solid #1A3547;
    }
    .footer p {
      color: #58798C;
      margin: 0;
      font-size: 12px;
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="container">
      <div class="header">
        <p>Aurbient Technology Portal</p>
        <h1>New Lead Received</h1>
      </div>
      <div class="content">
        <div class="section-title">Lead Information</div>
        <div class="lead-card">
          <table cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;">
            <tr>
              <td style="padding-bottom: 12px; font-weight: 600; color: #58798C; font-size: 14px; width: 110px; vertical-align: top;">Full Name</td>
              <td style="padding-bottom: 12px; color: #112330; font-size: 14px; font-weight: 600; vertical-align: top;">${name}</td>
            </tr>
            <tr>
              <td style="padding-bottom: 12px; font-weight: 600; color: #58798C; font-size: 14px; vertical-align: top;">Email Address</td>
              <td style="padding-bottom: 12px; color: #13AAB3; font-size: 14px; font-weight: 600; vertical-align: top;"><a href="mailto:${email}" style="color: #13AAB3; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="font-weight: 600; color: #58798C; font-size: 14px; vertical-align: top;">Company</td>
              <td style="color: #112330; font-size: 14px; font-weight: 600; vertical-align: top;">${company || 'Individual / Not Specified'}</td>
            </tr>
          </table>
        </div>
        
        <div class="section-title">Lead Message</div>
        <div class="message-card">
          <p class="message-text">"${message}"</p>
        </div>
        
        <div class="btn-container">
          <a href="mailto:${email}" class="btn-reply">Reply to Lead Immediately →</a>
        </div>
      </div>
      <div class="footer">
        <p>© 2026 Aurbient Technologies. All Rights Reserved.</p>
      </div>
    </div>
  </div>
</body>
</html>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('SMTP sending failed:', error);
    return res.status(500).json({ error: 'Failed to send email: ' + error.message });
  }
}
