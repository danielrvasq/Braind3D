/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Text, RoundedBox, Environment } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export default function Respuesta({
  onClick,
  mensaje,
  color,
  posicion,
  tamanio,
  type,
  isCorrect
}) {
  return (
    <>
      <RigidBody type={type}>
        <group position={posicion} rotation={[Math.PI / 2, 0, 0]}>
          <RoundedBox
            args={tamanio}
            radius={0.1}
            smoothness={4}
            onClick={onClick}
            castShadow
          >
            <meshPhysicalMaterial
              color={color}
              metalness={1}
              roughness={0.1}
              clearcoat={1}
              clearcoatRoughness={0}
            />
          </RoundedBox>

          <Text
            position={[0, 0.3, 0]}
            fontSize={0.3}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
            rotation={[-Math.PI / 2, 0, 0]}
          >
            {mensaje}
          </Text>
        </group>
      </RigidBody>
    </>
  );
}
