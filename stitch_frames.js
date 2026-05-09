import fs from 'fs';
import path from 'path';
import jimp from 'jimp';

const framesDir = 'public/OriginOS_web/originos_data/bootframes';
const outputImage = 'public/OriginOS_web/originos_data/boot_sprite.jpg';

async function stitch() {
  const files = fs.readdirSync(framesDir).filter(f => f.endsWith('.jpg')).sort();
  console.log(`Found ${files.length} frames`);
  
  if (files.length === 0) return;

  // Read all images
  const images = [];
  for (let i=0; i<files.length; i++) {
    images.push(await jimp.read(path.join(framesDir, files[i])));
  }

  // Assuming all frames have same size
  const width = images[0].bitmap.width;
  const height = images[0].bitmap.height;

  // Since CSS sprite requires a very tall image, we can just stitch them vertically
  // Max dimension for canvas is usually 32767 for hardware, but for CSS it can be high.
  // 145 frames * height (e.g. 100px) = 14500px, which is fine.
  
  console.log(`Width: ${width}, Height: ${height}, Total Height: ${height * files.length}`);

  const sprite = await jimp.create(width, height * files.length);

  for (let i = 0; i < images.length; i++) {
    sprite.composite(images[i], 0, height * i);
    console.log(`Composited frame ${i}`);
  }

  await sprite.writeAsync(outputImage);
  console.log('Sprite created successfully at', outputImage);
}

stitch().catch(console.error);
