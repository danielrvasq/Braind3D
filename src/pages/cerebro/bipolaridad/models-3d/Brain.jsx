/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function ModeloBipolar(props) {
  const { scene } = useGLTF('/models-3d/Brain2.glb');
  const modelRef = useRef(); // referencia para manipular el modelo

  useFrame((state, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += delta * 0.8; // Velocidad de rotación (más alto = más rápido)
    }
  });

  return <primitive ref={modelRef} object={scene} {...props} />;
}