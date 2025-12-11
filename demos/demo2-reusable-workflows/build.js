// Build script for demo
const fs = require('fs');
const path = require('path');

console.log('Starting build process...');

// Create dist directory
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Create a simple output file
const buildOutput = {
  buildTime: new Date().toISOString(),
  version: '1.0.0',
  status: 'success'
};

fs.writeFileSync(
  path.join(distDir, 'build-info.json'),
  JSON.stringify(buildOutput, null, 2)
);

console.log('Build completed successfully!');
console.log(`Output directory: ${distDir}`);
