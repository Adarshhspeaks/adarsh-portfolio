import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

const ParticleBackground = () => {
  const ref = useRef();
  const [positions] = useState(() => {
    const pos = new Float32Array(5000 * 3);
    for (let i = 0; i < 5000 * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 10;
    }
    return pos;
  });

  useFrame((state, delta) => {
    if(ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial transparent color="#ffffff" size={0.015} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  );
};

export default ParticleBackground;
