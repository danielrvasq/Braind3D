// src/pages/cerebro/bipolaridad/Bipolaridad.jsx

import React, { useRef, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Sky, Sparkles, Text, Text3D } from "@react-three/drei";
import "./Bipolaridad.css";
import Floor from "../huntington/models-3d/Floor";
import Lights from "../huntington/lights/Lights";
import Title from "../esquizofrenia/texts/Title";
import Boton3D from "./models-3d/Boton3D";
import Brain from "./models-3d/Brain";
import Lights1 from "./lights/Lights1";
import Human from "./models-3d/Human";
import Human2 from "./models-3d/Human2";
import Human3 from "./models-3d/Human3";

const Bipolaridad = () => {
  const [startAnimationModel1, setStartAnimationModel1] = useState(false);
  const [startAnimationModel2, setStartAnimationModel2] = useState(false);
  const [startAnimationModel3, setStartAnimationModel3] = useState(false);
  function CameraReset() {
    const { camera } = useThree();
    const originalCameraPos = useRef(camera.position.clone());

    useFrame(() => {
      const distance = camera.position.distanceTo(originalCameraPos.current);
      if (distance > 0.01) {
        camera.position.lerp(originalCameraPos.current, 0.02);
        camera.lookAt(0, 0, 0);
      }
    });

    return null;
  }
  return (
    <>
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
              <CameraReset />
              <OrbitControls
                target={[0, 0, 0]} // Esto centra los controles en el origen
                enableZoom={true}
                enablePan={true}
              />
              <Title text="Bipolaridad" position={[0, 0, 0]} />
              <Lights />
            </Canvas>
          </div>
        </section>
        <div className="div-container">
          <div className="div-text">
            <section className="quees-info">
              <h1 className="informacion-h1">
                ¿Qué es el Transtorno de Bipolaridad?
              </h1>
              <p className="informacion-p">
                El trastorno bipolar es una enfermedad mental caracterizada por
                cambios extremos en el estado de ánimo, la energía y la
                capacidad de funcionamiento. Las personas con trastorno bipolar
                experimentan episodios de manía (estado de ánimo elevado o
                irritable) y episodios de depresión (estado de ánimo bajo). Es
                una condición crónica, pero tratable, que suele manifestarse en
                la adolescencia o adultez temprana. Las causas incluyen factores
                genéticos, biológicos y ambientales.
              </p>
            </section>
          </div>
          <div className="div-canvas-1">
            <Canvas camera={{ position: [1, 1, 2] }} shadows>
              <OrbitControls />
              <Brain />
              <Lights1 />
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
              <h1 className="informacion-h1">
                Episodios Comunes Del Trastorno Bipolar
              </h1>
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
                {startAnimationModel1 ? "DEJAR DE CORRER" : "CORRER"}
              </button>
            </section>
          </div>
          <div className="div-canvas-1">
            <Canvas camera={{ position: [1.5, 1, 2] }} shadows>
              <OrbitControls />
              <Human startAnimation={startAnimationModel1} />
              <directionalLight position={[5, 5, 10]} intensity={2} />

              <Boton3D
                onClick={() => setStartAnimationModel1((prev) => !prev)}
                mensaje={startAnimationModel1 ? "PARAR" : "CORRER"}
                color={startAnimationModel1 ? "red" : "green"}
                posicion={[-2, 0, -0.4]}
                tamanio={[2, 0.5, 1]}
              />
              <Text />
              <Floor />
              <Lights />
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
              <h1 className="informacion-h1">
                Sintomas Comunes Del Transtorno Bipolar
              </h1>
              <p className="informacion-p">
                La enfermedad de Huntington es un trastorno genético
                neurodegenerativo que afecta el cerebro, causando deterioro
                progresivo de las capacidades motoras, cognitivas y
                psiquiátricas. Es una enfermedad hereditaria de patrón
                autosómico dominante, lo que significa que una sola copia del
                gen defectuoso puede causar la enfermedad.
              </p>
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
                {startAnimationModel2 ? "DETENER ANIMACIÓN" : "LAMENTARSE"}
              </button>
            </section>
          </div>
          <div className="div-canvas-1">
            <Canvas camera={{ position: [1, 1, 2] }} shadows>
              <OrbitControls />
              <Human2 startAnimation={startAnimationModel2} />
              <directionalLight position={[5, 5, 10]} intensity={2} />

              <Boton3D
                onClick={() => setStartAnimationModel1((prev) => !prev)}
                mensaje={startAnimationModel1 ? "PARAR" : "CORRER"}
                color={startAnimationModel1 ? "red" : "green"}
                posicion={[-2, 0, -0.4]}
                tamanio={[2, 0.5, 1]}
              />
              <Floor />
              <Lights />
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
              <h1 className="informacion-h1">
                Tratamiento del Trastorno Bipolar
              </h1>
              <p className="informacion-p">
                El tratamiento del trastorno bipolar incluye medicamentos
                estabilizadores del ánimo, antidepresivos y terapia psicológica.
                También es fundamental el apoyo familiar y un estilo de vida
                equilibrado. Aunque no tiene cura, un tratamiento adecuado
                permite a muchas personas llevar una vida funcional y estable.
              </p>
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
                {startAnimationModel1 ? "DETENER ANIMACIÓN" : "ASUSTARSE"}
              </button>
            </section>
          </div>
          <div className="div-canvas-1">
            <Canvas camera={{ position: [1, 1, 2] }} shadows>
              <OrbitControls />
              <Human3 startAnimation={startAnimationModel3} />
              <directionalLight position={[5, 5, 10]} intensity={2} />

              <Boton3D
                onClick={() => setStartAnimationModel1((prev) => !prev)}
                mensaje={startAnimationModel1 ? "PARAR" : "CORRER"}
                color={startAnimationModel1 ? "red" : "green"}
                posicion={[-2, 0, -0.4]}
                tamanio={[2, 0.5, 1]}
              />
              <Floor />
              <Lights />
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
    </>
  );
};

export default Bipolaridad;
