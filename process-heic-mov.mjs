import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';
import heicConvert from 'heic-convert';
import ffmpegPath from 'ffmpeg-static';
import { execFile } from 'child_process';
import { promisify } from 'util';

const execFileAsync = promisify(execFile);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PUBLIC_DIR = path.join(__dirname, 'public');

const heicMappings = {
  'assets/instapani_jar.HEIC': 'images/projects/instapani/instapani-jar-production.webp',
  'assets/tirur_project_inside.HEIC': 'images/projects/tirur/tirur-interior-01.webp',
  'IMG_6130.HEIC': 'images/projects/gangothri/gangothri-production-01.webp',
};

const movMappings = {
  'IMG_0304.MOV': 'videos/projects/faiha/faiha-operations-01.mp4',
  'IMG_1454.MOV': 'videos/projects/kenby/kenby-factory-02.mp4',
  'IMG_1457.MOV': 'videos/projects/instapani/instapani-operations-02.mp4',
  'IMG_1463.MOV': 'videos/projects/gangothri/gangothri-operations-02.mp4',
  'IMG_1476.MOV': 'videos/projects/tirur/tirur-operations-02.mp4',
  'IMG_1489.MOV': 'videos/projects/ponnani/ponnani-operations-02.mp4',
  'IMG_1490.MOV': 'videos/projects/faiha/faiha-machinery-02.mp4',
  'IMG_1491.MOV': 'videos/projects/kenby/kenby-machinery-03.mp4',
  'IMG_1492.MOV': 'videos/projects/instapani/instapani-lab-01.mp4',
  'IMG_1493.MOV': 'videos/projects/gangothri/gangothri-lab-01.mp4',
  'IMG_6145.MOV': 'videos/projects/tirur/tirur-exterior-02.mp4',
};

const pngMappings = {
  'IMG_4150.PNG': 'images/projects/kenby/kenby-site-02.webp',
  'IMG_4151.PNG': 'images/projects/instapani/instapani-site-02.webp',
  'IMG_4152.PNG': 'images/projects/gangothri/gangothri-site-02.webp',
  'IMG_4153.PNG': 'images/projects/faiha/faiha-site-02.webp',
  'IMG_4154.PNG': 'images/projects/tirur/tirur-site-02.webp',
  'IMG_4155.PNG': 'images/projects/ponnani/ponnani-site-02.webp',
  'IMG_4156.PNG': 'images/projects/kenby/kenby-team-01.webp',
  'IMG_4157.PNG': 'images/projects/instapani/instapani-team-02.webp',
};

async function convertHeicToWebp(inputPath, outputPath) {
  console.log(`Converting HEIC: ${inputPath} -> ${outputPath}`);
  const inputBuffer = fs.readFileSync(inputPath);
  try {
    const outputBuffer = await heicConvert({
      buffer: inputBuffer,
      format: 'JPEG',
      quality: 1 // 1 is max quality for heic-convert intermediate jpeg
    });
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    await sharp(outputBuffer)
      .resize({ width: 2560, withoutEnlargement: true }) // Preserve larger resolutions
      .webp({ quality: 90, effort: 6 }) // Max quality settings
      .toFile(outputPath);
    console.log(`Success: ${outputPath}`);
  } catch (err) {
    console.error(`Failed to convert HEIC ${inputPath}:`, err);
  }
}

async function convertPngToWebp(inputPath, outputPath) {
  console.log(`Converting PNG: ${inputPath} -> ${outputPath}`);
  try {
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    await sharp(inputPath)
      .resize({ width: 2560, withoutEnlargement: true })
      .webp({ quality: 90, effort: 6 })
      .toFile(outputPath);
    console.log(`Success: ${outputPath}`);
  } catch (err) {
    console.error(`Failed to convert PNG ${inputPath}:`, err);
  }
}

async function convertMovToMp4(inputPath, outputPath) {
  console.log(`Converting MOV: ${inputPath} -> ${outputPath}`);
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  // High quality H.264
  const args = [
    '-i', inputPath,
    '-c:v', 'libx264',
    '-preset', 'slow',
    '-crf', '23',
    '-c:a', 'aac',
    '-b:a', '192k',
    '-movflags', '+faststart',
    '-y',
    outputPath
  ];
  try {
    await execFileAsync(ffmpegPath, args);
    console.log(`Success: ${outputPath}`);
  } catch (err) {
    console.error(`Failed to convert MOV ${inputPath}:`, err);
  }
}

async function run() {
  for (const [oldPath, newPath] of Object.entries(heicMappings)) {
    const src = path.join(PUBLIC_DIR, oldPath);
    const dest = path.join(PUBLIC_DIR, newPath);
    if (fs.existsSync(src)) {
      await convertHeicToWebp(src, dest);
      fs.unlinkSync(src);
    }
  }

  for (const [oldPath, newPath] of Object.entries(pngMappings)) {
    const src = path.join(PUBLIC_DIR, oldPath);
    const dest = path.join(PUBLIC_DIR, newPath);
    if (fs.existsSync(src)) {
      await convertPngToWebp(src, dest);
      fs.unlinkSync(src);
    }
  }

  for (const [oldPath, newPath] of Object.entries(movMappings)) {
    const src = path.join(PUBLIC_DIR, oldPath);
    const dest = path.join(PUBLIC_DIR, newPath);
    if (fs.existsSync(src)) {
      await convertMovToMp4(src, dest);
      fs.unlinkSync(src);
    }
  }
  
  // Cleanup public/assets folder
  const assetsDir = path.join(PUBLIC_DIR, 'assets');
  if (fs.existsSync(assetsDir)) {
    try {
      fs.rmSync(assetsDir, { recursive: true, force: true });
      console.log('Forcibly removed assets directory.');
    } catch (e) {
      console.log('Could not remove assets directory.', e.message);
    }
  }

  console.log('Advanced media conversion complete!');
}

run().catch(console.error);
