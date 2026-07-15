import sharp from 'sharp';
import { readdir } from 'fs/promises';
import { join, extname } from 'path';

const inputDir = './src/assets/images';
const files = await readdir(inputDir);

for (const file of files) {
  const ext = extname(file).toLowerCase();
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue;
  
  const inputPath = join(inputDir, file);
  const outputPath = join(inputDir, file);
  
  if (ext === '.jpg' || ext === '.jpeg') {
    await sharp(inputPath)
      .jpeg({ quality: 75, mozjpeg: true })
      .toBuffer()
      .then(buf => sharp(buf).toFile(outputPath));
  } else {
    await sharp(inputPath)
      .png({ compressionLevel: 9, quality: 75 })
      .toBuffer()
      .then(buf => sharp(buf).toFile(outputPath));
  }
  
  console.log(`✓ ${file}`);
}
console.log('Done!');