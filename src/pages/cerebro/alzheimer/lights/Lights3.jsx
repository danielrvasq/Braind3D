import { useRef } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Light3 = () => {
  const lightRef = useRef();
  const { viewport, mouse, camera } = useThree();

  useFrame(() => {
    if (lightRef.current) {
      const x = mouse.x * viewport.width * 0.5;
      const y = mouse.y * viewport.height * 0.5;

      lightRef.current.position.lerp(
        new THREE.Vector3(x, y, 2),
        0.1
      );
    }
  });

  return (
    <directionalLight
      ref={lightRef}
      intensity={1.2}
      color={"#ffffff"}
      distance={10}
      decay={2}
      castShadow
    />
  );
};

export default Light3;