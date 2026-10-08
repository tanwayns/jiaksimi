import express, { Request, Response } from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
// @ts-ignore
import healthHandler from './api/health.js';
// @ts-ignore
import placesHandler from './api/places.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  // JSON parsing support
  app.use(express.json());

  // API Routes: Status / Health Monitor endpoint
  app.get('/api/health', (req: Request, res: Response) => {
    return healthHandler(req, res);
  });

  app.get('/api/health.js', (req: Request, res: Response) => {
    return healthHandler(req, res);
  });

  // Geoapify Places API proxy endpoint
  app.get('/api/places', (req: Request, res: Response) => {
    return placesHandler(req, res);
  });

  app.get('/api/places.js', (req: Request, res: Response) => {
    return placesHandler(req, res);
  });

  // Simple ping endpoint
  app.get('/api/ping', (_req: Request, res: Response) => {
    res.json({ pong: true, timestamp: Date.now() });
  });

  // Serve static assets in production or mount Vite middleware in development
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  } else {
    // Mount Vite in middleware mode
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        host: '0.0.0.0',
        port: PORT,
        hmr: process.env.DISABLE_HMR !== 'true',
        watch: process.env.DISABLE_HMR === 'true' ? null : {},
      },
      appType: 'spa',
    });

    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[Server] Savor server running at http://0.0.0.0:${PORT}`);
    console.log(`[Server] Health monitor active at http://0.0.0.0:${PORT}/api/health.js`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
