import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFileSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the build directory (matches vite.config.ts outDir)
app.use(express.static(join(__dirname, 'build')));

// SPA fallback: serve index.html for all routes
app.get('*', (req, res) => {
  try {
    const html = readFileSync(join(__dirname, 'build', 'index.html'), 'utf-8');
    res.send(html);
  } catch (error) {
    res.status(500).send('Error loading application');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

