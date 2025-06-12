/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Boy2() {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models-3d/Boy2.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions["Standing"]?.reset().fadeIn(0.5).play();

    return () => {
      actions["Standing"]?.fadeOut(0.5).stop();
    };
  }, [actions]);

  return (
    <group ref={group} position={[0, -1, 0]} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <skinnedMesh
            name="temp"
            castShadow
            geometry={nodes.temp.geometry}
            material={materials["Material.001"]}
            skeleton={nodes.temp.skeleton}
          />
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
    </group>
  );
}

export default Boy2;

useGLTF.preload("/models-3d/Boy2.glb");
