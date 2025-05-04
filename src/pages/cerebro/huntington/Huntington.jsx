/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
<<<<<<< HEAD
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
=======
import React, { useState, useEffect } from "react";

import "./Huntington.css";
import { OrbitControls, Sky, Sparkles, Text, Text3D } from "@react-three/drei";
import Brain from "./models-3d/Brain";
import Lights from "./lights/Lights";
import Floor from "./models-3d/Floor";
import OldMan from "./models-3d/OldMan";
import Lights2 from "./lights/Lights2";

const Huntington = () => {
  // Estado para controlar la animación
  const [startAnimation, setStartAnimation] = useState(false);
  const [stopAnimation, setStopAnimation] = useState(false);
  useEffect(() => {
    const handleSpacebarPress = (event) => {
      if (event.code === "Enter") {
        setStartAnimation((prevState) => !prevState); // Alterna el estado de la animación
      }
    };

    // Agregar el listener cuando el componente se monte
    document.addEventListener("keydown", handleSpacebarPress);

    // Eliminar el listener cuando el componente se desmonte
    return () => {
      document.removeEventListener("keydown", handleSpacebarPress);
    };
  }, []);

  return (
    <>
      <section id="seccion1">
        <div className="huntington-s1">
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
                progresivo de las capacidades motoras, cognitivas y
                psiquiátricas.
                <br />
              </p>
              <p className="huntington-text">
                Es una enfermedad hereditaria de patrón autosómico dominante, lo
                que significa que una sola copia del gen defectuoso puede causar
                la
                <br />
                enfermedad.
              </p>
            </section>
          </div>
          <div className="model-canvas">
            <Canvas camera={{ position: [1, 1, 3] }} shadows={true}>
              <OrbitControls />
              <directionalLight position={[5, 5, 10]} intensity={2} />
              {/* <OldMan startAnimation={startAnimation} /> */}
              <Brain />
              <Lights />
              <Floor />
              <Sky />
              <Sparkles
                count={256}
                speed={1.5}
                opacity={1}
                color={"yellow"}
                size={3}
                scale={[10, 10, 10]}
                noise={1}
              />
            </Canvas>
          </div>
        </div>
        <a href="#seccion2">
          <button /*onClick={handleClick} */ type="button" id="boton-s">
            Ver más
          </button>
        </a>
      </section>
      <section id="seccion2">
        <div className="huntington-s1">
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
                progresivo de las capacidades motoras, cognitivas y
                psiquiátricas.
                <br />
              </p>
              <p className="huntington-text">
                Es una enfermedad hereditaria de patrón autosómico dominante, lo
                que significa que una sola copia del gen defectuoso puede causar
                la enfermedad.
              </p>
            </section>
            <button
              className="start-button"
              onClick={() => {
                setStartAnimation(true);
                setStopAnimation(false);
              }}
            >
              Iniciar Animación
            </button>
            <button
              className="start-button"
              onClick={() => {
                setStartAnimation(false);
                setStopAnimation(true);
              }}
            >
              Detener Animación
            </button>
          </div>
          <div className="model-canvas">
            <Canvas camera={{ position: [1, 1, 2] }} shadows={true}>
              <OrbitControls />
              <directionalLight position={[5, 5, 10]} intensity={2} />
              <OldMan
                startAnimation={startAnimation}
                stopAnimation={stopAnimation}
              />
              <Text />
              <Lights2 />
              <Floor />
              <Sky />
              <Sparkles
                count={256}
                speed={1.5}
                opacity={1}
                color={"yellow"}
                size={3}
                scale={[10, 10, 10]}
                noise={1}
              />
            </Canvas>
          </div>
        </div>
        <a href="#seccion1">
          <button /*onClick={handleClick} */ type="button" id="boton-s">
            Volver
          </button>
        </a>
      </section>
>>>>>>> 4caa86b91166088832cc876ebaed1c68587c2fa0
    </>
  );
};

export default Huntington;
