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
<<<<<<< HEAD
        intensity={10}
=======
        intensity={500}
>>>>>>> 4caa86b91166088832cc876ebaed1c68587c2fa0
        angle={Math.PI / 10}
        penumbra={1}
        castShadow={true}
      />
    </>
  );
};

export default Lights;
