// src/types/drei.d.ts
// Make sure this file is included by tsconfig.json (see note below)

import 'react';

declare module '@react-three/drei' {
  // Augment the ImageProps interface so <Image alt="..." /> is allowed
  interface ImageProps {
    /**
     * Decorative alt text for accessibility linting.
     * It's optional because these are canvas textures (not DOM images).
     */
    alt?: string;
  }
}
