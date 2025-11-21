// // src/components/FluidGlass.tsx
// "use client";
// import * as THREE from 'three';
// import { useRef, useState, useEffect, memo, ReactNode } from 'react';
// import { Canvas, createPortal, useFrame, useThree, ThreeElements, ThreeEvent } from '@react-three/fiber';
// import {
//   useFBO,
//   useGLTF,
//   useScroll,
//   Image,
//   Scroll,
//   Preload,
//   ScrollControls,
//   MeshTransmissionMaterial,
//   Text
// } from '@react-three/drei';
// import { easing } from 'maath';

// type Mode = 'lens';

// type ModeProps = Record<string, unknown>;

// interface FluidGlassProps {
//   mode?: Mode;
//   lensProps?: ModeProps;
// }

// export default function FluidGlass({ mode = 'lens', lensProps = {} }: FluidGlassProps) {
//   const rawOverrides = lensProps;

//   const {
//     ...modeProps
//   } = rawOverrides;

//   return (
//     <Canvas camera={{ position: [0, 0, 20], fov: 10 }} gl={{ alpha: true }}>
//       <ScrollControls damping={0.2} pages={3} distance={0.4}>
//         <Lens modeProps={modeProps}>
//           <Scroll>
//             <Typography />
//             <Images />
//           </Scroll>
//           <Scroll html />
//           <Preload />
//         </Lens>
//       </ScrollControls>
//     </Canvas>
//   );
// }

// type MeshProps = ThreeElements['mesh'];

// interface ModeWrapperProps extends MeshProps {
//   children?: ReactNode;
//   glb: string;
//   geometryKey: string;
//   lockToBottom?: boolean;
//   followPointer?: boolean;
//   modeProps?: ModeProps;
// }

// /* Zoom types */
// type ZoomMaterial = THREE.Material & { zoom: number };
// type ZoomMesh = THREE.Mesh<THREE.BufferGeometry, ZoomMaterial>;
// type ZoomGroup = THREE.Group & { children: ZoomMesh[] };

// /* Small typed shape for GLTF nodes (we only need .geometry) */
// interface GLTFNodes {
//   [key: string]: THREE.Mesh;
// }

// const ModeWrapper = memo(function ModeWrapper({
//   children,
//   glb,
//   geometryKey,
//   lockToBottom = false,
//   followPointer = true,
//   modeProps = {},
//   ...props
// }: ModeWrapperProps) {
//   const ref = useRef<THREE.Mesh>(null!);
//   // type the useGLTF result to avoid `any`
//   const { nodes } = useGLTF(glb) as unknown as { nodes: GLTFNodes };
//   const buffer = useFBO();
//   const { viewport: vp } = useThree();
//   const [scene] = useState<THREE.Scene>(() => new THREE.Scene());
//   const geoWidthRef = useRef<number>(1);

//   useEffect(() => {
//     const maybeMesh = nodes?.[geometryKey] as THREE.Mesh | undefined;
//     const geo = maybeMesh?.geometry as THREE.BufferGeometry | undefined;
//     if (!geo) return;
//     geo.computeBoundingBox();
//     geoWidthRef.current = (geo.boundingBox!.max.x - geo.boundingBox!.min.x) || 1;
//   }, [nodes, geometryKey]);

//   useFrame((state, delta) => {
//     const { gl, viewport, pointer, camera } = state;
//     const v = viewport.getCurrentViewport(camera, [0, 0, 15]);

//     const destX = followPointer ? (pointer.x * v.width) / 2 : 0;
//     const destY = lockToBottom ? -v.height / 2 + 0.2 : followPointer ? (pointer.y * v.height) / 2 : 0;
//     easing.damp3(ref.current.position, [destX, destY, 15], 0.15, delta);

//     if ((modeProps as { scale?: number }).scale == null) {
//       const maxWorld = v.width * 0.9;
//       const desired = maxWorld / geoWidthRef.current;
//       ref.current.scale.setScalar(Math.min(0.15, desired));
//     }

//     gl.setRenderTarget(buffer);
//     gl.render(scene, camera);
//     gl.setRenderTarget(null);
//     gl.setClearColor(0x5227ff, 1);
//   });

