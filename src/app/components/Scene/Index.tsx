'use client';
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import Model from './Model'

export default function ModelScene() {
  return (
    <div className="max-w-screen h-screen bg-black">
      <Canvas>
        <directionalLight intensity={2} position={[0, 2, 3]} />
        <Environment preset="city" />
        <Model />
      </Canvas>
    </div>
  )
}
