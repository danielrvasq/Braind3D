/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Girl(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models-3d/Girl.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    const danceAction = actions["Bailar"];
    if (danceAction) {
      danceAction.reset().fadeIn(0.5).play();
    }
  }, [actions]);

  return (
    <group ref={group} {...props} position={[-2, -1, 0]} dispose={null}>
      <group name="Scene">
        <group name="Armature001" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <skinnedMesh
            name="temp001"
            castShadow
            geometry={nodes.temp001.geometry}
            material={materials["Material.002"]}
            skeleton={nodes.temp001.skeleton}
          />
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
    </group>
  );
}

export default Girl;

useGLTF.preload("/models-3d/Girl.glb");
