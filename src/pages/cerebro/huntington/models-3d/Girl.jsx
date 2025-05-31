/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three";

export function Girl({
  externDanceTrigger = false,
  resetDanceTrigger,
  ...props
}) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models-3d/Girl.glb");
  const { actions, mixer } = useAnimations(animations, group);
  const isAnimating = useRef(false);
  const audioRef = useRef(null);
  const timeoutRef = useRef(null);

  const reproducirBailar = () => {
    const idleAction = actions["Parado"];
    const danceAction = actions["Bailar"];
    if (
      !danceAction ||
      !idleAction ||
      isAnimating.current ||
      danceAction.isRunning()
    )
      return;

    isAnimating.current = true;
    idleAction.fadeOut(0.5);
    danceAction.reset().fadeIn(0.5).play();

    // Reproducir audio
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }

    timeoutRef.current = setTimeout(() => {
      danceAction.fadeOut(0.5);
      idleAction.reset().fadeIn(0.5).play();
      isAnimating.current = false;

      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    }, 20000); // 7 segundos
  };

  useEffect(() => {
    const idleAction = actions["Parado"];
    if (idleAction) {
      idleAction.reset().fadeIn(0.5).play();
    }

    // Inicializar audio
    audioRef.current = new Audio("/sounds/Music.mp3");
    audioRef.current.loop = true;

    const handleKeyDown = (event) => {
      if (event.key.toLowerCase() === "b") {
        reproducirBailar();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearTimeout(timeoutRef.current);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, [actions]);

  useEffect(() => {
    if (externDanceTrigger) {
      reproducirBailar();
      resetDanceTrigger?.();
    }
  }, [externDanceTrigger]);

  return (
    <group ref={group} {...props} position={[0, -1, 0]} dispose={null}>
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
