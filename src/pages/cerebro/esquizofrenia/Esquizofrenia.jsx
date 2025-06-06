/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import "./Esquizofrenia.css";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Sky,
  Sparkles,
  Text,
  Text3D,
  Environment,
  Html,
} from "@react-three/drei";
import Boy from "./models-3d/Boy";
import Title from "./texts/Title";
import Piso from "./models-3d/Piso";
import Light from "./lights/Lights";
import React, { useState, useEffect, useRef } from "react";
import People from "./models-3d/People";
import Mesa from "./models-3d/Mesa";
import Puerta from "./models-3d/Puerta";
import Tv from "./models-3d/Tv";
import Light2 from "./lights/Lights2";
import Light3 from "./lights/Lights3";
import Light4 from "./lights/Lights4";
import { FirstPersonControls } from "@react-three/drei";
import Saludo1 from "./sounds/Saludo1";
import Control from "./texts/Control";
import { Furina } from "./videos/Furina";
import { Audio3D } from "./sounds/Audio3D";
import ResetCameraOnHover from './camara/ResetCameraOnHover';
import ResetCameraOnHoverTitle from './camara/ResetCameraOnHoverTitle';
import Cat from "./models-3d/Cat";
const Esquizofrenia = () => {
  const [anim1, setAnim1] = useState(false);
  const [anim2, setAnim2] = useState(false);
  const [anim3, setAnim3] = useState(false);
  const [anim4, setAnim4] = useState(false);
  const [sceneKey, setSceneKey] = useState(0);
  const [puertaHover, setPuertaHover] = useState(false);
  const puertaAudio = useRef(null);
  const [sonidoActivo, setSonidoActivo] = useState(false);
  const [activo, setActivo] = useState(false);
  const controlsRef = useRef();

  const handleInteractuarPuerta = () => {
    const audio = new Audio("/sounds/saludo1.mp3"); // Asegúrate de que el archivo exista
    audio
      .play()
      .catch((err) => console.error("Error al reproducir el sonido:", err));
  };
  return (
    <>
      <section id="seccion1">
        <section id="seccion0">
          <div className="div-canvas-2">
            <Canvas
              camera={{
                position: [0, 0, 4],
                fov: 55,
              }}
              shadows={true}
            >
              <ResetCameraOnHoverTitle/>
              <OrbitControls
                target={[0, 0, 0]} // Esto centra los controles en el origen
                enableZoom={true}
                enablePan={true}
              />
              <directionalLight position={[5, 5, 10]} intensity={2} />
              <Title text="Esquizofrenia" position={[0, 0, 0]} />
              <Light4 />
            </Canvas>
          </div>
        </section>
        <div className="div-container">
          <div className="div-canvas-1">
            <Canvas
              camera={{ position: [0, 1.2, 6.5] }}
              shadows
              key={sceneKey}
              style={{ width: "100%", height: "100%" }} // altura pantalla completa
            >
              <OrbitControls />
              <directionalLight position={[6, 5, 10]} intensity={2} />
              <ResetCameraOnHover />
              {/* Texto 3D */}
              <Text3D
                position={[-4, 3, 0]}
                font="/fonts/roboto.json"
                size={0.5}
                height={0.2}
                curveSegments={12}
                bevelEnabled
                bevelThickness={0.02}
                bevelSize={0.02}
                bevelOffset={0}
                bevelSegments={5}
              >
                ¿Qué es la Esquizofrenia?
                <meshStandardMaterial color={"#FFFFF1"} />
              </Text3D>

              {/* Texto 2D dentro del Canvas */}
              <Html
                position={[0, -0.5, 0]}
                wrapperClass="texto-html"
                center
                transform
                occlude
              >
                <section className="quees-info">
                  <p className="informacion-p">
                    La esquizofrenia es un trastorno mental crónico y grave que
                    afecta la forma en que una persona piensa, siente y percibe
                    la realidad. Se caracteriza por alteraciones en la
                    percepción (como alucinaciones y delirios), pensamiento
                    desorganizado y dificultades emocionales y sociales.
                  </p>
                  <button
                    onClick={() => setAnim1(!anim1)}
                    title={
                      anim1
                        ? "Pulsa para detener la animación"
                        : "Pulsa para activar la animación"
                    } // Tooltip
                    style={{
                      display: "block",
                      margin: "0 auto",
                      padding: "10px 20px",
                      background: anim1 ? "#ff4444" : "#4CAF50",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                      margin: "10px auto",
                    }}
                  >
                    {anim1 ? "DETENER ANIMACIÓN" : "REPRODUCIR ANIMACIÓN"}
                  </button>
                  <button
                    onClick={() => setSceneKey((prev) => prev + 1)}
                    title={"Pulsa para reiniciar la escena"} // Tooltip
                    style={{
                      display: "block",
                      margin: "0 auto",
                      padding: "10px 20px",
                      background: "#4CAF50",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    Reiniciar escena
                  </button>
                </section>
              </Html>
            </Canvas>
          </div>
          <div className="div-canvas-1">
            <Canvas
              camera={{ position: [1, 1, 3] }}
              shadows={true}
              key={sceneKey}
            >
              <OrbitControls />
              <directionalLight position={[5, 5, 10]} intensity={2} />
              <Boy playAnimation={anim1 ? "asustado" : null} />
              <Light />
              <Piso />
              {/* Cielo realista */}
              <Sky
                distance={450000} // Distancia grande para simular el infinito
                sunPosition={[100, 20, 100]} // Puedes cambiar la posición del sol
                inclination={0.49} // Altura del sol (0 a 1)
                azimuth={0.25} // Dirección del sol (0 a 1)
              />
              <Sparkles
                count={256}
                speed={1.5}
                opacity={1}
                color={"yellow"}
                size={3}
                scale={[10, 10, 10]}
                noise={1}
              />
              <FirstPersonControls movementSpeed={2} lookSpeed={0} />
              <Control />
            </Canvas>
          </div>
        </div>
      </section>
      <section id="seccion2">
        <div className="div-container">
          <div className="div-canvas-1">
            <Canvas
              camera={{ position: [0, 1.2, 6.5] }}
              shadows
              key={sceneKey}
              style={{ width: "100%", height: "100%" }} // altura pantalla completa
            >
              <OrbitControls />
              <directionalLight position={[6, 5, 10]} intensity={2} />
              <ResetCameraOnHover />
              {/* Texto 3D */}
              <Text3D
                position={[-1.5, 3.5, 0]}
                font="/fonts/roboto.json"
                size={0.5}
                height={0.2}
                curveSegments={12}
                bevelEnabled
                bevelThickness={0.02}
                bevelSize={0.02}
                bevelOffset={0}
                bevelSegments={5}
              >
                Sintomas
                <meshStandardMaterial color={"#FFFFF1"} />
              </Text3D>

              {/* Texto 2D dentro del Canvas */}
              <Html
                position={[0, -0.5, 0]}
                wrapperClass="texto-html"
                center
                transform
                occlude
              >
                <section className="quees-info">
                  <p className="informacion-p">
                    Sitomas Positivos (exceo de funciones normales):
                    Alucionanciones (escuchar o ver cosas que no existen).
                    Delirios (creencias falsas y persistentes). Pensamiento y
                    lenguaje desorganizado. Comportamiento motor anormal.
                    Negativos (disminución de funciones normales): Apatía, falta
                    de motivación. Dificultad para expresar emociones (afecto
                    plano). Ailamiento social.
                  </p>
                  <p className="informacion-p">
                    Cognitivos: Problemas de memoria, atención y toma de
                    decisiones.
                  </p>
                  <button
                    onClick={() => setAnim2(!anim2)}
                    title={
                      anim2
                        ? "Pulsa para detener la animación"
                        : "Pulsa para activar la animación"
                    }
                    style={{
                      display: "block",
                      margin: "0 auto",
                      padding: "10px 20px",
                      background: anim2 ? "#ff4444" : "#4CAF50",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                      margin: "10px auto",
                    }}
                  >
                    {anim2 ? "DETENER ANIMACIÓN" : "REPRODUCIR ANIMACIÓN"}
                  </button>
                  <button
                    onClick={() => setActivo((prev) => !prev)}
                    title={
                      activo
                        ? "Pulsa para detener movimiento del gato"
                        : "Pulsa para activar movimiento del gato"
                    }
                    style={{
                      display: "block",
                      margin: "0 auto",
                      padding: "3px 15px",
                      background: activo ? "#ff4444" : "#4CAF50",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                      margin: "10px auto",
                    }}
                  >
                    {activo
                      ? "DETENER MOVIMIENTO DEL GATO "
                      : "ACTIVAR MOVIMIENTO DEL GATO"}
                  </button>
                </section>
              </Html>
            </Canvas>
          </div>
          <div className="div-canvas-1">
            <Saludo1 />

            {/* Este botón es solo de prueba */}
            <Canvas camera={{ position: [5, 1, 1] }} shadows={true}>
              <OrbitControls />
              <directionalLight position={[5, 5, 10]} intensity={2} />
              <Light2 />
              <Boy playAnimation={anim2 ? "sentado_triste" : null} />
              <group
                onPointerOver={() => setPuertaHover(true)}
                onPointerOut={() => setPuertaHover(false)}
              >
                <Puerta
                  position={[0, -0.8, 1]}
                  scale={[1.5, 1.5, 1.5]}
                  rotation={[0, 1, 0]}
                  onClick={handleInteractuarPuerta}
                />
                {puertaHover && (
                  <Text
                    position={[1, 2, 1]}
                    rotation={[0, 1, 0]}
                    fontSize={0.2}
                    color="RED"
                    outlineWidth={0.01}
                    outlineColor="black"
                    anchorX="center"
                    anchorY="middle"
                  >
                    click para reproducir sonido
                  </Text>
                )}
              </group>
              <Piso />
              {/* Cielo realista */}
              <Sky />
              <Cat activo={activo} />
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
      <section id="seccion3">
        <div className="div-container">
          <div className="div-canvas-1">
            <Canvas
              camera={{ position: [0, 1.2, 6.5] }}
              shadows
              key={sceneKey}
              style={{ width: "100%", height: "100%" }} // altura pantalla completa
            >
              <OrbitControls />
              <directionalLight position={[6, 5, 10]} intensity={2} />
              <ResetCameraOnHover />
              {/* Texto 3D */}
              <Text3D
                position={[-4, 3.5, 0]}
                font="/fonts/roboto.json"
                size={0.5}
                height={0.2}
                curveSegments={12}
                bevelEnabled
                bevelThickness={0.02}
                bevelSize={0.02}
                bevelOffset={0}
                bevelSegments={5}
              >
                Prevención y cuidados
                <meshStandardMaterial color={"#FFFFF1"} />
              </Text3D>

              {/* Texto 2D dentro del Canvas */}
              <Html
                position={[0, -0.5, 0]}
                wrapperClass="texto-html"
                center
                transform
                occlude
              >
                <section className="quees-info">
                  <p className="informacion-p">
                    Detección temprana (ante primeros síntomas, bucar ayuda
                    profesional). Adherencia al tratamiento (evitar recaídas).
                    Evitar drogas y alcohol (pueden empeorar los síntomas).
                  </p>
                  <p className="informacion-p">
                    Red de apoyo (familia, grupos terapéuticos).
                  </p>
                  <p className="informacion-p">
                    Estilo de vida saludable (rutina, ejercicio, alimentación
                    equilibrada).
                  </p>
                  <button
                    onClick={() => setAnim3(!anim3)}
                    title={
                      anim3
                        ? "Pulsa para detener la animación"
                        : "Pulsa para activar la animación"
                    }
                    style={{
                      display: "block",
                      margin: "0 auto",
                      padding: "10px 20px",
                      background: anim3 ? "#ff4444" : "#4CAF50",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                      margin: "10px auto",
                    }}
                  >
                    {anim3 ? "DETENER ANIMACIÓN" : "REPRODUCIR ANIMACIÓN"}
                  </button>
                  <button
                    onClick={() => setSonidoActivo(!sonidoActivo)}
                    title={
                      anim3
                        ? "Pulsa para detener sonidos 3D"
                        : "Pulsa para activar sonidos 3D"
                    }
                    style={{
                      display: "block",
                      margin: "0 auto",
                      padding: "10px 20px",
                      background: sonidoActivo ? "#ff4444" : "#4CAF50",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                      margin: "10px auto",
                    }}
                  >
                    {sonidoActivo
                      ? "DESACTIVAR SONIDOS 3D"
                      : "ACTIVAR SONIDOS 3D"}
                  </button>
                </section>
              </Html>
            </Canvas>
          </div>
          <div className="div-canvas-1">
            <Canvas camera={{ position: [1, 1, 3] }} shadows={true}>
              <OrbitControls />
              <directionalLight position={[5, 5, 10]} intensity={2} />
              <Light4 />
              <Boy playAnimation={anim3 ? "tocando" : null} />
              <Piso />
              <Mesa position={[0, 3, 0.5]} scale={[3, 4, 2]} />
              <Sky />
              <Audio3D activo={sonidoActivo} />

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
      <section id="seccion4">
        <div className="div-container">
          <div className="div-canvas-1">
            <Canvas
              camera={{ position: [0, 1.2, 6.5] }}
              shadows
              key={sceneKey}
              style={{ width: "100%", height: "100%" }} // altura pantalla completa
            >
              <OrbitControls />
              <directionalLight position={[6, 5, 10]} intensity={2} />
              <ResetCameraOnHover />

              {/* Texto 3D */}
              <Text3D
                position={[-2, 3.5, 0]}
                font="/fonts/roboto.json"
                size={0.5}
                height={0.2}
                curveSegments={12}
                bevelEnabled
                bevelThickness={0.02}
                bevelSize={0.02}
                bevelOffset={0}
                bevelSegments={5}
              >
                Tratamiento
                <meshStandardMaterial color={"#FFFFF1"} />
              </Text3D>

              {/* Texto 2D dentro del Canvas */}
              <Html
                position={[0, -0.5, 0]}
                wrapperClass="texto-html"
                center
                transform
                occlude
              >
                <section className="quees-info">
                  <p className="informacion-p">
                    Medicamentos antipsicóticos (controlan síntomas positivos)
                  </p>
                  <p className="informacion-p">
                    Terapia psicológica: Terapia cognitivo-coductual (TCC).
                  </p>
                  <p className="informacion-p">
                    Regabilitación psicosocial (entrenamiento en habilidades
                    sociales)
                  </p>
                  <p className="informacion-p">Apoyo familiar y comunitario.</p>
                  <p className="informacion-p">
                    Hospitalización (en casos graves o crisis).
                  </p>
                  <button
                    onClick={() => setAnim4(!anim4)}
                    title={
                      anim4
                        ? "Pulsa para detener la animación"
                        : "Pulsa para activar la animación"
                    }
                    style={{
                      display: "block",
                      margin: "0 auto",
                      padding: "10px 20px",
                      background: anim4 ? "#ff4444" : "#4CAF50",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                      margin: "10px auto",
                    }}
                  >
                    {anim4 ? "DETENER ANIMACIÓN" : "REPRODUCIR ANIMACIÓN"}
                  </button>
                </section>
              </Html>
            </Canvas>
          </div>
          <div className="div-canvas-1">
            <Canvas camera={{ position: [2, 1.5, -2] }} shadows={true}>
              <OrbitControls />
              <directionalLight position={[5, 5, 10]} intensity={2} />
              <Light3 />
              <Boy playAnimation={anim4 ? "sentado" : null} />
              <Tv
                position={[0, 0.5, 2]}
                scale={[0.5, 0.5, 0.5]}
                rotation={[0, Math.PI, 0]}
              />
              
              <Furina />
              <Piso />
              <Sky />
              <Html position={[2.1, 1.9, 1.8]} distanceFactor={9}>
                <div
                  style={{
                    background: "rgba(0,0,0,0.7)",
                    color: "white",
                    padding: "8px 12px",
                    borderRadius: "8px",
                    fontSize: "10px",
                    width: "auto",
                    textAlign: "center",
                  }}
                >
                  Pulsa sobre el televisor para interactuar
                </div>
              </Html>
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

export default Esquizofrenia;
