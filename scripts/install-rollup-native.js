#!/usr/bin/env node

// Install native modules for Linux (only needed on Railway/Linux)
// This script safely handles errors and works on all platforms

import { execSync } from 'child_process';
import os from 'os';

// Only try to install on Linux
if (os.platform() === 'linux') {
  // Rebuild rollup to ensure native modules are properly installed
  try {
    console.log('Rebuilding rollup with optional dependencies...');
    execSync('npm rebuild rollup --include=optional', {
      stdio: 'inherit',
      env: process.env
    });
    console.log('Successfully rebuilt rollup');
  } catch (error) {
    // If rebuild fails, try installing the native module directly
    try {
      console.log('Installing @rollup/rollup-linux-x64-gnu...');
      execSync('npm install --save-optional @rollup/rollup-linux-x64-gnu', {
        stdio: 'inherit',
        env: process.env
      });
      console.log('Successfully installed rollup native module');
    } catch (error2) {
      console.log('Rollup native module installation skipped');
    }
  }

  console.log('Native module installation complete');
} else {
  console.log('Skipping native module installation (not on Linux)');
  process.exit(0);
}

