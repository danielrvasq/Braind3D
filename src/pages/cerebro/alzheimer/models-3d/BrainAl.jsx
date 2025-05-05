/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function ModeloAlzheimer(props) {
  const { nodes, materials } = useGLTF('/models-3d/Brain3.glb');
  const modelRef = useRef(); // referencia para manipular el modelo

  useFrame((state, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += delta * 0.8; // Velocidad de rotación (más alto = más rápido)
    }
  });

  return (<group {...props} ref={modelRef}>
    <mesh
        castShadow
        receiveShadow
        geometry={nodes.Brain.geometry}
        material={materials.BrainMaterial}
        scale={0.5}
        position={[0, 0, 0]}
        rotation={[0, Math.PI * 0.25, 0]}
      /> 
  </group>);
}