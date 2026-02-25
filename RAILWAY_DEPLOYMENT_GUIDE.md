# Railway Deployment Guide

This document outlines the complete process for deploying a Vite + React SPA to Railway, including all the steps taken to avoid common deployment errors.

## Table of Contents
1. [Project Overview](#project-overview)
2. [Pre-Deployment Checklist](#pre-deployment-checklist)
3. [Railway Deployment Methods](#railway-deployment-methods)
4. [Step-by-Step Deployment](#step-by-step-deployment)
5. [Common Errors & Solutions](#common-errors--solutions)
6. [Post-Deployment Verification](#post-deployment-verification)
7. [Best Practices](#best-practices)

---

## Project Overview

This is a **Vite + React Single Page Application (SPA)** with the following characteristics:
- **Build Tool**: Vite 6.3.5
- **Framework**: React 18.3.1
- **Styling**: Tailwind CSS 3.4.17 (using PostCSS, not @tailwindcss/vite)
- **Build Output**: Static files in `build/` directory (configured in vite.config.ts)
- **Package Manager**: npm
- **Railway Build System**: Railpack (auto-detected)

### Key Configuration Files
- `package.json` - Contains build script: `"build": "node node_modules/vite/bin/vite.js build"`
- `vite.config.ts` - Vite configuration with React plugin and `outDir: 'build'`
- `index.html` - Entry HTML file
- `server.js` - Express server for serving static files (REQUIRED for Railway)

---

## Pre-Deployment Checklist

Before deploying to Railway, ensure:

- [x] **Node.js version compatibility**: Railway uses Node.js 22.22.0 (Railpack default)
- [x] **Build script works locally**: Run `npm run build` successfully
- [x] **No hardcoded localhost URLs**: All API calls use environment variables
- [x] **Base path configured**: Set `base: '/'` in `vite.config.ts` (already done)
- [x] **Environment variables documented**: Create `.env.example` file if needed
- [x] **Dependencies are production-ready**: React/React-DOM in peerDependencies (acceptable)
- [x] **Rollup version override**: Using Rollup 3.29.4 to avoid native binary issues
- [ ] **Server.js created**: Express server for serving static files (REQUIRED)
- [ ] **Start script added**: `"start": "node server.js"` in package.json

---

## Railway Deployment Methods

For a Vite SPA, there are **two main approaches**:

### Method 1: Static Site with Node.js Server (Recommended for this project)
Use a simple Node.js server to serve static files. This provides better control and SPA routing support.

### Method 2: Railway Static Site (If Available)
Railway's static site hosting (if supported in your region).

**This project uses Method 1** for reliability and SPA routing support.

**Note**: Railway uses **Railpack** (not Nixpacks) for this project, which auto-detects Node.js and Vite configurations.

---

## Step-by-Step Deployment

### Step 1: Create a Static File Server

Since Vite builds static files, we need a server to serve them. Create a simple Node.js server:

**Create `server.js` in the root directory:**

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

### Step 2: Update package.json

Add the server dependency and start script:

```json
{
  "scripts": {
    "build": "node node_modules/vite/bin/vite.js build",
    "dev": "vite",
    "preview": "vite preview",
    "start": "node server.js"
  },
  "dependencies": {
    // ... existing dependencies
    "express": "^4.18.2"
  }
}
```

**Important**: 
- The `start` script is what Railway uses to run your application after build
- Keep the build script as `node node_modules/vite/bin/vite.js build` (avoids permission issues)

### Step 3: Verify vite.config.ts

Your current configuration is correct:

```typescript
import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'esnext',
    outDir: 'build',  // ✅ Matches server.js directory
  },
  server: {
    port: 3000,
    open: true,
    allowedHosts: ['localhost', 'longevityloungev1-production.up.railway.app'],
  },
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
```

**Key Points**:
- ✅ `base: '/'` is set correctly
- ✅ `outDir: 'build'` matches server.js
- ✅ Using Tailwind CSS v3 (no lightningcss native module issues)
- ✅ Rollup 3.29.4 override prevents native binary issues

### Step 4: Create .railwayignore (Optional)

Create a `.railwayignore` file to exclude unnecessary files from deployment:

```
node_modules
.git
.env.local
.env.development
.vscode
*.log
.DS_Store
scripts/install-rollup-native.js
```

### Step 5: Railway Dashboard Setup

1. **Create a new project** on Railway
   - Go to [railway.app](https://railway.app)
   - Click "New Project"
   - Select "Deploy from GitHub repo" (recommended) or "Empty Project"

2. **Connect your repository**
   - If using GitHub: Authorize Railway and select your repository
   - Railway will automatically detect it's a Node.js project using **Railpack**

3. **Railpack Auto-Detection**
   - Railway's Railpack will automatically detect:
     - **Build Command**: `npm ci` (then `npm run build`)
     - **Start Command**: `npm start` (from your package.json)
   - **Output Directory**: `build` (from vite.config.ts)
   - Verify these in the project settings

4. **Set Environment Variables** (if needed)
   - Go to Variables tab
   - Add any required environment variables
   - Example: `NODE_ENV=production`

5. **Deploy**
   - Railway will automatically deploy on push to main branch
   - Or click "Deploy" manually

---

## Common Errors & Solutions

### Error 1: "Cannot find module 'express'"
**Cause**: Express not installed or not in dependencies.

**Solution**:
```bash
npm install express
```
Ensure it's in `dependencies`, not `devDependencies`.

---

### Error 2: "Port already in use" or "EADDRINUSE"
**Cause**: Not using Railway's PORT environment variable.

**Solution**: Always use `process.env.PORT` in your server:
```javascript
const PORT = process.env.PORT || 3000;
```

---

### Error 3: "Cannot GET /route" (404 errors on refresh)
**Cause**: SPA routing not configured. Direct URL access fails.

**Solution**: Implement SPA fallback in server.js (see Step 1). All routes must serve `index.html`.

---

### Error 4: "Build failed" - Missing dependencies
**Cause**: Peer dependencies not installed or version mismatches.

**Solution**:
1. React and React-DOM are in `peerDependencies` (acceptable for this project)
2. If needed, move them to `dependencies`:
```json
"dependencies": {
  "react": "18.3.1",
  "react-dom": "18.3.1"
}
```

---

### Error 5: "Module not found" during build
**Cause**: Path aliases or imports not resolving correctly.

**Solution**: 
- Verify `vite.config.ts` has correct path aliases (✅ already configured)
- Check all imports use correct paths
- Ensure `@/` alias points to `./src` (✅ already configured)

---

### Error 6: "Static assets 404"
**Cause**: Assets not being served correctly or wrong base path.

**Solution**:
1. Check `vite.config.ts` has `base: '/'` (✅ already set)
2. Ensure server serves from `build` directory (matches `outDir: 'build'`)
3. Verify asset paths in built HTML are relative

---

### Error 7: "Build succeeds but app shows blank page"
**Cause**: 
- JavaScript errors in production
- Missing environment variables
- Incorrect base path
- Server not serving from correct directory

**Solution**:
1. Check Railway logs for JavaScript errors
2. Verify all environment variables are set
3. Check browser console for errors
4. Ensure `index.html` is being served correctly
5. Verify server.js serves from `build/` directory (not `dist/`)

---

### Error 8: "Cannot find module @rollup/rollup-linux-x64-gnu"
**Cause**: Rollup 4.x tries to use native binaries which have npm optional dependency bugs.

**Solution**: ✅ **Already fixed** - Using Rollup 3.29.4 override in package.json:
```json
"overrides": {
  "rollup": "3.29.4"
}
```

---

### Error 9: "Out of memory" during build
**Cause**: Large dependencies or insufficient build resources.

**Solution**:
1. Optimize dependencies (remove unused packages)
2. Use build optimizations in `vite.config.ts`:
```typescript
build: {
  chunkSizeWarningLimit: 1000,
  rollupOptions: {
    output: {
      manualChunks: {
        vendor: ['react', 'react-dom'],
      },
    },
  },
}
```

---

### Error 10: "TypeError: Failed to fetch" or CORS issues
**Cause**: API endpoints not configured or CORS not handled.

**Solution**:
- If using external APIs, ensure CORS is configured on the API side
- Use environment variables for API URLs
- Check Railway logs for network errors

---

### Error 11: "Build command not found" or "Start command not found"
**Cause**: Railway not detecting scripts or using wrong commands.

**Solution**:
1. Ensure `package.json` has both `build` and `start` scripts
2. Railway's Railpack should auto-detect, but you can explicitly set:
   - Build Command: `npm ci && npm run build`
   - Start Command: `npm start`
3. Or create `railway.json`:
```json
{
  "$schema": "https://railway.app/railway.schema.json",
  "build": {
    "builder": "RAILPACK",
    "buildCommand": "npm ci && npm run build"
  },
  "deploy": {
    "startCommand": "npm start",
    "restartPolicyType": "ON_FAILURE",
    "restartPolicyMaxRetries": 10
  }
}
```

---

## Post-Deployment Verification

After deployment, verify:

1. **Homepage loads**: Visit your Railway URL
2. **SPA routing works**: Navigate to different routes and refresh
3. **Static assets load**: Images, CSS, and JS files load correctly
4. **No console errors**: Check browser console
5. **Environment variables**: Verify any required env vars are set
6. **Performance**: Check load times and bundle sizes

### Testing Checklist
- [ ] Homepage loads successfully
- [ ] All routes accessible (including direct URL access)
- [ ] Images and assets load correctly
- [ ] No 404 errors in Network tab
- [ ] No JavaScript errors in console
- [ ] Mobile responsiveness works
- [ ] Environment variables are accessible (if used)

---

## Best Practices

### 1. Use Environment Variables
Never hardcode API URLs or secrets:
```javascript
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';
```

### 2. Optimize Build Output
- Enable compression in Railway (automatic)
- Use code splitting for large apps
- Optimize images before including in assets

### 3. Monitor Logs
- Check Railway logs regularly
- Set up error tracking (e.g., Sentry)
- Monitor build times and sizes

### 4. Version Control
- Commit `server.js` to repository
- Document all environment variables
- Keep `package.json` dependencies up to date

### 5. Security
- Never commit `.env` files
- Use Railway's environment variables
- Keep dependencies updated for security patches

### 6. Performance
- Enable Railway's CDN (if available)
- Use proper caching headers
- Optimize bundle sizes

### 7. Rollup Native Module Issues
- ✅ Use Rollup 3.x override to avoid native binary issues
- ✅ Removed lightningcss (using Tailwind CSS v3 instead)
- ✅ No prebuild/postinstall scripts needed

---

## Quick Reference: File Structure

```
project-root/
├── build/                    # Build output (generated, gitignored)
├── src/                      # Source code
├── scripts/                  # Build scripts
│   └── install-rollup-native.js  # (No longer needed, but harmless)
├── index.html               # Entry HTML
├── package.json             # Dependencies & scripts
├── vite.config.ts           # Vite configuration
├── tailwind.config.js       # Tailwind CSS v3 config
├── postcss.config.mjs       # PostCSS config
├── server.js                # Production server (REQUIRED)
├── .railwayignore           # Railway ignore file (optional)
├── .npmrc                   # npm config (optional dependencies)
└── README.md                # Project documentation
```

---

## Troubleshooting Commands

If deployment fails, try these locally first:

```bash
# Clean install
rm -rf node_modules package-lock.json
npm install

# Test build
npm run build

# Test server locally
PORT=3000 npm start

# Check for issues
npm audit
npm outdated
```

---

## Summary

**Key Takeaways for This Project:**

1. ✅ **Create server.js** for serving static files from `build/` directory
2. ✅ **Add `start` script** to package.json: `"start": "node server.js"`
3. ✅ **Install express** as a dependency
4. ✅ **Use `process.env.PORT`** for the server port
5. ✅ **Implement SPA fallback routing** (serve index.html for all routes)
6. ✅ **Build output is `build/`** (not `dist/`) - matches vite.config.ts
7. ✅ **Rollup 3.29.4 override** prevents native binary issues
8. ✅ **Tailwind CSS v3** avoids lightningcss native module issues
9. ✅ **Test build locally** before deploying
10. ✅ **Check Railway logs** when issues occur

---

## Additional Resources

- [Railway Documentation](https://docs.railway.app)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [Express Static Files](https://expressjs.com/en/starter/static-files.html)
- [Railpack Documentation](https://railway.app/docs/railpack)

---

**Last Updated**: Based on successful deployment of this project
**Railway Version**: Latest (Railpack 0.17.2)
**Node.js Version**: 22.22.0 (Railpack default)
**Build Output**: `build/` directory
**Rollup Version**: 3.29.4 (via override)

