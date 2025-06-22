import { RigidBody } from "@react-three/rapier";

const Suelo = () => {
  return (
    <>
      <RigidBody type="fixed">
        <mesh
          receiveShadow
          position={[0, 0, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <planeGeometry args={[250, 150]} />
          <meshStandardMaterial color="#f7b733" />
        </mesh>
      </RigidBody>
      <RigidBody type="fixed">
        <mesh position={[0, 2.5, -70]} castShadow receiveShadow>
          <boxGeometry args={[240, 5, 1]} />
          <meshStandardMaterial color="#808080" roughness={1} metalness={0.1} />
        </mesh>
        <mesh position={[0, 2.5, 70]} castShadow receiveShadow>
          <boxGeometry args={[240, 5, 1]} />
          <meshStandardMaterial color="#808080" roughness={1} metalness={0.1} />
        </mesh>
        <mesh
          position={[120, 2.5, 0]}
          castShadow
          receiveShadow
          rotation={[0, -Math.PI / 2, 0]}
        >
          <boxGeometry args={[141, 5, 1]} />
          <meshStandardMaterial color="#808080" roughness={1} metalness={0.1} />
        </mesh>
        <mesh
          position={[-120, 2.5, 0]}
          castShadow
          receiveShadow
          rotation={[0, -Math.PI / 2, 0]}
        >
          <boxGeometry args={[141, 5, 1]} />
          <meshStandardMaterial color="#808080" roughness={1} metalness={0.1} />
        </mesh>
      </RigidBody>
    </>
  );
};

export default Suelo;
