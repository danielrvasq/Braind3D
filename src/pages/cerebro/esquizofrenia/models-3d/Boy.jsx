import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect, useRef, useMemo } from "react";
import { clone } from "three/examples/jsm/utils/SkeletonUtils";

export default function Boy({ playAnimation }) {
  const group = useRef();
  const { scene, animations } = useGLTF("/models-3d/boy.glb");
  const clonedScene = useMemo(() => clone(scene), [scene]);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (!actions || !playAnimation) return;
    Object.values(actions).forEach((action) => action.stop());

    const actionToPlay = actions[playAnimation];
    if (actionToPlay) {
      actionToPlay.reset().fadeIn(0.5).play();
    }

    return () => {
      if (actionToPlay) actionToPlay.fadeOut(0.5);
    };
  }, [playAnimation, actions]);

  return (
    <primitive
      object={clonedScene}
      ref={group}
      scale={[1.5, 1.5, 1.5]}
      position={[0, -1, -1]}
    />
  );
}

useGLTF.preload("/models-3d/boy.glb");
