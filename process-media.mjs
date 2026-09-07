import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.join(__dirname, 'public');

// Mapping of old relative path to new relative path
const imageMappings = {
  // Logos
  'logo.png': 'logos/logo-dark.png',
  'logoWhite.png': 'logos/logo-light.png',
  'logocrop.png': 'logos/logo-icon.png',
  'logoWhitecrop.png': 'logos/logo-icon-light.png',
  
  // Images to convert
  'assets/drone_factory_exterior.png': 'images/projects/kenby/kenby-exterior-01.webp',
  'assets/factory_architecture.png': 'images/services/plant-design.webp',
  'assets/founder_portrait.png': 'images/founder/founder-portrait.webp',
  'assets/hero_bottling_line.png': 'images/hero/hero-bottling-line.webp',
  'assets/hero_factory.png': 'images/hero/hero-water-factory.webp',
  'assets/instapani_brand.png': 'images/projects/instapani/instapani-brand-01.webp',
  'assets/laboratory_testing.png': 'images/services/laboratory-setup.webp',
  'clients_logo/kenby.png': 'images/projects/kenby/kenby-logo.webp',
};

const copyMappings = {
  // Static files to just move
  'favicon.ico': 'logos/favicon.ico',
  'favicon-16x16.png': 'logos/favicon-16x16.png',
  'favicon-32x32.png': 'logos/favicon-32x32.png',
  'apple-touch-icon.png': 'logos/apple-touch-icon.png',
  'android-chrome-192x192.png': 'logos/android-chrome-192.png',
  'android-chrome-512x512.png': 'logos/android-chrome-512.png',
};

async function processMedia() {
  // Process Images
  for (const [oldPath, newPath] of Object.entries(imageMappings)) {
    const src = path.join(PUBLIC_DIR, oldPath);
    const dest = path.join(PUBLIC_DIR, newPath);

    if (fs.existsSync(src)) {
      if (newPath.endsWith('.webp')) {
        await sharp(src)
          .webp({ quality: 80 })
          .toFile(dest);
        console.log(`Converted ${oldPath} to ${newPath}`);
      } else {
        // Just copy if not webp
        fs.copyFileSync(src, dest);
        console.log(`Copied ${oldPath} to ${newPath}`);
      }
    } else {
      console.warn(`Source file missing: ${src}`);
    }
  }

  // Process static copies
  for (const [oldPath, newPath] of Object.entries(copyMappings)) {
    const src = path.join(PUBLIC_DIR, oldPath);
    const dest = path.join(PUBLIC_DIR, newPath);

    if (fs.existsSync(src)) {
      fs.copyFileSync(src, dest);
      console.log(`Copied ${oldPath} to ${newPath}`);
    } else {
      console.warn(`Source file missing: ${src}`);
    }
  }

  console.log('Media processing complete.');
}

processMedia().catch(console.error);
