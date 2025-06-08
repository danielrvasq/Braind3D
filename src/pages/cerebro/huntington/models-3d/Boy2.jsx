/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three";

export function Boy2({ externSaludarTrigger = false, resetSaludarTrigger }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models-3d/Boy2.glb");
  const { actions, mixer } = useAnimations(animations, group);
  const originalPosition = useRef([0, -1, 0]);
  const isAnimating = useRef(false);

  const reproducirSaludar = () => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    // 🔊 Reproducir sonido
    const audio = new Audio("/sounds/hello.mp3");
    audio.volume = 0.6; // controla el volumen
    audio.play().catch((e) => console.error("Error al reproducir sonido:", e));

    if (group.current) {
      group.current.position.fromArray(originalPosition.current);
    }

    actions["Standing"]?.fadeOut(0.2);

    actions["Saludar"]?.reset().setLoop(THREE.LoopOnce, 1).fadeIn(0.2).play();

    const onFinished = () => {
      actions["Saludar"]?.fadeOut(0.2);
      actions["Standing"]?.reset().fadeIn(0.5).play();

      if (group.current) {
        group.current.position.fromArray(originalPosition.current);
      }

      isAnimating.current = false;
      mixer.removeEventListener("finished", onFinished);
    };

    mixer.addEventListener("finished", onFinished);
  };
  useEffect(() => {
    if (group.current) {
      originalPosition.current = group.current.position.toArray();
    }

    actions["Standing"]?.reset().fadeIn(0.5).play();

    const handleKeyDown = (e) => {
      if (e.key.toLowerCase() === "s") {
        reproducirSaludar();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [actions, mixer]);

  useEffect(() => {
    if (externSaludarTrigger) {
      reproducirSaludar();
      resetSaludarTrigger(); // resetear el trigger en el padre
    }
  }, [externSaludarTrigger]);

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
