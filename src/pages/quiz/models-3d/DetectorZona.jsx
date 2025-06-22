import { RigidBody } from "@react-three/rapier";
import { useState } from "react";

function DetectorZona({
  respuesta,
  position = [0, -0.029, 0],
  size = [15, 0.1, 5],
  onDetect,
}) {
  const [isHit, setIsHit] = useState(false);

  return (
    <RigidBody
      type="fixed"
      colliders="cuboid"
      onCollisionEnter={() => {
        setIsHit(true);
        if (onDetect) onDetect(respuesta);
      }}
      onCollisionExit={() => setIsHit(false)}
    >
      <mesh position={position}>
        <boxGeometry args={size} />
        <meshStandardMaterial color={isHit ? "#3694e1" : "white"} />
      </mesh>
    </RigidBody>
  );
}

export default DetectorZona;
