#!/usr/bin/env node

// Install native modules for Linux (only needed on Railway/Linux)
// This script safely handles errors and works on all platforms

import { execSync } from 'child_process';
import os from 'os';

// Only try to install on Linux
if (os.platform() === 'linux') {
  // Install rollup native module
  try {
    console.log('Installing @rollup/rollup-linux-x64-gnu...');
    execSync('npm install --no-save --include=optional @rollup/rollup-linux-x64-gnu', {
      stdio: 'inherit',
      env: process.env
    });
    console.log('Successfully installed rollup native module');
  } catch (error) {
    console.log('Rollup native module installation skipped (may already be installed)');
  }

  // Reinstall lightningcss with optional dependencies to ensure native modules are available
  try {
    console.log('Reinstalling lightningcss with optional dependencies...');
    execSync('npm install --no-save --include=optional lightningcss', {
      stdio: 'inherit',
      env: process.env
    });
    console.log('Successfully reinstalled lightningcss');
  } catch (error) {
    console.log('Lightningcss reinstall skipped (may already be installed)');
  }

  console.log('Native module installation complete');
} else {
  console.log('Skipping native module installation (not on Linux)');
  process.exit(0);
}

