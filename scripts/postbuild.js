const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'out');

function ensureDualCompatibility(slug) {
  const folder = path.join(outDir, 'privacy', slug);
  const htmlFile = path.join(outDir, 'privacy', `${slug}.html`);
  const indexFile = path.join(folder, 'index.html');

  if (fs.existsSync(indexFile)) {
    fs.copyFileSync(indexFile, htmlFile);
    console.log(`Copied index.html to ${slug}.html for dual trailing-slash/extensionless support`);
  } else if (fs.existsSync(htmlFile)) {
    fs.mkdirSync(folder, { recursive: true });
    fs.copyFileSync(htmlFile, indexFile);
    console.log(`Copied ${slug}.html to index.html for dual trailing-slash/extensionless support`);
  }
}

ensureDualCompatibility('qrcodescanner');
ensureDualCompatibility('expenze');

