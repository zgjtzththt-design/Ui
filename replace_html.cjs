const fs = require('fs');
let html = fs.readFileSync('public/OriginOS_web/index.html', 'utf8');

// Add data-i18n="back" to all elements with class="back-button"
html = html.replace(/<div class="back-button"([^>]*)>/g, (match, p1) => {
    if(!p1.includes('data-i18n')) {
        return `<div class="back-button"${p1} data-i18n="back">`;
    }
    return match;
});

// Write it back
fs.writeFileSync('public/OriginOS_web/index.html', html);
console.log('Fixed back buttons');
