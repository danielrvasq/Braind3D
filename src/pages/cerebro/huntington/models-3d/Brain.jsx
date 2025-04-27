/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Brain = (props) => {
  const { nodes, materials } = useGLTF("/models-3d/brain.glb");
  const brainRef = useRef();

  useFrame((state, delta) => {
    brainRef.current.rotation.y += 0.5 * delta;
  });

  return (
    <group {...props} dispose={null} ref={brainRef}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Brain.geometry}
        material={materials.BrainMaterial}
        scale={0.5}
        position={[0, -1, 0]}
        rotation={[0, Math.PI * 0.25, 0]}
      />
    </group>
  );
};

export default Brain;

// Preload para mejorar rendimiento
useGLTF.preload("/models-3d/brain.glb");
