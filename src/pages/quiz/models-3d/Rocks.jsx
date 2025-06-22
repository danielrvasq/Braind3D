import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export function Rocks(props) {
  const { nodes, materials } = useGLTF("/models-3d/Rocks.glb");
  return (
    <RigidBody type="dynamic" colliders="cuboid">
      <group {...props} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rock_Type6_01_mesh.geometry}
          material={materials.color3}
          scale={0.5}
        />
      </group>
    </RigidBody>
  );
}
