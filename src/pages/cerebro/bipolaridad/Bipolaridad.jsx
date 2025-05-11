// src/pages/cerebro/bipolaridad/Bipolaridad.jsx

import React, { useState, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sky, Sparkles, Text, Text3D } from "@react-three/drei";
import Brain from "./models-3d/Brain";
import Lights from "./lights/Lights";
import Floor from "./models-3d/Floor";
import Lights2 from "./lights/Lights2";
import Texts3D from "./texts/Texts3D";
import Human from "./models-3d/Human";
import "./Bipolaridad.css";

const Bipolaridad = () => {
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
    <section id="seccion1">
      <section id="seccion0">
        <div className="div-canvas-2">
          <Canvas
            camera={{
              position: [0, 0, 5],
              fov: 55,
            }}
            shadows={true}
          >
            <OrbitControls
              target={[0, 0, 0]}
              enableZoom={true}
              enablePan={true}
            />
            <directionalLight position={[5, 5, 10]} intensity={2} />
            <Texts3D text="Bipolaridad" position={[0, 0, 0]} />
            <Lights2 />
          </Canvas>
        </div>
      </section>
      <div className="div-container">
        <div className="div-text">
          <section className="quees-info">
            <h1 className="informacion-h1">
              ¿Qué Es La Enfermedad De Bipolaridad?
            </h1>
            <p className="informacion-p">
              El trastorno bipolar es una enfermedad mental caracterizada por
              cambios extremos en el estado de ánimo, la energía y la capacidad
              de funcionamiento. Las personas con trastorno bipolar experimentan
              episodios de manía (estado de ánimo elevado o irritable) y
              episodios de depresión (estado de ánimo bajo). Es una condición
              crónica, pero tratable, que suele manifestarse en la adolescencia
              o adultez temprana. Las causas incluyen factores genéticos,
              biológicos y ambientales.
            </p>
          </section>
        </div>
        <div className="div-canvas-1">
          <Canvas camera={{ position: [1, 1, 2] }} shadows>
            <OrbitControls />
            <directionalLight position={[5, 5, 10]} intensity={2} />
            <Brain />
            <Text />
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
      <div className="div-container">
        <div className="div-text">
          <section className="quees-info">
            <h1 className="informacion-h1">Sintomas</h1>
            <div className="informacion-div">
              <p className="informacion-p">
                holaaaaa
              </p>
            </div>
            <button
              //onClick={() => setStartAnimation((prev) => !prev)}
              style={{
                display: "block",
                margin: "0 auto",
                padding: "10px 20px",
               // background: startAnimation ? "#ff4444" : "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
         {/* {startAnimation ? "DETENER ANIMACIÓN" : "REPRODUCIR ANIMACIÓN"} */}
            </button>
          </section>
        </div>
        <div className="div-canvas-1">
          <Canvas camera={{ position: [1, 1, 2] }} shadows>
            <OrbitControls />
            <directionalLight position={[5, 5, 10]} intensity={2} />
            {/* <OldMan
              startAnimation={startAnimation}
              stopAnimation={!startAnimation}
            /> */}
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
    </section>
  );
};

export default Bipolaridad;
