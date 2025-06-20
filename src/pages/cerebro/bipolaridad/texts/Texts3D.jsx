/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import React, { useMemo } from "react";
import { Text3D } from "@react-three/drei";
import * as THREE from "three";

const Title = ({ text }) => {
  const color = useMemo(() => new THREE.Color("#FFFFF1"), []);

  return (
    <group position={[-8, -0.5, 0]}>
      <Text3D
        font="/fonts/roboto.json"
        size={2}
        height={0.3}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.1}
        bevelSize={0.05}
        bevelSegments={1}
        position={[0, 0, 0]}
        center
      >
        {text}
        <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
      </Text3D>
    </group>
  );
};

export default Title;
