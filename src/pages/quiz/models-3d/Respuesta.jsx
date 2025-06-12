import { useRef, useState, useEffect } from "react";
import { Text, RoundedBox } from "@react-three/drei";

const Respuesta = ({ mensaje, color, posicion, onClick }) => {
  const textRef = useRef();
  const [textWidth, setTextWidth] = useState(2); // valor inicial predeterminado

  useEffect(() => {
    const updateSize = () => {
      if (textRef.current?.geometry?.boundingBox) {
        const bbox = textRef.current.geometry.boundingBox;
        const width = bbox.max.x - bbox.min.x;
        setTextWidth(width + 0.6); // margen adicional
      }
    };

    // Espera un frame para asegurar que el texto haya cargado su geometría
    const timeout = setTimeout(updateSize, 50);

    return () => clearTimeout(timeout);
  }, [mensaje]);

  return (
    <RoundedBox
      radius={0.07}
      smoothness={4}
      position={posicion}
      castShadow
      receiveShadow
      args={[textWidth, 0.5, 1]} // ancho ajustado dinámicamente
      onClick={onClick}
    >
      <meshStandardMaterial color={color} />
      <Text
        ref={textRef}
        position={[0, 0, 0.6]}
        fontSize={0.3}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {mensaje}
      </Text>
    </RoundedBox>
  );
};

export default Respuesta;
