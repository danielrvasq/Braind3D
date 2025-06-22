/* eslint-disable react/no-unknown-property */
import { useHelper } from "@react-three/drei";
import { SpotLightHelper } from "three";

const LightJuego = (position) => {
  return (
    <>
      <spotLight
        color="white"
        position={(0, 0, 100)}
        distance={1000}
        intensity={80000}
        angle={Math.PI / 3}
        penumbra={1}
        castShadow={true}
      />
      <spotLight
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
