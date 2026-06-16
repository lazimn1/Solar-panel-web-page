import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const assetsDir = './src/assets';
const publicDir = './public';

const targets = [
  // Asset images (hero slides)
  { input: `${assetsDir}/solar-installation.png`, output: `${assetsDir}/solar-installation.webp`, width: 1920 },
  { input: `${assetsDir}/solar-farm.png`, output: `${assetsDir}/solar-farm.webp`, width: 1920 },
  { input: `${assetsDir}/solar-rooftop.png`, output: `${assetsDir}/solar-rooftop.webp`, width: 1920 },
  { input: `${assetsDir}/solar-closeup.png`, output: `${assetsDir}/solar-closeup.webp`, width: 1920 },
  // Company logo (used in navbar, footer, favicon)
  { input: `${assetsDir}/Company-Logo.png`, output: `${assetsDir}/Company-Logo.webp`, width: 400 },
  { input: `${publicDir}/Company-Logo.png`, output: `${publicDir}/Company-Logo.webp`, width: 400 },
];

async function compress() {
  for (const t of targets) {
    if (!fs.existsSync(t.input)) {
      console.log(`⏭  Skipped (not found): ${t.input}`);
      continue;
    }

    const originalSize = fs.statSync(t.input).size;

    await sharp(t.input)
      .resize(t.width, null, { withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(t.output);

    const newSize = fs.statSync(t.output).size;
    const savings = ((1 - newSize / originalSize) * 100).toFixed(1);

    console.log(`✅ ${path.basename(t.input)} → ${path.basename(t.output)}`);
    console.log(`   ${(originalSize / 1024).toFixed(0)}KB → ${(newSize / 1024).toFixed(0)}KB (${savings}% smaller)\n`);
  }

  console.log('🎉 Done! Now update your imports to use .webp files.');
}

compress().catch(console.error);
