import { Html, Text } from "@react-three/drei";
import "./Title.css";

const Title = () => {
  return (
    <>
      {/* Título sobre la esquizofrenia */}
      <Html
        center
        position={[0, 3, 0]}  // Colocamos el texto en una posición adecuada
        distanceFactor={5}
        wrapperClass="Title"
      >
        <div className="description-container">
          <h1>¿Qué es la Esquizofrenia?</h1>
          <p>
            La esquizofrenia es un trastorno mental grave que afecta la forma en
            que una persona piensa, siente y actúa. Las personas con esquizofrenia
            pueden experimentar alucinaciones, delirios y trastornos del pensamiento,
            lo que puede afectar su capacidad para interactuar con el mundo.
          </p>
        </div>
      </Html>

      {/* Descripción adicional en el espacio 3D */}
      <Text
        position={[0, 1, 1]}
        fontSize={0.2}
        color={"#FF5733"}  // Usamos el mismo color anaranjado
        anchorX={"center"}
        anchorY={"middle"}
      >
        La esquizofrenia afecta la percepción de la realidad.
      </Text>
    </>
  );
};
export default Title;