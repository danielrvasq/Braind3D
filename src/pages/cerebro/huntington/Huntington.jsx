/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import "./Huntington.css";
import React, { useState, useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
// -----------------------------------------------
import {
  Environment,
  OrbitControls,
  Sky,
  Sparkles,
  Text,
  Text3D,
} from "@react-three/drei";
// MODELOS 3D-----------------------------------------------
import Brain from "./models-3d/Brain";
import Lights from "./lights/Lights";
import Floor from "./models-3d/Floor";
import OldMan from "./models-3d/OldMan";
import Lights2 from "./lights/Lights2";
import Title from "../esquizofrenia/texts/Title";
import Boy from "./models-3d/Boy2";
import Boton3D from "./models-3d/Boton3D";
import TeclaS from "./models-3d/TeclaS";
import TeclaEnter from "./models-3d/TeclaEnter";
import Girl from "./models-3d/Girl";
import TeclaB from "./models-3d/TeclaB";
import Developer from "./models-3d/Developer";
// -----------------------------------------------

const Huntington = () => {
  const devRef = useRef();
  const [isHit, setIsHit] = useState(false);

  const [danceTrigger, setDanceTrigger] = useState(false);
  const playSound = () => {
    new Audio("/sounds/golpe.mp3").play();
  };

  const [saludarTrigger, setSaludarTrigger] = useState(false);
  const handleClickOrKey = () => {
    playSound(); // 🔊 Sonido
    devRef.current?.playNext();
  };
  // Escuchar la tecla Enter
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        handleClickOrKey();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
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
              <CameraReset/>
              <OrbitControls
                target={[0, 0, 0]} // Esto centra los controles en el origen
                enableZoom={true}
                enablePan={true}
              />
              <directionalLight position={[5, 5, 10]} intensity={2} />
              <Title text="Huntington" position={[0, 0, 0]} />
              <Lights />
            </Canvas>
          </div>
        </section>
        <div className="div-container">
          <div className="div-text">
            <section className="quees-info">
              <h1 className="informacion-h1">
                ¿Qué es la Enfermedad de Huntington?
              </h1>
              <p className="informacion-p">
                La enfermedad de Huntington es un trastorno genético
                neurodegenerativo que afecta el cerebro, causando deterioro
                progresivo de las capacidades motoras, cognitivas y
                psiquiátricas. Es una enfermedad hereditaria de patrón
                autosómico dominante, lo que significa que una sola copia del
                gen defectuoso puede causar la enfermedad.
              </p>
            </section>
          </div>
          <div className="div-canvas-1">
            <Canvas camera={{ position: [1, 1, 2] }} shadows>
              <OrbitControls />
              <Brain />
              <Lights />
              <Text />
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
                  <b>Síntomas motores:</b>
                  <br />
                  •Movimientos involuntarios
                  <br />
                  •Problemas de coordinación
                  <br />
                  •Rigidez muscular
                  <br />
                  •Problemas con la deglución
                </p>
                <p className="informacion-p">
                  <b>Síntomas cognitivos:</b>
                  <br />
                  •Problemas de memoria
                  <br />
                  •Deterioro en el razonamiento y la toma de decisiones
                  <br />
                  •Dificultades en la concentración
                </p>
              </div>
              <button
                onClick={handleClickOrKey}
                style={{
                  display: "block",
                  margin: "0 auto",
                  padding: "10px 20px",
                  background: isHit ? "#ff4444" : "#4CAF50",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                {isHit ? "Levantar" : "Golpear"}
              </button>
            </section>
          </div>
          <div className="div-canvas-1">
            <Canvas camera={{ position: [1.5, 1, 2] }} shadows>
              <OrbitControls />
              <directionalLight position={[5, 5, 10]} intensity={2} />
              <Developer ref={devRef} onStateChange={setIsHit} />
              <Boton3D
                onClick={handleClickOrKey}
                mensaje={[isHit ? "Levantar" : "Golpear"]}
                color={isHit ? "#ff4444" : "#4CAF50"}
                posicion={[-2, 0, -0.4]}
                tamanio={[2, 0.5, 1]}
              />
              <Environment preset="sunset" background={true} />
              <Text />
              <Lights />
              <Floor />
              <TeclaEnter />
              {/* <Sky /> */}
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
              <h1 className="informacion-h1">Tratamiento</h1>
              <p className="informacion-p">
                Actualmente no existe una cura para la enfermedad de Huntington.
                El tratamiento se enfoca en aliviar los síntomas y mejorar la
                calidad de vida. Se utilizan medicamentos para controlar los
                movimientos involuntarios, problemas de ánimo y otros síntomas.
              </p>
              <p className="informacion-p">
                a mantener la funcionalidad y la independencia por más tiempo.
                El apoyo psicológico y social es fundamental para el paciente y
                su familia.
              </p>
              <button
                onClick={() => setSaludarTrigger(true)}
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
                Saludar
              </button>
            </section>
          </div>
          <div className="div-canvas-1">
            <Canvas camera={{ position: [1, 1, 2] }} shadows>
              <OrbitControls />
              <directionalLight position={[5, 5, 10]} intensity={2} />
              <Boy
                position={[0, -1, 0]}
                externSaludarTrigger={saludarTrigger}
                resetSaludarTrigger={() => setSaludarTrigger(false)}
              />
              <Environment preset="sunset" background={true} />
              <Text />
              <Boton3D
                position={[0, 0, -2]}
                onClick={() => setSaludarTrigger(true)}
                mensaje={"Saludar"}
                color={"#4CAF50"}
                posicion={[-1, 0, -0.5]}
                tamanio={[2, 0.5, 1]}
              />
              <Lights />
              <Floor />
              <TeclaS />
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
                ¿Qué es la Enfermedad de Huntington?
              </h1>
              <p className="informacion-p">
                La enfermedad de Huntington es un trastorno genético
                neurodegenerativo que afecta el cerebro, causando deterioro
                progresivo de las capacidades motoras, cognitivas y
                psiquiátricas.
              </p>
              <p className="informacion-p">
                Es una enfermedad hereditaria de patrón autosómico dominante, lo
                que significa que una sola copia del gen defectuoso puede causar
                la enfermedad.
              </p>
              <button
                onClick={() => setDanceTrigger(true)}
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
                ¡Baila!
              </button>
            </section>
          </div>
          <div className="div-canvas-1">
            <Canvas camera={{ position: [1, 1, 2] }} shadows>
              <OrbitControls />
              <directionalLight position={[5, 5, 10]} intensity={2} />
              <Girl
                externDanceTrigger={danceTrigger}
                resetDanceTrigger={() => setDanceTrigger(false)}
              />
              <Text />
              <Environment preset="sunset" background={true} />
              <Lights2 />
              <Floor />
              <TeclaB />
              <Boton3D
                position={[0, 0, -2]}
                onClick={() => setDanceTrigger(true)}
                mensaje={"¡Baila!"}
                color={"#4CAF50"}
                posicion={[-1.5, 0, 0]}
                tamanio={[2, 0.5, 1]}
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
            </Canvas>
          </div>
        </div>
      </section>
    </>

    //   <>
    //   <section id="seccion1">
    //     <section id="seccion0">
    //       <div className="div-canvas-2">
    //         <Canvas
    //           camera={{
    //             position: [0, 0, 4],
    //             fov: 55,
    //           }}
    //           shadows={true}
    //         >
    //           <OrbitControls
    //             target={[0, 0, 0]} // Esto centra los controles en el origen
    //             enableZoom={true}
    //             enablePan={true}
    //           />
    //           <directionalLight position={[5, 5, 10]} intensity={2} />
    //           <Title position={[0, 0, 0]} />
    //           <Light4 />
    //         </Canvas>
    //       </div>
    //     </section>
    //     <div className="div-container">
    //       <div className="div-text">
    //         <section className="quees-info">
    //           <h1 className="informacion-h1">¿Qué es la Esquizofrenia?</h1>
    //           <p className="informacion-p">
    //             La esquizofrenia es un trastorno mental crónico y grave que
    //             afecta la forma en que una persona piensa, siente y percibe la
    //             realidad. Se caracteriza por alteraciones en la percepción (como
    //             alucinaciones y delirios), pensamiento desorganizado y
    //             dificultades emocionales y sociales.
    //           </p>
    //           <button
    //             onClick={() => setAnim1(!anim1)}
    //             style={{
    //               display: "block",
    //               margin: "0 auto",
    //               padding: "10px 20px",
    //               background: anim1 ? "#ff4444" : "#4CAF50",
    //               color: "white",
    //               border: "none",
    //               borderRadius: "4px",
    //               cursor: "pointer",
    //             }}
    //           >
    //             {anim1 ? "DETENER ANIMACIÓN" : "REPRODUCIR ANIMACIÓN"}
    //           </button>
    //           <button onClick={() => setSceneKey(prev => prev + 1)} style={{
    //               display: "block",
    //               margin: "0 auto",
    //               padding: "10px 20px",
    //               background:"#4CAF50",
    //               color: "white",
    //               border: "none",
    //               borderRadius: "4px",
    //               cursor: "pointer",
    //               marginTop: "10px",
    //             }}>Reiniciar escena</button>
    //         </section>
    //       </div>
    //       <div className="div-canvas-1">

    //         <Canvas camera={{ position: [1, 1, 3] }} shadows={true} key={sceneKey}>
    //           <OrbitControls />
    //           <directionalLight position={[5, 5, 10]} intensity={2} />
    //           <Boy playAnimation={anim1 ? "asustado" : null} />
    //           <Light />
    //           <Piso />

    //           <Sky />
    //           <Sparkles
    //             count={256}
    //             speed={1.5}
    //             opacity={1}
    //             color={"yellow"}
    //             size={3}
    //             scale={[10, 10, 10]}
    //             noise={1}
    //           />
    //           <FirstPersonControls movementSpeed={2} lookSpeed={0.1} />
    //         </Canvas>
    //       </div>
    //     </div>
    //   </section>
    //   <section id="seccion2">
    //     <div className="div-container">
    //       <div className="div-text">
    //         <section className="quees-info">
    //           <h1 className="informacion-h1">Sintomas</h1>
    //           <p className="informacion-p">
    //             Síntomas Positivos (exceso o distorsión de funciones normales):
    //             Alucinaciones (escuchar o ver cosas que no existen). Delirios
    //             (creencias falsas y persistentes). Pensamiento y lenguaje
    //             desorganizado. Comportamiento motor anormal.
    //           </p>
    //           <p className="informacion-p">
    //             Negativos(disminución de funciones normales): Apatía, falta de
    //             motivación. Dificultad para expresar emociones (afecto plano).
    //             Aislamiento social.{" "}
    //           </p>
    //           <p className="informacion-p">
    //             Cognitivos: Problemas de memoria, atención y toma de decisiones.
    //           </p>

    //           <button
    //             onClick={() => setAnim2(!anim2)}
    //             style={{
    //               display: "block",
    //               margin: "0 auto",
    //               padding: "10px 20px",
    //               background: anim1 ? "#ff4444" : "#4CAF50",
    //               color: "white",
    //               border: "none",
    //               borderRadius: "4px",
    //               cursor: "pointer",
    //             }}
    //           >
    //             {anim2 ? "DETENER ANIMACIÓN" : "REPRODUCIR ANIMACIÓN"}
    //           </button>
    //         </section>
    //       </div>
    //       <div className="div-canvas-1">
    //         <Canvas camera={{ position: [5, 1, 1] }} shadows={true}>
    //           <OrbitControls />
    //           <directionalLight position={[5, 5, 10]} intensity={2} />
    //           <Light2 />
    //           <Boy playAnimation={anim2 ? "sentado_triste" : null} />
    //           <Puerta
    //             position={[0, -0.8, 1]}
    //             scale={[1.5, 1.5, 1.5]}
    //             rotation={[0, 1, 0]}
    //           />
    //           <Piso />
    //           <Sky />
    //           <Sparkles
    //             count={256}
    //             speed={1.5}
    //             opacity={1}
    //             color={"yellow"}
    //             size={3}
    //             scale={[10, 10, 10]}
    //             noise={1}
    //           />
    //         </Canvas>
    //       </div>
    //     </div>
    //   </section>
    //   <section id="seccion3">
    //     <div className="div-container">
    //       <div className="div-text">
    //         <section className="quees-info">
    //           <h1 className="informacion-h1">Prevención y cuidados</h1>
    //           <p className="informacion-p">
    //             Detección temprana (ante primeros síntomas, buscar ayuda
    //             profesional).
    //           </p>
    //           <p className="informacion-p">
    //             Adherencia al tratamiento(evitar recaídas).
    //           </p>
    //           <p className="informacion-p">
    //             Evitar drogas y alcohol (pueden empeorar los síntomas).
    //           </p>
    //           <p className="informacion-p">
    //             Red de apoyo (familia, grupos terapéuticos).
    //           </p>
    //           <p className="informacion-p">
    //             Estilo de vida saludable (rutina, ejercicio, alimentación
    //             balanceada).
    //           </p>
    //           <button
    //             onClick={() => setAnim3(!anim3)}
    //             style={{
    //               display: "block",
    //               margin: "0 auto",
    //               padding: "10px 20px",
    //               background: anim1 ? "#ff4444" : "#4CAF50",
    //               color: "white",
    //               border: "none",
    //               borderRadius: "4px",
    //               cursor: "pointer",
    //             }}
    //           >
    //             {anim3 ? "DETENER ANIMACIÓN" : "REPRODUCIR ANIMACIÓN"}
    //           </button>
    //         </section>
    //       </div>
    //       <div className="div-canvas-1">
    //         <Canvas camera={{ position: [1, 1, 3] }} shadows={true}>
    //           <OrbitControls />
    //           <directionalLight position={[5, 5, 10]} intensity={2} />
    //           <Light4 />
    //           <Boy playAnimation={anim3 ? "tocando" : null} />
    //           <Piso />
    //           <Mesa position={[0, 3, 0.5]} scale={[3, 4, 2]} />
    //           <Sky />
    //           <Sparkles
    //             count={256}
    //             speed={1.5}
    //             opacity={1}
    //             color={"yellow"}
    //             size={3}
    //             scale={[10, 10, 10]}
    //             noise={1}
    //           />
    //         </Canvas>
    //       </div>
    //     </div>
    //   </section>
    //   <section id="seccion4">
    //     <div className="div-container">
    //       <div className="div-text">
    //         <section className="quees-info">
    //           <h1 className="informacion-h1">Tratamiento</h1>
    //           <p className="informacion-p">
    //             Medicamentos antipsicóticos (controlan síntomas positivos).
    //           </p>
    //           <p className="informacion-p">
    //             Terapia psicológica: Terapia cognitivo-conductual (TCC).
    //           </p>
    //           <p className="informacion-p">
    //             Rehabilitación psicosocial (entrenamiento en habilidades
    //             sociales).
    //           </p>
    //           <p className="informacion-p">Apoyo familiar y comunitario.</p>
    //           <p className="informacion-p">
    //             Hospitalización (en casos graves o crisis).
    //           </p>
    //           <button
    //             onClick={() => setAnim4(!anim4)}
    //             style={{
    //               display: "block",
    //               margin: "0 auto",
    //               padding: "10px 20px",
    //               background: anim1 ? "#ff4444" : "#4CAF50",
    //               color: "white",
    //               border: "none",
    //               borderRadius: "4px",
    //               cursor: "pointer",
    //             }}
    //           >
    //             {anim4 ? "DETENER ANIMACIÓN" : "REPRODUCIR ANIMACIÓN"}
    //           </button>
    //         </section>
    //       </div>
    //       <div className="div-canvas-1">
    //         <Canvas camera={{ position: [1, 1, 3] }} shadows={true}>
    //           <OrbitControls />
    //           <directionalLight position={[5, 5, 10]} intensity={2} />
    //           <Light3 />
    //           <Boy playAnimation={anim4 ? "sentado" : null} />
    //           <Tv
    //             position={[0, 0.5, 2]}
    //             scale={[0.5, 0.5, 0.5]}
    //             rotation={[0, Math.PI, 0]}
    //           />
    //           <Piso />
    //           <Sky />
    //           <Sparkles
    //             count={256}
    //             speed={1.5}
    //             opacity={1}
    //             color={"yellow"}
    //             size={3}
    //             scale={[10, 10, 10]}
    //             noise={1}
    //           />
    //         </Canvas>
    //       </div>
    //     </div>
    //   </section>
    // </>
  );
};

export default Huntington;
