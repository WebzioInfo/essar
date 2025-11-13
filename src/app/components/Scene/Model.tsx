import React, { useRef } from 'react'
import { MeshTransmissionMaterial, useGLTF, Text } from "@react-three/drei"
import { useFrame, useThree } from '@react-three/fiber'
import { useControls } from 'leva'
import * as THREE from 'three'

export default function Model() {
  const { nodes } = useGLTF("/medias/torrus.glb")
  const { viewport } = useThree()
  const torus = useRef<THREE.Mesh>(null!)

  useFrame(() => {
    torus.current.rotation.x += 0.02
  })

      const controls = useControls({
    thickness: { value: 0.2, min: 0, max: 3, step: 0.05 },
    roughness: { value: 0, min: 0, max: 1, step: 0.1 },
    transmission: { value: 1, min: 0, max: 1, step: 0.1 },
    ior: { value: 1.2, min: 0, max: 3, step: 0.1 },
    chromaticAberration: { value: 0.02, min: 0, max: 1 },
    backside: { value: true },
  });

  // Provide a stable production fallback so Leva doesn't control runtime values
  const materialProps =
    process.env.NODE_ENV === "development"
      ? controls
      : {
          thickness: 0.2,
          roughness: 0,
          transmission: 1,
          ior: 1.2,
          chromaticAberration: 0.02,
          backside: true,
        };

  return (
    <group >
      <Text
        font="/fonts/PPNeueMontreal-Bold.otf"
        position={[0, 0, -1]}
        fontSize={viewport.width / 11}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        Empowering Your Vision
      </Text>
      <mesh ref={torus} {...nodes.Torus002} scale={viewport.width / 3}>
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
    </group>
  )
}
