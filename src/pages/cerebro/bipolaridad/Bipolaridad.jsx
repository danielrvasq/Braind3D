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
  const [startAnimationModel1, setStartAnimationModel1] = useState(false);
  const [startAnimationModel2, setStartAnimationModel2] = useState(false);
  const [startAnimationModel3, setStartAnimationModel3] = useState(false);

  return (
    <section id="seccion1">
      {/* Introducción con texto 3D */}
      <section id="seccion0">
        <div className="div-canvas-2">
          <Canvas camera={{ position: [0, 0, 5], fov: 55 }} shadows={true}>
            <OrbitControls target={[0, 0, 0]} enableZoom enablePan />
            <directionalLight position={[5, 5, 10]} intensity={2} />
            <Texts3D text="Bipolaridad" position={[0, 0, 0]} />
            <Lights2 />
          </Canvas>
        </div>
      </section>

      {/* Descripción general */}
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

      {/* Modelo 1 */}
      <div className="div-container">
        <div className="div-text">
          <section className="quees-info">
            <h1 className="informacion-h1">
              Síntomas Comunes del Trastorno Bipolar
            </h1>
            <div className="informacion-div">
              <p className="informacion-p">
                Cambios extremos en el estado de ánimo (de euforia a depresión).
                Aumento repentino de energía o actividad. Dificultad para dormir
                o insomnio. Pensamientos acelerados y habla muy rápida.
                Episodios de tristeza profunda o desesperanza. Comportamientos
                impulsivos o de riesgo.
              </p>
            </div>
            <button
              onClick={() => setStartAnimationModel1((prev) => !prev)}
              style={{
                display: "block",
                margin: "0 auto",
                padding: "10px 20px",
                background: startAnimationModel1 ? "#ff4444" : "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              {startAnimationModel1
                ? "DETENER ANIMACIÓN"
                : "REPRODUCIR ANIMACIÓN"}
            </button>
          </section>
        </div>
        <div className="div-canvas-1">
          <Canvas camera={{ position: [0, 2, 8] }} shadows>
            <OrbitControls target={[0, 1, 0]} />
            <directionalLight position={[5, 5, 10]} intensity={2} />
            <Suspense fallback={null}>
              <Human startAnimation={startAnimationModel1} />
            </Suspense>
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

      {/* Modelo 2 */}
      <div className="div-container">
        <div className="div-text">
          <section className="quees-info">
            <h1 className="informacion-h1">
              Episodios Comunes del Trastorno Bipolar
            </h1>
            <div className="informacion-div">
              <p className="informacion-p">
                El trastorno bipolar se manifiesta a través de episodios de
                manía, hipomanía y depresión. Durante un episodio maníaco, la
                persona puede sentirse eufórica, con mucha energía, hablar
                rápido o actuar impulsivamente. En la hipomanía, los síntomas
                son similares pero menos intensos. En los episodios depresivos,
                predominan la tristeza profunda, la fatiga, la falta de
                motivación y pensamientos negativos. Estos episodios pueden
                durar desde días hasta semanas y afectan significativamente la
                vida diaria.
              </p>
            </div>
            <button
              onClick={() => setStartAnimationModel2((prev) => !prev)}
              style={{
                display: "block",
                margin: "0 auto",
                padding: "10px 20px",
                background: startAnimationModel2 ? "#ff4444" : "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              {startAnimationModel2
                ? "DETENER ANIMACIÓN"
                : "REPRODUCIR ANIMACIÓN"}
            </button>
          </section>
        </div>
        <div className="div-canvas-1">
          <Canvas camera={{ position: [0, 2, 8] }} shadows>
            <OrbitControls target={[0, 1, 0]} />
            <directionalLight position={[5, 5, 10]} intensity={2} />
            <Suspense fallback={null}>
              <Human startAnimation={startAnimationModel2} />
            </Suspense>
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

      {/* Modelo 3 */}
      <div className="div-container">
        <div className="div-text">
          <section className="quees-info">
            <h1 className="informacion-h1">
              Tratamiento del Trastorno Bipolar
            </h1>
            <div className="informacion-div">
              <p className="informacion-p">
                El tratamiento del trastorno bipolar incluye medicamentos
                estabilizadores del ánimo, a ntidepresivos y terapia
                psicológica. También es fundamental el apoyo familiar y un
                estilo de vida equilibrado. Aunque no tiene cura, un tratamiento
                adecuado permite a muchas personas llevar una vida funcional y
                estable.
              </p>
            </div>
            <button
              onClick={() => setStartAnimationModel3((prev) => !prev)}
              style={{
                display: "block",
                margin: "0 auto",
                padding: "10px 20px",
                background: startAnimationModel3 ? "#ff4444" : "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              {startAnimationModel3
                ? "DETENER ANIMACIÓN"
                : "REPRODUCIR ANIMACIÓN"}
            </button>
          </section>
        </div>
        <div className="div-canvas-1">
          <Canvas camera={{ position: [0, 2, 8] }} shadows>
            <OrbitControls target={[0, 1, 0]} />
            <directionalLight position={[5, 5, 10]} intensity={2} />
            <Suspense fallback={null}>
              <Human startAnimation={startAnimationModel3} />
            </Suspense>
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
