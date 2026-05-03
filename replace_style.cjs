const fs = require('fs');
const file = 'public/OriginOS_web/style.css';
let content = fs.readFileSync(file, 'utf8');
content = content.replace(/https:\/\/images\.unsplash\.com\/photo-1618005182384-a83a8bd57fbe\?q=80&w=2564&auto=format&fit=crop/g, 'originos_data/wallpapers/wallpaper_1.webp');
fs.writeFileSync(file, content);
