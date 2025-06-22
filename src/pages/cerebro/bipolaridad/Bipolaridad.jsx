// src/pages/cerebro/bipolaridad/Bipolaridad.jsx

import React, { useRef, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { OrbitControls, Sky, Sparkles, Text, Text3D } from "@react-three/drei";
import "./Bipolaridad.css";
import Floor from "../huntington/models-3d/Floor";
import Lights from "../huntington/lights/Lights";
import Title from "./texts/Title";
import Boton3D from "./models-3d/Boton3D";
import Brain from "./models-3d/Brain";

import Human from "./models-3d/Human";
import Human2 from "./models-3d/Human2";
import Human3 from "./models-3d/Human3";

const Bipolaridad = () => {
  const [startAnimationModel1, setStartAnimationModel1] = useState(false);
  const [startAnimationModel2, setStartAnimationModel2] = useState(false);
  const [startAnimationModel3, setStartAnimationModel3] = useState(false);

  const audioRef = useRef();
  const fightAudioRef = useRef();
  const dodgeAudioRef = useRef();

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.code === "KeyQ" || event.code === "Escape") {
        setCurrentAnimation("Lost");
      }
    };
    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, []);

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
    <section id="seccion1">
      <section id="seccion0">
        <div className="div-canvas-2">
          <Canvas camera={{ position: [0, 0, 5], fov: 55 }} shadows>
            <Suspense fallback={null}>
              <CameraReset />
              <OrbitControls target={[0, 0, 0]} enableZoom enablePan />
              <Title text="Bipolaridad" position={[0, 0, 0]} />
              <Lights />
            </Suspense>
          </Canvas>
        </div>
      </section>

      <div className="div-container">
        <div className="div-text">
          <section className="quees-info">
            <h1 className="informacion-h1">
              ¿¿Qué es el Transtorno de Bipolaridad?
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
            <Suspense fallback={null}>
              <OrbitControls />
              <Floor />
              <Title
                text={"¿Que es?"}
                position={[0.5, 0.5, -1]}
                color={"SkyBlue"}
                rotation={[Math.PI / 0.01, 0.4, 0]}
              />
              <Environment preset="sunset" background={true} />
              <Lights />
              <Brain />
              <Text
                position={[0.7, 0, 0.5]} // ajusta según donde esté el cerebro
                fontSize={0.2}
                color="black"
                anchorX="center"
                anchorY="middle"
                rotation={[0, 0.4, 0]}
              >
                Haz clic en el cerebro para agrandarlo
              </Text>
              <ambientLight intensity={0.7} />
              <Sky />
              <Sparkles
                count={256}
                speed={1.5}
                opacity={1}
                color="yellow"
                size={3}
                scale={[10, 10, 10]}
                noise={1}
              />
            </Suspense>
          </Canvas>
        </div>
      </div>

      <div className="div-container">
        <div className="div-text">
          <section className="quees-info">
            <h1 className="informacion-h1">
              Episodios Comunes Del Trastorno Bipolar
            </h1>
            <p>
              El trastorno bipolar se manifiesta a través de episodios de manía,
              hipomanía y depresión. Durante un episodio maníaco, la persona
              puede sentirse eufórica, con mucha energía, hablar rápido o actuar
              impulsivamente. En la hipomanía, los síntomas son similares pero
              menos intensos. En los episodios depresivos, predominan la
              tristeza profunda, la fatiga, la falta de motivación y
              pensamientos negativos. Estos episodios pueden durar desde días
              hasta semanas y afectan significativamente la vida diaria.
            </p>

            <button
              onClick={() => {
                setStartAnimationModel1((prev) => {
                  const newState = !prev;

                  // Control del sonido
                  if (newState) {
                    fightAudioRef.current?.play();
                  } else {
                    fightAudioRef.current?.stop();
                  }

                  return newState;
                });
              }}
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
              {startAnimationModel1 ? "Detener Animación" : "Pelear"}
            </button>
          </section>
        </div>
        <div className="div-canvas-1">
          <Canvas camera={{ position: [1, 1, 2] }} shadows>
            <Suspense fallback={null}>
              <OrbitControls />

              <Floor />
              <Title
                text={"Episodios"}
                position={[0.5, 0.5, -1]}
                color={"SkyBlue"}
                rotation={[Math.PI / 0.01, 0.4, 0]}
              />
              <Lights />
              <Human
                startAnimation={startAnimationModel1}
                ref={fightAudioRef}
                scale={1.4}
              />

              <Sky />
              <Boton3D
                position={[0, 0, -2]}
                onClick={() => {
                  setStartAnimationModel1((prev) => {
                    const next = !prev;
                    if (next) {
                      fightAudioRef.current?.play(); // 🔊 Reproduce sonido
                    } else {
                      fightAudioRef.current?.stop(); // 🛑 Detiene sonido
                    }
                    return next;
                  });
                }}
                mensaje="Pelear"
                color={startAnimationModel1 ? "#ff4444" : "#4CAF50"}
                posicion={[-2, 0, -0.4]}
                tamanio={[2, 0.5, 1]}
              />
              <Environment preset="sunset" background={true} />
              <Sparkles
                count={256}
                speed={1.5}
                opacity={1}
                color="yellow"
                size={5}
                scale={[10, 10, 10]}
                noise={1}
              />
            </Suspense>
          </Canvas>
        </div>
      </div>

      <div className="div-container">
        <div className="div-text">
          <section className="quees-info">
            <h1 className="informacion-h1">
              Sintomas Comunes Del Transtorno Bipolar
            </h1>
            <p>
              El trastorno bipolar se caracteriza por cambios extremos en el
              estado de ánimo, con episodios de manía y depresión. Durante la
              manía, la persona puede sentirse eufórica o irritable, tener mucha
              energía, hablar rápido, dormir poco y actuar impulsivamente. En la
              depresión, aparecen tristeza profunda, fatiga, pérdida de interés
              en actividades, dificultad para concentrarse y pensamientos
              negativos o de desesperanza. Estos cambios afectan
              significativamente la vida diaria y requieren tratamiento
              adecuado.
            </p>
            <button
              onClick={() => {
                setStartAnimationModel2((prev) => {
                  const newState = !prev;

                  // Control del sonido
                  if (newState) {
                    dodgeAudioRef.current?.play();
                  } else {
                    audioRdodgeAudioRefef.current?.stop();
                  }

                  return newState;
                });
              }}
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
              {startAnimationModel2 ? "Detener Animación" : "Esquivar"}
            </button>
          </section>
        </div>
        <div className="div-canvas-1">
          <Canvas camera={{ position: [1, 1, 2] }} shadows>
            <Suspense fallback={null}>
              <OrbitControls />

              <Floor />
              <Title
                text={"Sintomas"}
                position={[0.5, 0.5, -1]}
                color={"SkyBlue"}
                rotation={[Math.PI / 0.01, 0.4, 0]}
              />
              <Lights />
              <Human2
                startAnimation={startAnimationModel2}
                ref={dodgeAudioRef}
                scale={1.4}
              />
              <Sky />
              <Boton3D
                position={[0, 0, -2]}
                onClick={() => setStartAnimationModel2((prev) => !prev)}
                mensaje={
                  startAnimationModel2 ? "Esquivar" : "Esquivar"
                }
                color={startAnimationModel2 ? "#ff4444" : "#4CAF50"}
                posicion={[-2, 0, -0.4]}
                tamanio={[2, 0.5, 1]}
              />
              <Environment preset="sunset" background={true} />
              <Sparkles
                count={256}
                speed={1.5}
                opacity={1}
                color="yellow"
                size={3}
                scale={[10, 10, 10]}
                noise={1}
              />
            </Suspense>
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
              equilibrado. Aunque no tiene cura, un tratamiento adecuado permite
              a muchas personas llevar una vida funcional y estable.
            </p>
            <button
              onClick={() => {
                setStartAnimationModel3((prev) => {
                  const newState = !prev;

                  // Control del sonido
                  if (newState) {
                    audioRef.current?.play();
                  } else {
                    audioRef.current?.stop();
                  }

                  return newState;
                });
              }}
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
              {startAnimationModel3 ? "Detener Animación" : "Bailar"}
            </button>
          </section>
        </div>
        <div className="div-canvas-1">
          <Canvas camera={{ position: [1, 1, 2] }} shadows>
            <Suspense fallback={null}>
              <OrbitControls />

              <Human3
                startAnimation={startAnimationModel3}
                ref={audioRef}
                scale={1.4}
              />

              <Floor />
              <Title
                text={"Tratamiento"}
                position={[0.5, 0.5, -1]}
                color={"SkyBlue"}
                rotation={[Math.PI / 0.01, 0.4, 0]}
                size={1.6}
              />
              <Lights />
              <Sky />
              <Boton3D
                position={[0, 0, -2]}
                onClick={() => {
                  setStartAnimationModel3((prev) => {
                    const next = !prev;
                    if (next) {
                      audioRef.current?.play(); // 🔊 Reproduce sonido
                    } else {
                      audioRef.current?.stop(); // 🛑 Detiene sonido
                    }
                    return next;
                  });
                }}
                mensaje="Bailar"
                color={startAnimationModel3 ? "#ff4444" : "#4CAF50"}
                posicion={[-2, 0, -0.4]}
                tamanio={[2, 0.5, 1]}
              />
              <Environment preset="sunset" background={true} />
              <Sparkles
                count={256}
                speed={1.5}
                opacity={1}
                color="yellow"
                size={3}
                scale={[10, 10, 10]}
                noise={1}
              />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Bipolaridad;
