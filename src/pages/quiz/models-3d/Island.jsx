import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export function Island(props) {
  const { nodes, materials } = useGLTF("/models-3d/island.glb");
  return (
    <>
      <RigidBody type="fixed" colliders="hull">
        <group {...props} dispose={null} castShadow>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ground.geometry}
            material={materials.ground}
            scale={5.362}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.rock.geometry}
            material={materials["rock 1"]}
            position={[-3.214, 0.001, -5.326]}
            rotation={[-1.003, -1.111, -2.622]}
          />
          <group position={[-0.169, 2.984, -1.598]} scale={[0.232, 1, 0.232]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube047.geometry}
              material={materials["wood 4"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube047_1.geometry}
              material={materials["wood 1"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube047_2.geometry}
              material={materials["wood 2"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube047_3.geometry}
              material={materials["wood 3"]}
            />
          </group>
          <group position={[5.243, -0.107, -4.609]} scale={6.116}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane001.geometry}
              material={materials.TREE1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane001_1.geometry}
              material={materials.tree2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane001_2.geometry}
              material={materials["tree 3"]}
            />
          </group>
          <group
            position={[-4.619, -0.046, -4.225]}
            rotation={[0, -1.184, 0]}
            scale={4.432}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane006.geometry}
              material={materials.TREE1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane006_1.geometry}
              material={materials.tree2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane006_2.geometry}
              material={materials["tree 3"]}
            />
          </group>
        </group>
      </RigidBody>
      <group
        position={[0.206, 0.351, 1.693]}
        rotation={[1.126, -1.375, 1.064]}
        scale={0.893}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube298.geometry}
          material={materials.tree2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube298_1.geometry}
          material={materials["tree 3"]}
        />
      </group>
    </>
  );
}

export default Island;
useGLTF.preload("/models-3d/island.glb");
