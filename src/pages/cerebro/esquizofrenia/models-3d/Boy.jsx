import { useGLTF, useAnimations } from '@react-three/drei';
import { useEffect, useRef } from 'react';

export default function Boy({ playAnimation }) {
  const group = useRef();
  const { scene, animations } = useGLTF('/models-3d/boy.glb');
  const { actions } = useAnimations(animations, group);

  // Control de animación
  useEffect(() => {
    const animationName = 'Armature|mixamo.com|Layer0'; // Nombre exacto de tu animación
    if (playAnimation && actions[animationName]) {
      actions[animationName].reset().fadeIn(0.5).play();
      return () => actions[animationName].fadeOut(0.5);
    }
  }, [playAnimation, actions]);

  return (
    <primitive
      object={scene}
      ref={group}
      scale={[1.5, 1.5, 1.5]}  // Escala ajustada
      position={[0, -1, 0]}        // Posición en Y
    />
  );
}
useGLTF.preload("models-3d/boy.glb");