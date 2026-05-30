const fs = require('fs');
let html = fs.readFileSync('D:/SYNFLOW/index.html', 'utf8');

// 1. Marquee images
html = html.replace(/<img src="assets\/(cakehouse|gamethon|kpss|letsfame|rmchri|yatra)\.png"([^>]+alt="[^"]+")>/g, 
    '<img src="assets/$1.png"$2 loading="lazy" decoding="async" width="320" height="360">');

// 2. Unsplash images
html = html.replace(/<img src="https:\/\/images\.unsplash\.com([^"]+)"([^>]+alt="[^"]+")>/g, 
    '<img src="https://images.unsplash.com$1"$2 loading="lazy" decoding="async" width="800" height="800">');

fs.writeFileSync('D:/SYNFLOW/index.html', html);
console.log('Images optimized successfully.');
