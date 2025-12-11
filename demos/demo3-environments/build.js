// Build script for environment demo
const fs = require('fs');
const path = require('path');

console.log('Building application...');

// Create dist directory
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Create application files
const appContent = {
  version: '2.0.0',
  buildTime: new Date().toISOString(),
  features: [
    'Environment-aware configuration',
    'Secure secret management',
    'Deployment gating',
    'Multi-stage pipeline'
  ]
};

fs.writeFileSync(
  path.join(distDir, 'app.json'),
  JSON.stringify(appContent, null, 2)
);

// Create a simple HTML file
const htmlContent = `<!DOCTYPE html>
<html>
<head>
  <title>Environment Demo App</title>
</head>
<body>
  <h1>GitHub Actions Environment Demo</h1>
  <p>Version: ${appContent.version}</p>
  <p>Built: ${appContent.buildTime}</p>
</body>
</html>`;

fs.writeFileSync(path.join(distDir, 'index.html'), htmlContent);

console.log('✓ Build completed successfully!');
console.log(`  Output: ${distDir}`);
console.log(`  Files: ${fs.readdirSync(distDir).join(', ')}`);
