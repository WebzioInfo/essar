declare module "vanta/dist/vanta.waves.min" {
  import * as THREE from "three";

  interface VANTAOptions {
    el: HTMLElement;
    THREE: typeof THREE;
    mouseControls?: boolean;
    touchControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    scale?: number;
    scaleMobile?: number;
    color?: number;
    shininess?: number;
    waveHeight?: number;
    waveSpeed?: number;
    zoom?: number;
    [key: string]: unknown;
  }

  export default function VANTA(options: VANTAOptions): {
    destroy: () => void;
  };
}
