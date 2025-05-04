/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useEffect } from "react";

export default function ModeloBipolar(props) {
  const { scene } = useGLTF('/models-3d/Brain2.glb');
  const modelRef = useRef();
  

  // ✅ Activamos la sombra para cada parte del modelo
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
      }
    });
  }, [scene]);

  useFrame((state, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += delta * 0.8;
    }
  });
  
  return <primitive ref={modelRef} object={scene} {...props} />;
}
