declare module "*.css";
// src/global.d.ts
import { MeshProps, GroupProps } from '@react-three/fiber';
import { TextProps as DreiTextProps } from '@react-three/drei';

// If you use other drei primitives (Image, Scroll, etc) you can add more entries
declare global {
  namespace JSX {
    interface IntrinsicElements {
      // basic r3f primitives
      mesh: MeshProps;
      group: GroupProps;
      // drei Text component isn't typed as an intrinsic by default — treat as any or import Drei type
      Text: Partial<DreiTextProps> & { children?: unknown };
      // Add more if you use them as intrinsic elements:
      // planeGeometry: any;
      // meshBasicMaterial: any;
    }
  }
}

export {};
