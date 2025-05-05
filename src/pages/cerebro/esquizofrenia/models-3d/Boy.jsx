import { useGLTF, useAnimations } from '@react-three/drei';
import { useEffect, useRef } from 'react';

export default function Boy({ playAnimation }) {
  const group = useRef();
  const { scene, animations } = useGLTF('/models-3d/boy.glb');
  const { actions } = useAnimations(animations, group);

  // Control de animación
  useEffect(() => {
    if (!actions || !playAnimation) return;

    // Detener todas las animaciones primero
    Object.values(actions).forEach((action) => {
      action.stop();
    });

    // Reproducir la animación solicitada si existe
    const actionToPlay = actions[playAnimation];
    if (actionToPlay) {
      actionToPlay.reset().fadeIn(0.5).play();
    }

    // Limpieza opcional al desmontar
    return () => {
      if (actionToPlay) actionToPlay.fadeOut(0.5);
    };
  }, [playAnimation, actions]);

  return (
    <group ref={group}>
      <primitive object={scene} scale={[1.5, 1.5, 1.5]} position={[0, -1, 0]} />
    </group>
  );
}
useGLTF.preload("models-3d/boy.glb");