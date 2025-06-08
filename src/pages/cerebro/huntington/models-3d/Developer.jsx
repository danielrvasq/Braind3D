/* eslint-disable react/no-unknown-property */
/* eslint-disable react/display-name */
import React, {
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle,
  useState,
} from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three";

const Developer = forwardRef(({ onStateChange, ...props }, ref) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models-3d/Developer.glb");
  const { actions } = useAnimations(animations, group);
  const [hasBeenHit, setHasBeenHit] = useState(false);

  // Reporta el estado al padre
  useEffect(() => {
    onStateChange?.(hasBeenHit);
  }, [hasBeenHit, onStateChange]);

  useEffect(() => {
    if (actions["Esperar"]) {
      actions["Esperar"].reset().fadeIn(0.5).play();
    }

    return () => {
      actions["Esperar"]?.fadeOut(0.5).stop();
    };
  }, [actions]);

  useImperativeHandle(ref, () => ({
    playNext: () => {
      if (!hasBeenHit) {
        if (actions["Golpear"]) {
          actions["Esperar"]?.stop();
          actions["Golpear"].reset();
          actions["Golpear"].clampWhenFinished = true;
          actions["Golpear"].loop = THREE.LoopOnce;
          actions["Golpear"].play();
          setHasBeenHit(true);
        }
      } else {
        if (actions["Levantar"]) {
          actions["Golpear"]?.stop();
          actions["Levantar"].reset();
          actions["Levantar"].clampWhenFinished = true;
          actions["Levantar"].loop = THREE.LoopOnce;
          actions["Levantar"].play();

          // Escuchar cuando termine "Levantar"
          actions["Levantar"].getMixer().addEventListener("finished", (e) => {
            if (e.action.getClip().name === "Levantar" && actions["Esperar"]) {
              actions["Esperar"].reset().fadeIn(0.5).play();
              setHasBeenHit(false);
            }
          });
        }
      }
    },
  }));

  return (
    <group ref={group} position={[0, -1, 0]} {...props} dispose={null}>
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
});

export default Developer;
useGLTF.preload("/models-3d/Developer.glb");
