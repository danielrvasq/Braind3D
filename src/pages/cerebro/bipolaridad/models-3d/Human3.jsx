import { useFrame } from "@react-three/fiber";
import React, { useEffect, useRef, useState, useMemo } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

import { clone } from "three/examples/jsm/utils/SkeletonUtils";

const Human = ({ startAnimation }) => {
  const group = useRef();
  const { scene, animations } = useGLTF("/models-3d/human3.glb");
  const clonedScene = useMemo(() => clone(scene), [scene]);
  const { actions } = useAnimations(animations, group);

  // Estado para posición y rotación
  const [position, setPosition] = useState([0, 0, 0]);

  // Animación de Mixamo
  useEffect(() => {
    const action = actions["dancing"];
    if (action) {
      if (startAnimation) {
        action.reset().fadeIn(0.5).play();
      } else {
        action.fadeOut(0.5).stop();
      }
    }
  }, [startAnimation, actions]);

  // Movimiento con teclado
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

export default Human;
