#!/usr/bin/env node

// Install native modules for Linux (only needed on Railway/Linux)
// This script safely handles errors and works on all platforms

import { execSync } from 'child_process';
import os from 'os';

// Only try to install on Linux
if (os.platform() === 'linux') {
  // Install rollup native module - try multiple methods to ensure it works
  try {
    console.log('Installing @rollup/rollup-linux-x64-gnu...');
    // First try: install as optional dependency (most reliable)
    execSync('npm install --include=optional @rollup/rollup-linux-x64-gnu', {
      stdio: 'inherit',
      env: { ...process.env, npm_config_optional: 'true' }
    });
    console.log('Successfully installed rollup native module');
  } catch (error) {
    // If that fails, try installing it directly
    try {
      console.log('Trying direct installation...');
      execSync('npm install @rollup/rollup-linux-x64-gnu --no-save', {
        stdio: 'inherit',
        env: process.env
      });
      console.log('Successfully installed rollup native module');
    } catch (error2) {
      console.log('Warning: Rollup native module installation failed');
      console.log('Build may fail if native module is required');
    }
  }

  console.log('Native module installation complete');
} else {
  console.log('Skipping native module installation (not on Linux)');
  process.exit(0);
}
