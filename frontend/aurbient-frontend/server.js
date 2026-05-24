import express from 'express';
import cors from 'cors';
import handler from './api/contact.js';

const app = express();

app.use(cors());
app.use(express.json());

// Proxy incoming local requests to the exact same Vercel Serverless function handler
app.post('/api/contact', async (req, res) => {
  try {
    await handler(req, res);
  } catch (error) {
    console.error('Express server contact endpoint failure:', error);
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`=============================================================`);
  console.log(`🚀 Aurbient Local Mail Server listening on port ${PORT}`);
  console.log(`📬 Forms submitted to /api/contact will email rajthakur.aurbient@gmail.com`);
  console.log(`=============================================================`);
});
