import { useNavigate } from "react-router";
import "./Home.css";
import { useCallback } from "react";
import Medico from "./models-3D/Medico";
import { Canvas } from "@react-three/fiber";
import React, { useState, useEffect, useRef } from "react";

const Home = () => {
  const [anim1, setAnim1] = useState(false);
  const [anim2, setAnim2] = useState(false);
  const [anim3, setAnim3] = useState(false);
  const [anim4, setAnim4] = useState(false);
  const [sceneKey, setSceneKey] = useState(0);
  const navigate = useNavigate();

  /*-------------------------------------------------------------------------------------- */
  const huntington = useCallback(() => {
    navigate("/cerebro/huntington", {
      state: { userData: { displayName: "" } },
    });
  }, [navigate]);
  /*-------------------------------------------------------------------------------------- */
  const alzheimer = useCallback(() => {
    navigate("/cerebro/alzheimer", {
      state: { userData: { displayName: "" } },
    });
  }, [navigate]);
  /*-------------------------------------------------------------------------------------- */
  const bipolaridad = useCallback(() => {
    navigate("/cerebro/bipolaridad", {
      state: { userData: { displayName: "" } },
    });
  }, [navigate]);
  /*-------------------------------------------------------------------------------------- */
  const esquizofrenia = useCallback(() => {
    navigate("/cerebro/esquizofrenia", {
      state: { userData: { displayName: "" } },
    });
  }, [navigate]);

  return (
    <>
      <section id="section1">
        <div id="contenido">
          <p id="texto-super">Software 3D</p>
          <h1 id="titulo">BRAIND3D</h1>
          <p id="texto">
            En esta web, exploraremos diversas enfermedades mentales y
            trastornos del cerebro, comprendiendo sus causas, síntomas y
            tratamientos. Nuestro objetivo es informar y concientizar sobre la
            importancia de la salud mental, eliminando estigmas y promoviendo el
            bienestar. Acompáñanos en este viaje de aprendizaje y descubre más
            sobre el funcionamiento de la mente.
          </p>
          <a href="#section2">
            <button /*onClick={handleClick} */ type="button" id="boton-h">
              Conocer Las Enfermedades
            </button>
          </a>
        </div>
        <div className="div-canvas-1">
          <Canvas
            camera={{ position: [0, 0, 2] }}
            shadows
            key={sceneKey}
            style={{ width: "100%", height: "100%" }} // altura pantalla completa
          >
            <Medico playAnimation="Dance_1" />
            <ambientLight intensity={0.5} />

            <directionalLight position={[6, 5, 10]} intensity={2} />
          </Canvas>
        </div>
      </section>
      <div id="section2">
        <div className="div-canvas-1">
          <Canvas
            camera={{ position: [0, 0, 2] }}
            shadows
            key={sceneKey}
            style={{ width: "100%", height: "100%" }} // altura pantalla completa
          >
            <Medico playAnimation="Hustington" />
            <ambientLight intensity={0.5} />

            <directionalLight position={[6, 5, 10]} intensity={2} />
          </Canvas>
        </div>
        <div id="contenido2">
          <h1 id="titulo2">HUNTINGTON</h1>
          <p>
            trastorno genético degenerativo del cerebro que causa movimientos
            involuntarios, problemas cognitivos y cambios emocionales. <br />
            Es hereditaria y empeora con el tiempo.
          </p>
          <button onClick={huntington} type="button" id="boton-h2">
            Saber Más
          </button>
        </div>
      </div>
      <div id="section3">
        <div id="contenido3">
          <h1 id="titulo3">ALZHEIMER</h1>
          <p>
            enfermedad neurodegenerativa progresiva que afecta la memoria, el
            pensamiento y el comportamiento. Es la causa más común de demencia y
            empeora con el tiempo.
          </p>
          <button onClick={alzheimer} type="button" id="boton-h3">
            Saber Más
          </button>
        </div>
        <div className="div-canvas-1">
          <Canvas
            camera={{ position: [0, 0, 2] }}
            shadows
            key={sceneKey}
            style={{ width: "100%", height: "100%" }} // altura pantalla completa
          >
            <Medico playAnimation="Esquizofrenia" />
            <ambientLight intensity={0.5} />

            <directionalLight position={[6, 5, 10]} intensity={2} />
          </Canvas>
        </div>
      </div>
      <div id="section2">
        <div className="div-canvas-1">
          <Canvas
            camera={{ position: [0, 0, 2] }}
            shadows
            key={sceneKey}
            style={{ width: "100%", height: "100%" }} // altura pantalla completa
          >
            <Medico playAnimation="Hablando" />
            <ambientLight intensity={0.5} />

            <directionalLight position={[6, 5, 10]} intensity={2} />
          </Canvas>
        </div>
        <div id="contenido2">
          <h1 id="titulo2">BIPOLARIDAD</h1>
          <p>
            trastorno mental caracterizado por cambios extremos en el estado de
            ánimo, que alternan entre episodios de euforia o manía y períodos de
            depresión.
          </p>
          <button onClick={bipolaridad} type="button" id="boton-h2">
            Saber Más
          </button>
        </div>
      </div>
      <div id="section3">
        <div id="contenido3">
          <h1 id="titulo3">ESQUIZOFRENIA</h1>
          <p>
            trastorno mental grave que afecta la forma en que una persona
            piensa, siente y percibe la realidad, causando alucinaciones,
            delirios y pensamientos desorganizados.
          </p>
          <button onClick={esquizofrenia} type="button" id="boton-h3">
            Saber Más
          </button>
        </div>
        <div className="div-canvas-1">
          <Canvas
            camera={{ position: [0, 0, 0] }}
            shadows
            key={sceneKey}
            style={{ width: "100%", height: "100%" }} // altura pantalla completa
          >
            <Medico playAnimation="Bipolaridad" />
            <ambientLight intensity={0.5} />

            <directionalLight position={[6, 5, 10]} intensity={2} />
          </Canvas>
        </div>
      </div>
    </>
  );
};

export default Home;
