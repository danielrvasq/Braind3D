/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useEffect, useState } from "react";
import * as THREE from "three";

const Brain = (props) => {
  const { nodes, materials } = useGLTF("/models-3d/Brain2.glb");
  const brainRef = useRef();
  const [clicked, setClicked] = useState(false); // 👈 Estado para alternar escala

  // Animación de rotación
  useFrame((state, delta) => {
    if (brainRef.current) {
      brainRef.current.rotation.y += 0.5 * delta;
    }
  });

  // Cambiar escala al hacer clic
  const handleClick = () => {
    setClicked((prev) => !prev);
    const newScale = clicked ? 0.9 : 1.4;
    brainRef.current.scale.set(newScale, newScale, newScale);
  };

  return (
    <group {...props} dispose={null} ref={brainRef}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Brain.geometry}
        material={materials.BrainMaterial}
        scale={0.9}
        position={[0, 0.5, 0]}
        rotation={[0, Math.PI * 0.25, 0]}
        onClick={handleClick} // 👈 Evento de mouse
      />
    </group>
  );
};

export default Brain;

// Preload para rendimiento
useGLTF.preload("/models-3d/Brain2.glb");