//   const { scale, ior, thickness, anisotropy, chromaticAberration, ...extraMat } = modeProps as {
//     scale?: number;
//     ior?: number;
//     thickness?: number;
//     anisotropy?: number;
//     chromaticAberration?: number;
//     [key: string]: unknown;
//   };

//   return (
//     <>
//       {createPortal(children, scene)}
//       <mesh scale={[vp.width, vp.height, 1]}>
//         <planeGeometry />
//         <meshBasicMaterial map={buffer.texture} transparent />
//       </mesh>
//       <mesh
//         ref={ref}
//         scale={scale ?? 0.15}
//         rotation-x={Math.PI / 2}
//         geometry={(nodes[geometryKey] as THREE.Mesh)?.geometry}
//         {...props}
//       >
//         <MeshTransmissionMaterial
//           buffer={buffer.texture}
//           ior={ior ?? 1.15}
//           thickness={thickness ?? 5}
//           anisotropy={anisotropy ?? 0.01}
//           chromaticAberration={chromaticAberration ?? 0.1}
//           {...(typeof extraMat === 'object' && extraMat !== null ? extraMat : {})}
//         />
//       </mesh>
//     </>
//   );
// });

// function Lens({ modeProps, ...p }: { modeProps?: ModeProps } & MeshProps) {
//   return <ModeWrapper glb="/assets/3d/lens.glb" geometryKey="Cylinder" followPointer modeProps={modeProps} {...p} />;
// }


// function Images() {
//   const group = useRef<ZoomGroup>(null!);
//   const data = useScroll();
//   const { height } = useThree(s => s.viewport);

//   useFrame(() => {
//     // safe-guard group and children exist
    
//     if (!group.current || !group.current.children) return;
//     const c = group.current.children;
//     if (c[0]?.material) c[0].material.zoom = 1 + data.range(0, 1 / 3) / 3;
//     if (c[1]?.material) c[1].material.zoom = 1 + data.range(0, 1 / 3) / 3;
//     if (c[2]?.material) c[2].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 2;
//     if (c[3]?.material) c[3].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 2;
//     if (c[4]?.material) c[4].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 2;
//   });

//   return (
//     <group ref={group}>
//        // no cleanup needed here
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//       <Image position={[-2, 0, 0]} scale={[3, height / 1.1]} url="/assets/demo/cs1.webp"  />
//       <Image position={[2, 0, 3]} scale={3} url="/assets/demo/cs2.webp" />
//       <Image position={[-2.05, -height, 6]} scale={[1, 3]} url="/assets/demo/cs3.webp" />
//       <Image position={[-0.6, -height, 9]} scale={[1, 2]} url="/assets/demo/cs1.webp" />
//       <Image position={[0.75, -height, 10.5]} scale={1.5} url="/assets/demo/cs2.webp" />
//     </group>
//   );
// }

// const TYPO_DEVICE = {
//   mobile: { fontSize: 0.2 },
//   tablet: { fontSize: 0.4 },
//   desktop: { fontSize: 0.6 }
// } as const;

// function Typography() {
//   const getDevice = () => {
//     const w = window.innerWidth;
//     return w <= 639 ? 'mobile' : w <= 1023 ? 'tablet' : 'desktop';
//   };

//   const [device, setDevice] = useState<keyof typeof TYPO_DEVICE>(getDevice());

//   useEffect(() => {
//     const onResize = () => setDevice(getDevice());
//     window.addEventListener('resize', onResize);
//     return () => window.removeEventListener('resize', onResize);
//   }, []);

//   const { fontSize } = TYPO_DEVICE[device];

//   return (
//     <Text
//       position={[0, 0, 12]}
//       fontSize={fontSize}
//       letterSpacing={-0.05}
//       outlineWidth={0}
//       outlineBlur="20%"
//       outlineColor="#000"
//       outlineOpacity={0.5}
//       color="white"
//       anchorX="center"
//       anchorY="middle"
//     >
//       ESSAR
//     </Text>
//   );
// }
