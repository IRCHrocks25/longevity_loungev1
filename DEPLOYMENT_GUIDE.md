# Deployment Guide

This project is deployed using **Vite + Express + Railway**. Here's the complete deployment setup:

## Architecture

- **Build Tool**: Vite 6.3.5 (builds React app to `build/` folder)
- **Server**: Express.js (serves static files from `build/`)
- **Platform**: Railway (using Railpack builder)
- **Node Version**: >=20 (configured in package.json engines)

## Deployment Steps

### 1. Build Configuration

The project uses these key files:

- **`package.json`**: 
  - `"type": "module"` - Uses ES modules
  - `"engines": { "node": ">=20" }` - Node version requirement
  - Build script: `"build": "node node_modules/vite/bin/vite.js build"` (avoids permission issues)
  - Start script: `"start": "node server.js"`

- **`vite.config.ts`**: 
  - Builds to `build/` directory (not `dist/`)
  - `base: '/'` for root deployment
  - Uses Tailwind CSS v3 (via PostCSS)

- **`server.js`**: 
  - Serves static files from `build/` (matches vite.config.ts)
  - SPA fallback (serves `index.html` for all routes)
  - Listens on `process.env.PORT || 3000`

### 2. Build Process

```bash
# Install dependencies
npm install

# Build the application
npm run build

# This creates the build/ folder with:
# - index.html
# - assets/ (JS, CSS, images)
```

### 3. Server Setup

The `server.js` file:
- Uses ES modules (`import` syntax)
- Serves static files from `build/` directory
- Handles SPA routing (all routes serve `index.html`)
- Uses `process.env.PORT` for Railway/cloud platforms

### 4. Railway Deployment

1. **Railway Configuration Files**:

   **`railway.json`** (primary config for Railpack):
   ```json
   {
     "$schema": "https://railway.app/railway.schema.json",
     "build": {
       "builder": "RAILPACK",
       "buildCommand": "npm install && npm run build"
     },
     "deploy": {
       "startCommand": "npm start",
       "restartPolicyType": "ON_FAILURE",
       "restartPolicyMaxRetries": 10
     }
   }
   ```

   **`nixpacks.toml`** (fallback if Railway switches builders):
   ```toml
   [phases.setup]
   nixPkgs = ["nodejs_20"]

   [phases.install]
   cmds = ["npm install"]

   [phases.build]
   cmds = ["npm run build"]
   ```

2. **Railway Auto-Detection**:
   - Railway uses **Railpack** (not Nixpacks) for this project
   - Railpack auto-detects Node.js and reads `package.json` engines
   - Build Command: `npm install && npm run build` (from railway.json)
   - Start Command: `npm start` (from package.json)

3. **Environment Variables**:
   - `PORT`: Automatically set by Railway (defaults to 3000 in code)

4. **Key Configuration**:
   - Uses `npm install` instead of `npm ci` (better for optional dependencies)
   - Node 20+ required (specified in engines)
   - Build output: `build/` directory

### 5. Common Deployment Issues & Solutions

#### Issue 1: "Cannot find module @rollup/rollup-linux-x64-gnu"
**Solution**: Using `npm install` instead of `npm ci` handles optional dependencies better. The `.npmrc` file has `include=optional` to ensure optional dependencies are installed.

#### Issue 2: "Cannot find module 'dist' folder" or "build folder not found"
**Solution**: Ensure build runs before start and verify output directory
```bash
# Make sure build completes successfully
npm run build

# Verify build/ folder exists (not dist/)
ls build/
```

#### Issue 3: "The `border-border` class does not exist"
**Solution**: Tailwind CSS v3 requires explicit color definitions in `tailwind.config.js`. Ensure all CSS variable colors are mapped in the config.

#### Issue 4: "Error loading application" (500 error)
**Solution**: Check that `build/index.html` exists after build
```bash
# Verify build output
npm run build
ls -la build/
```

#### Issue 5: Port binding errors
**Solution**: Ensure `process.env.PORT` is set (Railway sets this automatically)
```javascript
// server.js already handles this:
const PORT = process.env.PORT || 3000;
```

#### Issue 6: ES Module errors
**Solution**: Ensure `package.json` has `"type": "module"`
```json
{
  "type": "module",
  ...
}
```

#### Issue 7: Static assets not loading
**Solution**: Check `vite.config.ts` build output configuration
```typescript
build: {
  outDir: 'build',  // ✅ Matches server.js
  target: 'esnext',
}
```

### 6. Deployment Checklist

