#!/usr/bin/env node

// Install rollup native module for Linux (only needed on Railway/Linux)
// This script safely handles errors and works on all platforms

import { execSync } from 'child_process';
import os from 'os';

// Only try to install on Linux
if (os.platform() === 'linux') {
  try {
    console.log('Installing @rollup/rollup-linux-x64-gnu...');
    execSync('npm install --no-save --include=optional @rollup/rollup-linux-x64-gnu', {
      stdio: 'inherit',
      env: process.env
    });
    console.log('Successfully installed rollup native module');
  } catch (error) {
    // Silently fail - this is expected if already installed or if there's an issue
    console.log('Rollup native module installation skipped (may already be installed)');
    process.exit(0);
  }
} else {
  console.log('Skipping rollup native module installation (not on Linux)');
  process.exit(0);
}

