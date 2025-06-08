import { useHelper } from "@react-three/drei";
import { SpotLightHelper } from "three";
import { useRef, useEffect } from "react";

const Lights2 = () => {
  const spotLightRef = useRef();

  // Muestra el helper para depuración
  useHelper(spotLightRef, SpotLightHelper);

  // Aplica rotación manualmente
  useEffect(() => {
    if (spotLightRef.current) {
      spotLightRef.current.rotation.x = Math.PI / 1; // Rota 45 grados en X
      spotLightRef.current.rotation.y = 0; // Puedes cambiar esto también si quieres
      spotLightRef.current.rotation.z = 0;
    }
  }, []);

  return (
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
  );
};

export default Lights2;
