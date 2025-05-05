/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useEffect } from "react";

import * as THREE from 'three';

export default function ModeloBipolar(props) {
  const { scene, animations } = useGLTF('/models-3d/Brain2.glb');
  const modelRef = useRef();
  const mixer = useRef(null);
  
  // Inicializamos el AnimationMixer para manejar las animaciones
  useEffect(() => {
    if (animations && animations.length) {
      mixer.current = new THREE.AnimationMixer(scene);
      animations.forEach((clip) => {
        mixer.current.clipAction(clip).play();
      });
    }
  }, [animations, scene]);

  // Activamos la sombra para cada parte del modelo
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
      }
    });
  }, [scene]);

  // Reducimos el tamaño del modelo
  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.scale.set(0.8, 0.8, 0.8); // Reducimos el tamaño al 30%
    }
  }, []);

  // Actualizamos la animación en cada frame
  useFrame((state, delta) => {
    if (mixer.current) {
      mixer.current.update(delta);
    }

    if (modelRef.current) {
      modelRef.current.rotation.y += delta * 0.5;

      // Limitar la posición del modelo para que no se salga de la vista
      modelRef.current.position.x = THREE.MathUtils.clamp(modelRef.current.position.x, -5, 5);
      modelRef.current.position.y = THREE.MathUtils.clamp(modelRef.current.position.y, 0, 5);
      modelRef.current.position.z = THREE.MathUtils.clamp(modelRef.current.position.z, -5, 5);
    }
  });

  return <primitive ref={modelRef} object={scene} {...props} />;
}