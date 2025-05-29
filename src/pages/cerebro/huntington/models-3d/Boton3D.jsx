import { Text, RoundedBox } from "@react-three/drei";

export default function Boton3D({ onClick }) {
  return (
    <group position={[-1, 0, -0.5]} rotation={[Math.PI / 2, 0, -0.6]}>
      <RoundedBox
        args={[2, 0.5, 1]}
        radius={0.2}
        smoothness={4}
        onClick={onClick}
        castShadow={true}
      >
        <meshStandardMaterial color="#2196f3" />
      </RoundedBox>

      <Text
        position={[0, 0.3, 0]}
        fontSize={0.3}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        rotation={[-Math.PI / 2, 0, 0]}
      >
        Saludar
      </Text>
    </group>
  );
}
