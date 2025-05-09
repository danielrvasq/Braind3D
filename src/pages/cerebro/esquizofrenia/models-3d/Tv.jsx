import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Tv = (props) => {
  const { nodes, materials } = useGLTF("/models-3d/tv.glb");
  const tvRef = useRef();


  return (
    <group {...props} dispose={null} ref={tvRef}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube011.geometry}
        material={materials['Material.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube011_1.geometry}
        material={materials['Material.005']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube011_2.geometry}
        material={materials['Material.002']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube011_3.geometry}
        material={materials['Material.003']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube011_4.geometry}
        material={materials['Material.004']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube011_5.geometry}
        material={materials['Material.008']}
      />
    </group>
  );
};

export default Tv;
useGLTF.preload("models-3d/tv.glb");