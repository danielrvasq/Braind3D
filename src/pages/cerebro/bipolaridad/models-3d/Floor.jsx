import React from "react";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";

const Floor = () => {
  const grassTexture = useLoader(THREE.TextureLoader, "/textures/grass.jpg");

  // Para que la textura se repita en el plano
  grassTexture.wrapS = THREE.RepeatWrapping;
  grassTexture.wrapT = THREE.RepeatWrapping;
  grassTexture.repeat.set(4, 4); // repite 4 veces en X y Z (puedes ajustar)

  return (
    <mesh
      rotation-x={-Math.PI / 2}
      receiveShadow={true}
      position-y={-1}
      position-z={-0.5}
    >
      <circleGeometry args={[4, 32]} />
      <meshStandardMaterial map={grassTexture} roughness={1} metalness={0} />
    </mesh>
  );
};

export default Floor;
