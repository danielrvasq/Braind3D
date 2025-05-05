import { useGLTF, Text } from "@react-three/drei";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

const Puerta = (props) => {
  const { nodes, materials } = useGLTF("/models-3d/puerta.glb");
  const puertaRef = useRef();
  const [called, setCalled] = useState(false);

  return (
    <group
      {...props}
      dispose={null}
      ref={puertaRef}
      onClick={() => setCalled(!called)}
    >
      <group position={[0, 0.991, -0.383]} rotation={[0, 0.659, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Canterbury_Door_1981__762_1.geometry}
          material={materials.WhiteWoodHorizontal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Canterbury_Door_1981__762_2.geometry}
          material={materials.WhiteWoodVertical}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Canterbury_Door_1981__762_3.geometry}
          material={materials.Metal}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Basic_Door_Frame_1981__762.geometry}
        material={materials.WhiteWood}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Basic_Door_Frame_1981__762_1.geometry}
        material={materials.Metal}
      />

      {/* Texto que aparece al hacer clic */}
      {called && (
        <Text
          position={[0, 2.5, 0]} // Puedes ajustar según la altura de tu puerta
          fontSize={0.2}
          color="Black"
          anchorX="center"
          anchorY="middle"
        >
          ¿Hola?
          ¿Estas ahi?
        </Text>
      )}
    </group>
  );
};

export default Puerta;
useGLTF.preload("/models-3d/puerta.glb");
