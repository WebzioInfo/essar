import fs from 'fs';
import path from 'path';

/**
 * Retrieves all media files (images and videos) for a given project slug.
 * This should only be called within Server Components or Server Actions.
 */
const SLUG_ALIASES: Record<string, string> = {
  greenmount: 'tirur',
  'tirur-project': 'tirur',
  greenway: 'ponnani',
  'ponnani-project': 'ponnani',
};

export function getProjectMedia(slug: string) {
  const publicDir = path.join(process.cwd(), 'public');
  const folderName = SLUG_ALIASES[slug] || slug;
  
  const imagesDir = path.join(publicDir, 'images', 'projects', folderName);
  const videosDir = path.join(publicDir, 'videos', 'projects', folderName);
  
  const images: string[] = [];
  const videos: string[] = [];
  
  if (fs.existsSync(imagesDir)) {
    const files = fs.readdirSync(imagesDir).sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));
    for (const file of files) {
      if (['.webp', '.avif', '.jpg', '.jpeg', '.png'].includes(path.extname(file).toLowerCase())) {
        images.push(`/images/projects/${folderName}/${file}`);
      }
    }
  }

  if (fs.existsSync(videosDir)) {
    const files = fs.readdirSync(videosDir).sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));
    for (const file of files) {
      if (['.mp4', '.webm'].includes(path.extname(file).toLowerCase())) {
        videos.push(`/videos/projects/${folderName}/${file}`);
      }
    }
  }

  return {
    images,
    videos
  };
}
