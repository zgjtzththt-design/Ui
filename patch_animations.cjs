const fs = require('fs');

const replacements = [
  { from: /cubic-bezier\(\.67,\.2,\.38,1\.27\)/g, to: 'cubic-bezier(0.23, 1, 0.32, 1)' },
  { from: /cubic-bezier\(\.14,1\.34,\.41,1\)/g, to: 'cubic-bezier(0.23, 1, 0.32, 1)' },
  { from: /cubic-bezier\(1,-0\.13,\.27,1\.34\)/g, to: 'cubic-bezier(0.23, 1, 0.32, 1)' },
  { from: /cubic-bezier\(0\.175, 0\.885, 0\.32, 1\.275\)/g, to: 'cubic-bezier(0.23, 1, 0.32, 1)' },
  { from: /cubic-bezier\(\.62,0,\.25,1\.36\)/g, to: 'cubic-bezier(0.23, 1, 0.32, 1)' },
  { from: /cubic-bezier\(\.68,\.01,\.62,\.14\)/g, to: 'cubic-bezier(0.23, 1, 0.32, 1)' },
  { from: /cubic-bezier\(0\.35, 1\.31, 0\.47, 1\)/g, to: 'cubic-bezier(0.23, 1, 0.32, 1)' },
  { from: /cubic-bezier\(\.77, -0\.1, 0\.79, -0\.52\)/g, to: 'cubic-bezier(0.23, 1, 0.32, 1)' },
  { from: /cubic-bezier\(0\.84, -1\.12, 0\.55, 0\.55\)/g, to: 'cubic-bezier(0.23, 1, 0.32, 1)' },
  { from: /cubic-bezier\(0\.18, 0\.89, 0\.32, 1\.28\)/g, to: 'cubic-bezier(0.23, 1, 0.32, 1)' }
];

function patchFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;
  replacements.forEach(r => {
    content = content.replace(r.from, r.to);
  });
  if (content !== original) {
    fs.writeFileSync(filePath, content);
    console.log(`Patched ${filePath}`);
  } else {
    console.log(`No changes needed for ${filePath}`);
  }
}

patchFile('public/OriginOS_web/all.js');
patchFile('public/OriginOS_web/style.css');
