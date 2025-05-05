import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Mesa = (props) => {
  const { nodes, materials } = useGLTF("/models-3d/mesa.glb");
  const mesaRef = useRef();

  return (
    <group {...props} dispose={null} ref={mesaRef}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.garden_table.geometry}
        material={materials.garden_table}
        scale={0.5}
        position={[0, -1, 0]}
        rotation={[0, Math.PI * 0.25, 0]}
      />
    </group>
  );
};

export default Mesa;
useGLTF.preload("models-3d/mesa.glb");