- [x] `package.json` has `"type": "module"`
- [x] `package.json` has `"engines": { "node": ">=20" }`
- [x] `package.json` has `"build"` and `"start"` scripts
- [x] `server.js` exists and serves from `build/` (not `dist/`)
- [x] `vite.config.ts` builds to `build/` directory
- [x] `tailwind.config.js` has all color mappings defined
- [x] Build completes without errors: `npm run build`
- [x] `build/` folder contains `index.html` and `assets/`
- [x] Server starts locally: `npm start`
- [x] `railway.json` configured with correct build command
- [x] `nixpacks.toml` exists as fallback
- [x] `.npmrc` has `include=optional` for native modules
- [x] `PORT` environment variable is set (or defaults to 3000)

### 7. Testing Locally Before Deployment

```bash
# 1. Clean install (optional, if having issues)
rm -rf node_modules package-lock.json
npm install

# 2. Build
npm run build

# 3. Verify build output
ls build/

# 4. Start server
npm start

# 5. Test in browser
# Should work at http://localhost:3000
```

### 8. File Structure After Build

```
project-root/
├── build/              # Build output (created by vite build) ✅
│   ├── index.html
│   └── assets/
│       ├── index-[hash].js
│       ├── index-[hash].css
│       └── [image files]
├── server.js           # Express server (serves from build/)
├── package.json        # With engines.node >=20
├── vite.config.ts      # outDir: 'build'
├── tailwind.config.js  # Tailwind v3 config
├── railway.json        # Railway Railpack config
├── nixpacks.toml       # Fallback Nixpacks config
├── .npmrc              # Optional dependencies config
└── src/                # Source files
```

### 9. Railway-Specific Notes

- Railway uses **Railpack** (not Nixpacks) for this project
- Railway reads `package.json` engines to determine Node version (20+)
- Railway runs `npm install` (from railway.json, not `npm ci`)
- Build command: `npm install && npm run build`
- Start command: `npm start`
- Railway sets `PORT` environment variable automatically
- `.railwayignore` file can exclude unnecessary files from deployment
- Build output directory: `build/` (configured in vite.config.ts)

### 10. Key Differences from Standard Vite Setup

1. **Build Output**: Uses `build/` instead of `dist/`
2. **Build Script**: Uses `node node_modules/vite/bin/vite.js build` (avoids permission issues)
3. **Tailwind CSS**: Uses v3 (not v4) with PostCSS
4. **Railway Builder**: Uses Railpack (not Nixpacks)
5. **Install Command**: Uses `npm install` (not `npm ci`) for better optional dependency handling
6. **Node Version**: Requires Node >=20

### 11. Alternative Platforms

This setup works on:
- **Railway** ✓ (current, using Railpack)
- **Heroku**: Same setup, add `Procfile`: `web: npm start`
- **Render**: Same setup, set build/start commands
- **Vercel**: Would need different setup (serverless functions)
- **Netlify**: Would need different setup (static hosting)

## Key Files Reference

### `package.json` scripts
```json
{
  "type": "module",
  "engines": {
    "node": ">=20"
  },
  "scripts": {
    "build": "node node_modules/vite/bin/vite.js build",
    "dev": "vite",
    "preview": "vite preview",
    "start": "node server.js"
  }
}
```

### `server.js` (Express server)
```javascript
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
```

### `vite.config.ts` (build config)
```typescript
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    target: 'esnext',
    outDir: 'build',  // ✅ Important: matches server.js
  },
  server: {
    port: 3000,
    allowedHosts: ['localhost', 'longevityloungev1-production.up.railway.app'],
  },
})
```

### `railway.json` (Railway config)
```json
{
  "$schema": "https://railway.app/railway.schema.json",
  "build": {
    "builder": "RAILPACK",
    "buildCommand": "npm install && npm run build"
  },
  "deploy": {
    "startCommand": "npm start",
    "restartPolicyType": "ON_FAILURE",
    "restartPolicyMaxRetries": 10
  }
}
```

### `.npmrc` (npm config)
```
include=optional
legacy-peer-deps=false
```

---

## Troubleshooting

**If deployment fails, check:**

1. ✅ Does `build/` folder exist after build? (not `dist/`)
2. ✅ Is `server.js` correctly pointing to `build/`?
3. ✅ Is `package.json` set to `"type": "module"`?
4. ✅ Are build and start commands correct in Railway settings?
5. ✅ Is Node version >=20? (check `engines` in package.json)
6. ✅ Are all Tailwind colors defined in `tailwind.config.js`?
7. ✅ Is `railway.json` using `npm install` (not `npm ci`)?

---

**Last Updated**: Based on current project configuration
**Build Output**: `build/` directory
**Railway Builder**: Railpack
**Node Version**: >=20

