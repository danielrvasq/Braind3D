/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import "./Huntington.css";
import { OrbitControls } from "@react-three/drei";
import Brain from "./models-3d/Brain";
import Lights from "./lights/Lights";
import Floor from "./models-3d/Floor";

const Huntington = () => {
  return (
    <>
      <div className="brain-canvas">
        <section className="huntington-info">
          <h1 className="huntington-title">
            ¿Qué es la Enfermedad de Huntington?
          </h1>
          <p className="huntington-text">
            La enfermedad de Huntington es un trastorno genético
            <br />
            neurodegenerativo que afecta el cerebro, causando deterioro
            <br />
            progresivo de las capacidades motoras, cognitivas y psiquiátricas.
            <br />
          </p>
          <p className="huntington-text">
            Es una enfermedad hereditaria de patrón autosómico dominante, lo que
            <br />
            significa que una sola copia del gen defectuoso puede causar la
            <br />
            enfermedad.
          </p>
          <p className="huntington-text">
            Usualmente se manifiesta entre los 30 y 50 años de edad.
          </p>
          <p className="huntington-text">
            La causa principal es una mutación en el gen HTT, que produce una
            <br />
            proteína anormal conocida como huntingtina.
          </p>
        </section>
        <Canvas camera={{ position: [2, 0, 5] }} shadows={true}>
          <OrbitControls />
          <ambientLight intensity={1.5} />
          <directionalLight position={[5, 5, 10]} intensity={2} />
          <Brain />
          <Lights />
          <Floor />
        </Canvas>
      </div>
    </>
  );
};

export default Huntington;
