#!/usr/bin/env node
// This script builds a static version of the site for self-hosting

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('Building static site for export...');

// Create export-build directory if it doesn't exist
if (!fs.existsSync('export-build')) {
  fs.mkdirSync('export-build');
}

try {
  // Build the frontend only using our special export configuration
  execSync('npx vite build --config vite.export.config.ts', { stdio: 'inherit' });
  
  console.log('\nStatic site built successfully in the "export-build" folder!');
  console.log('\nTo download the built files:');
  console.log('1. Use the Replit file browser to navigate to the export-build folder');
  console.log('2. Right-click on the folder and select "Download"');
  console.log('3. This will download a zip file containing your static website');
  console.log('\nTo deploy your site:');
  console.log('1. Unzip the downloaded file on your computer');
  console.log('2. Upload the contents to any static hosting service like GitHub Pages, Netlify, Vercel, or any web hosting that supports static sites');
  
} catch (error) {
  console.error('Error building static site:', error);
  process.exit(1);
}