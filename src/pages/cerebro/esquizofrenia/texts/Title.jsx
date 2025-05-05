// TextoEsquizofrenia.jsx
import { Text3D } from "@react-three/drei";
import { useMemo } from "react";
import * as THREE from "three";

const Title = () => {
  const color = useMemo(() => new THREE.Color("#4CAF50"), []);

  return (
    <group position={[-5, 0, 1]}> {/* Esto fuerza la posición central */}
      <Text3D
        font="/fonts/fuente1.json"
        size={1}
        height={0.5}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.1}
        bevelSize={0.05}
        bevelSegments={5}
        position={[0, 0, 0]} // Posición relativa al grupo
      >
        ESQUIZOFRENIA
        <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
      </Text3D>
    </group>
  );
};

export default Title;
