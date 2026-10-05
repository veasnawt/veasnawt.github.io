const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'out');

// Ensure dual compatibility for /privacy/qrcodescanner and /privacy/qrcodescanner/
const folder = path.join(outDir, 'privacy', 'qrcodescanner');
const htmlFile = path.join(outDir, 'privacy', 'qrcodescanner.html');
const indexFile = path.join(folder, 'index.html');

if (fs.existsSync(indexFile)) {
  fs.copyFileSync(indexFile, htmlFile);
  console.log('Copied index.html to qrcodescanner.html for dual trailing-slash/extensionless support');
} else if (fs.existsSync(htmlFile)) {
  fs.mkdirSync(folder, { recursive: true });
  fs.copyFileSync(htmlFile, indexFile);
  console.log('Copied qrcodescanner.html to index.html for dual trailing-slash/extensionless support');
}
