import fs from 'fs';
import path from 'path';

/**
 * Retrieves all media files (images and videos) for a given project slug.
 * This should only be called within Server Components or Server Actions.
 */
export function getProjectMedia(slug: string) {
  const publicDir = path.join(process.cwd(), 'public');
  
  const imagesDir = path.join(publicDir, 'images', 'projects', slug);
  const videosDir = path.join(publicDir, 'videos', 'projects', slug);
  
  const images: string[] = [];
  const videos: string[] = [];
  
  if (fs.existsSync(imagesDir)) {
    const files = fs.readdirSync(imagesDir);
    for (const file of files) {
      if (['.webp', '.avif', '.jpg', '.jpeg', '.png'].includes(path.extname(file).toLowerCase())) {
        images.push(`/images/projects/${slug}/${file}`);
      }
    }
  }

  if (fs.existsSync(videosDir)) {
    const files = fs.readdirSync(videosDir);
    for (const file of files) {
      if (['.mp4', '.webm'].includes(path.extname(file).toLowerCase())) {
        videos.push(`/videos/projects/${slug}/${file}`);
      }
    }
  }

  return {
    images,
    videos
  };
}
