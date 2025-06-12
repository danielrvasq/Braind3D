/* eslint-disable react/no-unknown-property */
/* eslint-disable react/display-name */
import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

const Developer = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models-3d/Developer.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    const esperarAction = actions["Esperar"];
    if (esperarAction) {
      esperarAction.reset().fadeIn(0.5).play();
    }

    return () => {
      esperarAction?.fadeOut(0.5).stop();
    };
  }, [actions]);

  return (
    <group ref={group} position={[2, -1, 0]} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <skinnedMesh
            name="temp"
            castShadow
            geometry={nodes.temp.geometry}
            material={materials["Material.002"]}
            skeleton={nodes.temp.skeleton}
          />
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
    </group>
  );
};

export default Developer;

useGLTF.preload("/models-3d/Developer.glb");
