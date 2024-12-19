'use client';

import {OrbitControls} from '@react-three/drei';
import {Canvas} from '@react-three/fiber';

export const Experience = () => {
  return (
    <>
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <directionalLight intensity={4} position={[10, 10, 10]} />
      </Canvas>
    </>
  );
};
