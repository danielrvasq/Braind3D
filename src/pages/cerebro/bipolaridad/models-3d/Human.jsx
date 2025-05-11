import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Human = ({ startAnimation }) => {
  const group = useRef();
  const { scene, animations } = useGLTF("/models-3d/human.glb");
  const { actions } = useAnimations(animations, group);
  const [rotationY, setRotationY] = useState(0);

  // Animación de Mixamo
  useEffect(() => {
    if (actions && actions["Armature|mixamo.com|Layer0"]) {
      if (startAnimation) {
        actions["Armature|mixamo.com|Layer0"].reset().fadeIn(0.5).play();
      } else {
        actions["Armature|mixamo.com|Layer0"].fadeOut(0.5).stop();
      }
    }
  }, [startAnimation, actions]);

  // Evento de teclado: rotar con tecla "r"
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key.toLowerCase() === "r") {
        setRotationY((prev) => prev + 0.1); // Aumenta rotación Y
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Aplica rotación en cada frame
  useFrame(() => {
    if (group.current) {
      group.current.rotation.y = rotationY;
    }
  });

  // Evento de mouse: click en modelo
  const handleClick = () => {
    alert("¡Modelo humano clickeado!");
  };

  return (
    <group ref={group} onClick={handleClick}>
      <primitive object={scene} scale={1} />
    </group>
  );
};

export default Human;
