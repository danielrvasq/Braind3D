/* eslint-disable react/no-unknown-property */
import { useHelper } from "@react-three/drei";
import { SpotLightHelper } from "three";
// import { useRef } from "react";

const LightJuego = (position) => {
  // const spotLightRef = useRef();
  // useHelper(spotLightRef, SpotLightHelper);
  // const spotLightRef = useRef();
  // useHelper(spotLightRef, SpotLightHelper, 2, "cyan");
  return (
    <>
      <spotLight
{/*         ref={spotLightRef} */}
        color="white"
        position={(0, 0, 100)}
        distance={1000}
        intensity={80000}
        angle={Math.PI / 3}
        penumbra={1}
        castShadow={true}
      />
      <spotLight
{/*         ref={spotLightRef} */}
        color="orange"
        position={(0, 0, 100)}
        distance={1000}
        intensity={80000}
        angle={Math.PI / 3}
        penumbra={1}
        castShadow={true}
      />
    </>
  );
};

export default LightJuego;
