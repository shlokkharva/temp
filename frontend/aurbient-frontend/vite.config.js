import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import handler from './api/contact.js'

// Custom Vite plugin that intercepts /api/contact and runs the exact Vercel serverless function
function localMailMiddleware() {
  return {
    name: 'local-mail-middleware',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url === '/api/contact' && req.method === 'POST') {
          let body = '';
          req.on('data', chunk => {
            body += chunk.toString();
          });
          req.on('end', async () => {
            try {
              req.body = JSON.parse(body || '{}');

              // Mock the standard Vercel serverless response interface
              res.status = (code) => {
                res.statusCode = code;
                return res;
              };
              res.json = (data) => {
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(data));
                return res;
              };

              // Delegate execution directly to our unified handler
              await handler(req, res);
            } catch (err) {
              console.error('Local mail serverless failure:', err);
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: err.message }));
            }
          });
        } else {
          next();
        }
      });
    }
  }
}

export default defineConfig({
  plugins: [react(), localMailMiddleware()],
  server: {
    fs: {
      strict: false,
    },
  },
})
