import { Text, RoundedBox } from "@react-three/drei";
import { Group } from "three";

const Tecla = ({ keyLabel, position }) => (
  <group position={position}>
    <RoundedBox args={[0.5, 0.5, 0.1]} radius={0.05} smoothness={2}>
      <meshStandardMaterial color="#eeeeee" />
    </RoundedBox>
    <Text
      position={[0, 0, 0.06]}
      fontSize={0.2}
      color="black"
      anchorX="center"
      anchorY="middle"
    >
      {keyLabel}
    </Text>
  </group>
);

const Control = () => {
  return (
    <group position={[-2, 0, 0]} rotation={[0, Math.PI / 2.5, 0]}>
      {/* Texto principal */}
      <Text
        fontSize={0.25}
        color="black"
        anchorX="center"
        anchorY="bottom"
        position={[0, 0.6, 0]}
      >
        Mueve con WASD
      </Text>

      {/* Distribución estilo teclado */}
      <Tecla keyLabel="W" position={[0, 0.2, 0]} />
      <Tecla keyLabel="A" position={[-0.6, -0.4, 0]} />
      <Tecla keyLabel="S" position={[0, -0.4, 0]} />
      <Tecla keyLabel="D" position={[0.6, -0.4, 0]} />
    </group>
  );
};

export default Control;
