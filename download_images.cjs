const https = require('https');
const fs = require('fs');

const urls = [
  'https://imagetourl.cloud/8xuc6x6h.webp',
  'https://imagetourl.cloud/pwfarnuv.jpg',
  'https://imagetourl.cloud/brdk5gue.png',
  'https://imagetourl.cloud/o2294zny.jpg',
  'https://imagetourl.cloud/ikwfi2pa.webp',
  'https://raw.githubusercontent.com/Zun-Htet/HyperOS-Wallpapers/main/HyperOS%20Wallpapers/HyperOS%20(1).jpg',
  'https://raw.githubusercontent.com/Zun-Htet/HyperOS-Wallpapers/main/HyperOS%20Wallpapers/HyperOS%20(2).jpg',
  'https://raw.githubusercontent.com/Zun-Htet/HyperOS-Wallpapers/main/HyperOS%20Wallpapers/HyperOS%20(3).jpg',
  'https://raw.githubusercontent.com/Zun-Htet/HyperOS-Wallpapers/main/HyperOS%20Wallpapers/HyperOS%20(4).jpg',
  'https://raw.githubusercontent.com/Zun-Htet/HyperOS-Wallpapers/main/HyperOS%20Wallpapers/HyperOS%20(5).jpg',
  'https://raw.githubusercontent.com/Zun-Htet/HyperOS-Wallpapers/main/HyperOS%20Wallpapers/HyperOS%20(6).jpg',
  'https://raw.githubusercontent.com/Zun-Htet/HyperOS-Wallpapers/main/HyperOS%20Wallpapers/HyperOS%20(7).jpg',
  'https://raw.githubusercontent.com/Zun-Htet/HyperOS-Wallpapers/main/HyperOS%20Wallpapers/HyperOS%20(8).jpg',
  'https://raw.githubusercontent.com/Zun-Htet/HyperOS-Wallpapers/main/HyperOS%20Wallpapers/HyperOS%20(9).jpg',
  'https://raw.githubusercontent.com/Zun-Htet/HyperOS-Wallpapers/main/HyperOS%20Wallpapers/HyperOS%20(10).jpg',
  'https://raw.githubusercontent.com/Zun-Htet/HyperOS-Wallpapers/main/HyperOS%20Wallpapers/HyperOS%20(11).jpg',
  'https://raw.githubusercontent.com/Zun-Htet/HyperOS-Wallpapers/main/HyperOS%20Wallpapers/HyperOS%20(12).jpg',
  'https://raw.githubusercontent.com/Zun-Htet/HyperOS-Wallpapers/main/HyperOS%20Wallpapers/HyperOS%20(13).jpg',
  'https://raw.githubusercontent.com/Zun-Htet/HyperOS-Wallpapers/main/HyperOS%20Wallpapers/HyperOS%20(14).jpg',
  'https://raw.githubusercontent.com/Zun-Htet/HyperOS-Wallpapers/main/HyperOS%20Wallpapers/HyperOS%20(15).jpg',
  'https://raw.githubusercontent.com/Zun-Htet/HyperOS-Wallpapers/main/HyperOS%20Wallpapers/HyperOS%20(16).jpg',
  'https://raw.githubusercontent.com/Zun-Htet/HyperOS-Wallpapers/main/HyperOS%20Wallpapers/HyperOS%20(17).jpg',
  'https://res.cloudinary.com/dhlxcif1m/image/upload/v1777836757/giyfh4tdeqfh5hrcrfnc.jpg'
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
