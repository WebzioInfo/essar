import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Directories to create
const dirs = [
  'public/images/hero',
  'public/images/founder',
  'public/images/company',
  'public/images/services',
  'public/images/projects/kenby',
  'public/images/projects/instapani',
  'public/images/projects/gangothri',
  'public/images/projects/faiha',
  'public/images/projects/tirur',
  'public/images/projects/ponnani',
  'public/videos/hero',
  'public/videos/projects/kenby',
  'public/videos/projects/instapani',
  'public/videos/projects/gangothri',
  'public/videos/projects/faiha',
  'public/videos/projects/tirur',
  'public/videos/projects/ponnani',
  'public/gifs/process',
  'public/gifs/laboratory',
  'public/gifs/machinery',
  'public/logos',
  'public/icons',
];

for (const dir of dirs) {
  const fullPath = path.join(__dirname, dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
  }
}
console.log('Directories created successfully.');
