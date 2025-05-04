import { useHelper } from "@react-three/drei";
import { SpotLightHelper } from "three";
import { useRef } from "react";

const Lights = () => {
  // const spotLightRef = useRef();
  // useHelper(spotLightRef, SpotLightHelper);

  return (
    <>
      <spotLight
        // ref={spotLightRef}
        color={"white"}
        position={[10, 10, 10]}
        distance={100}
        intensity={500}
        angle={Math.PI / 10}
        penumbra={1}
        castShadow={true}
      />
    </>
  );
};

export default Lights;
