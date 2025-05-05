import { useHelper } from "@react-three/drei";
import { SpotLightHelper, PointLightHelper, DirectionalLightHelper } from "three";
import { useRef } from "react";

const Lights2 = ({ debug = false }) => {
  const spotLightRef = useRef();
  const pointLightRef = useRef();
  const directionalLightRef = useRef();

  // Helpers para debug
  if (debug) {
    useHelper(spotLightRef, SpotLightHelper, "cyan");
    useHelper(pointLightRef, PointLightHelper, 0.5, "hotpink");
    useHelper(directionalLightRef, DirectionalLightHelper, 0.5, "lime");
  }

  return (
    <>
      {/* Luz principal (spotlight) */}
      <spotLight
        ref={spotLightRef}
        color={"white"}
        position={[10, 10, 10]}
        distance={100}
        intensity={50}
        angle={Math.PI / 10}
        penumbra={1}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      
      {/* Luz ambiental para relleno */}
      <ambientLight intensity={0.2} color="#ffffff" />
      
      {/* Luz direccional adicional */}
      <directionalLight
        ref={directionalLightRef}
        position={[-5, 5, 5]}
        intensity={10}
        castShadow
      />
      
      {/* Luz de punto para acentos */}
      <pointLight
        ref={pointLightRef}
        position={[0, 3, 0]}
        intensity={40}
        color="#ffccaa"
      />
    </>
  );
};

export default Lights2;