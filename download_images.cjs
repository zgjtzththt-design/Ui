const https = require('https');
const fs = require('fs');

const urls = [
  'https://imagetourl.cloud/8xuc6x6h.webp',
  'https://imagetourl.cloud/pwfarnuv.jpg',
  'https://imagetourl.cloud/brdk5gue.png',
  'https://imagetourl.cloud/o2294zny.jpg',
  'https://imagetourl.cloud/ikwfi2pa.webp'
];

const destDir = 'public/OriginOS_web/originos_data/wallpapers';
if (!fs.existsSync(destDir)){
    fs.mkdirSync(destDir, { recursive: true });
}

Promise.all(urls.map((url, i) => {
  return new Promise((resolve, reject) => {
    const fileName = `wallpaper_${i + 1}${url.slice(url.lastIndexOf('.'))}`;
    const dest = `${destDir}/${fileName}`;
    const file = fs.createWriteStream(dest);
    https.get(url, function(response) {
      if (response.statusCode === 301 || response.statusCode === 302) {
          https.get(response.headers.location, function(res) {
             res.pipe(file);
             file.on('finish', function() {
                file.close(resolve);
             });
          });
      } else {
        response.pipe(file);
        file.on('finish', function() {
          file.close(resolve);
        });
      }
    }).on('error', function(err) {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
})).then(() => {
  console.log("Downloads complete.");
}).catch(err => {
  console.error("Download failed:", err);
});
