/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations, PositionalAudio } from "@react-three/drei";

export function Girl({
  externDanceTrigger = false,
  resetDanceTrigger,
  ...props
}) {
  const group = useRef();
  const soundRef = useRef();
  const timeoutRef = useRef(null);
  const isAnimating = useRef(false);
  const { nodes, materials, animations } = useGLTF("/models-3d/Girl.glb");
  const { actions } = useAnimations(animations, group);

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

    // Reproducir sonido posicional
    if (soundRef.current && soundRef.current.isPlaying === false) {
      soundRef.current.play();
    }

    timeoutRef.current = setTimeout(() => {
      danceAction.fadeOut(0.5);
      idleAction.reset().fadeIn(0.5).play();
      isAnimating.current = false;

      if (soundRef.current) {
        soundRef.current.stop();
      }
    }, 20000); // 20 segundos
  };

  useEffect(() => {
    const idleAction = actions["Parado"];
    if (idleAction) {
      idleAction.reset().fadeIn(0.5).play();
    }

    const handleKeyDown = (event) => {
      if (event.key.toLowerCase() === "b") {
        reproducirBailar();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearTimeout(timeoutRef.current);
      if (soundRef.current) {
        soundRef.current.stop();
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

      {/* Sonido posicional */}
      <PositionalAudio
        ref={soundRef}
        url="/sounds/Music.mp3"
        distance={8}
        loop={false}
        autoplay={false}
      />
    </group>
  );
}

export default Girl;

useGLTF.preload("/models-3d/Girl.glb");
