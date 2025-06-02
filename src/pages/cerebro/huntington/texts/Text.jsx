import { Text3D } from "@react-three/drei";
import React from "react";

const Text = () => {
  return (
    <Text3D
      position={[0, 1, 0]}
      font={"fonts/roboto.json"}
      color={"black"}
      anchorX={"center"}
      anchorY={"middle"}
      fontSize={0.2}
    >
      HOLA
      <meshNormalMaterial />
    </Text3D>
  );
};

export default Text;
