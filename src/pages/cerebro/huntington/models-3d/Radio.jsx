import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Radio(props) {
  const { nodes, materials } = useGLTF("/models-3d/Radio.glb");
  return (
    <group {...props} dispose={null} position={[1, -1, 0]} scale={4}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.radio.geometry}
        material={materials["Material.001"]}
        position={[0, 0.065, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ring.geometry}
        material={materials["Material.002"]}
        position={[0.04, 0.088, 0.042]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tool.geometry}
        material={materials["Material.003"]}
        position={[-0.024, 0.088, 0.042]}
        scale={[1, 1.076, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.button.geometry}
        material={materials["Material.002"]}
        position={[-0.065, 0.032, 0.037]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.button001.geometry}
        material={materials["Material.002"]}
        position={[-0.047, 0.032, 0.037]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.button002.geometry}
        material={materials["Material.002"]}
        position={[-0.028, 0.032, 0.037]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.button003.geometry}
        material={materials.glass}
        position={[0.045, 0.032, 0.037]}
        scale={[2.483, 0.747, 1]}
      />
      <group position={[0.041, 0.09, 0.041]} rotation={[1.6, -0.496, -3.026]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_1.geometry}
          material={materials["Material.002"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.antana.geometry}
        material={materials["Material.002"]}
        position={[0.042, 0.125, -0.027]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.legs.geometry}
        material={materials["Material.005"]}
        position={[-0.18, 0.095, -0.377]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text.geometry}
        material={materials["Material.002"]}
        position={[-0.065, 0.103, 0.046]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.016}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.radio001.geometry}
        material={materials["Material.002"]}
        position={[0, 0.065, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.radio002.geometry}
        material={materials["Material.001"]}
        position={[0, 0.065, 0]}
      />
    </group>
  );
}

export default Radio;
useGLTF.preload("/models-3d/Radio.glb");
