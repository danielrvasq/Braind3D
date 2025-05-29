/* eslint-disable react/no-unknown-property */
import { useHelper } from "@react-three/drei";
import { SpotLightHelper } from "three";
import { useRef } from "react";

const Lights = () => {
  // const spotLightRef = useRef();
  // useHelper(spotLightRef, SpotLightHelper);
  const spotLightRef = useRef();
  useHelper(spotLightRef, SpotLightHelper, 2, "cyan");
  return (
    <>
      <spotLight
        //   ref={spotLightRef}
        color="white"
        position={[5, 5, 6]}
        distance={100}
        intensity={200}
        angle={Math.PI / 3}
        penumbra={1}
        castShadow={true}
      />
    </>
  );
};

export default Lights;
