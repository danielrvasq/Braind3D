import { useFrame } from "@react-three/fiber";
import React, { useEffect, useRef, useState, useMemo } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { clone } from "three/examples/jsm/utils/SkeletonUtils";

const Human = ({ startAnimation }) => {
  const group = useRef();
  const { scene, animations } = useGLTF("/models-3d/human.glb");
  const clonedScene = useMemo(() => clone(scene), [scene]);
  const { actions } = useAnimations(animations, group);

  // Estado para posición y rotación
  const [position, setPosition] = useState([0, 0, 0]);

  // Guardar referencias a las animaciones que usaremos
  const defaultAnimationName = useMemo(() => {
    // Buscar una animación distinta a la de Mixamo
    // Por ejemplo, que no contenga 'mixamo' en el nombre
    return animations.find(
      (clip) => !clip.name.toLowerCase().includes("mixamo")
    )?.name;
  }, [animations]);

  useEffect(() => {
    if (!actions) return;

    const mixamoAction = actions["Armature|mixamo.com|Layer0"];
    const defaultAction = defaultAnimationName ? actions[defaultAnimationName] : null;

    if (startAnimation) {
      // Detener animación por defecto y reproducir Mixamo
      if (defaultAction) defaultAction.fadeOut(0.5);
      if (mixamoAction) {
        mixamoAction.reset().fadeIn(0.5).play();
      }
    } else {
      // Reproducir animación por defecto y parar Mixamo
      if (mixamoAction) mixamoAction.fadeOut(0.5);
      if (defaultAction) {
        defaultAction.reset().fadeIn(0.5).play();
      }
    }
  }, [startAnimation, actions, defaultAnimationName]);

  // Movimiento con teclado (igual que antes)
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
      <primitive object={clonedScene} scale={0.4} />
    </group>
  );
};

export default Human;
