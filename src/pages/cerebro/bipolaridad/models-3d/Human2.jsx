import { useFrame } from "@react-three/fiber";
import React, { useEffect, useRef, useState, useMemo } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { clone } from "three/examples/jsm/utils/SkeletonUtils";

const Human2 = ({ startAnimation }) => {
  const group = useRef();
  const { scene, animations } = useGLTF("/models-3d/human2.glb");
  const clonedScene = useMemo(() => clone(scene), [scene]);
  const { actions } = useAnimations(animations, group);

  const [position, setPosition] = useState([0, 0, 0]);

  // 🔁 Animación por defecto "Idle" apenas carga
  useEffect(() => {
    const idleAction = actions["Kiss"];
    if (idleAction) {
      idleAction.reset().fadeIn(0.5).play();
    }
  }, [actions]);

  // 🎯 Animación activada por botón "Taunt"
  useEffect(() => {
    const tauntAction = actions["dodge"];
    const idleAction = actions["Kiss"];

    if (startAnimation) {
      idleAction?.fadeOut(0.5);
      tauntAction?.reset().fadeIn(0.5).play();
    } else {
      tauntAction?.fadeOut(0.5).stop();
      idleAction?.reset().fadeIn(0.5).play();
    }
  }, [startAnimation, actions]);

  // 🎮 Movimiento con teclado
  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key.toLowerCase();
      setPosition((prev) => {
        const [x, y, z] = prev;
        switch (key) {
          case "arrowup":
          case "w":
            return [x, y, z - 0.1];
          case "arrowdown":
          case "s":
            return [x, y, z + 0.1];
          case "arrowleft":
          case "a":
            return [x - 0.1, y, z];
          case "arrowright":
          case "d":
            return [x + 0.1, y, z];
          default:
            return prev;
        }
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <group ref={group} position={position}>
      <primitive object={clonedScene} scale={0.7} />
    </group>
  );
};

export default Human2;
