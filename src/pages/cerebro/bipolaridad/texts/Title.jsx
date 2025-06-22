/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

import { Text3D } from "@react-three/drei";

const Title = ({ text, position, color, rotation, size = 2 }) => {
  return (
    <group position={[-8, -0.5, 0]}>
      <Text3D
        font="/fonts/roboto.json"
        size={size} // ahora acepta tamaño dinámico
        height={0.3}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.1}
        bevelSize={0.05}
        bevelSegments={1}
        position={position}
        center
        rotation={rotation}
      >
        {text}
        <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
      </Text3D>
    </group>
  );
};

export default Title;
