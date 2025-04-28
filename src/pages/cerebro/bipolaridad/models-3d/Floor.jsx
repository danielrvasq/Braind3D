import { MeshReflectorMaterial } from '@react-three/drei';
export default function Floor() {
  return (
    <mesh rotation-x={-Math.PI / 2} position={[0, -1, 0]} receiveShadow>
      <planeGeometry args={[30, 30]} />
      <MeshReflectorMaterial
        blur={[400, 100]}
        resolution={1024}
        mixBlur={1}
        mixStrength={50}
        roughness={1}
        depthScale={1.2}
        minDepthThreshold={0.4}
        maxDepthThreshold={1.25}
        color="#999999"
        metalness={0.5}
      />
    </mesh>
  );
}