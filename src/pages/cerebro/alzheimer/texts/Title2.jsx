import { Text3D } from "@react-three/drei";
import { useMemo } from "react";
import * as THREE from "three";
import "./Title2.css";

const Title2 = ({ txt3D }) => {
  const color = useMemo(() => new THREE.Color("black"), []);

  return (
    <group position={[-8, -0.5, 0]}>
      <Text3D
        font="/fonts/Mitchel_Regular.json"
        size={0.5}
        height={0.3}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.1}
        bevelSize={0.05}
        bevelSegments={1}
        position={[8.1, 1.6, -2]}
      >
        {txt3D}
        <meshNormalMaterial/>
      </Text3D>
    </group>
  );
};

export default Title2;