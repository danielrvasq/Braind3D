import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export function Rocks(props) {
  const { nodes, materials } = useGLTF("/models-3d/Rocks.glb");
  return (
    <RigidBody type="dynamic" colliders="ball">
      <group {...props} dispose={null} position={[0, 10, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rock_Type6_01_mesh.geometry}
          material={materials.color3}
          position={[0, 0, 0]}
          scale={0.5}
        />
      </group>
    </RigidBody>
  );
}

useGLTF.preload("/models-3d/Rocks.glb");
