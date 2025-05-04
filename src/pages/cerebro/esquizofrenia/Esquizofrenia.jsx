import "./Esquizofrenia.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sky, Sparkles, Text, Text3D } from "@react-three/drei";
import Boy from "./models-3d/Boy";
import Title from "./texts/Title";
import Piso from "./models-3d/Piso";
import Light from "./lights/Lights";
import React, { useState, useEffect } from "react";
import People from "./models-3d/People";
import Mesa from "./models-3d/Mesa";
import Puerta from "./models-3d/Puerta";
import Tv from "./models-3d/Tv";


const Esquizofrenia = () => { 
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <>
      <section id="seccion1">
        <div className="div-container">
          <div className="div-text">
            <section className="quees-info">
              <h1 className="informacion-h1">¿Qué es la Ezquisofrenia?</h1>
              <p className="informacion-p">
                La enfermedad de Huntington es un trastorno genético
                neurodegenerativo que afecta el cerebro, causando deterioro
                progresivo de las capacidades motoras, cognitivas y
                psiquiátricas.
              </p>
              <button
                onClick={() => setIsAnimating(!isAnimating)}
                style={{
                  padding: "10px 20px",
                  background: isAnimating ? "#ff4444" : "#4CAF50",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                {isAnimating ? "DETENER ANIMACIÓN" : "REPRODUCIR ANIMACIÓN"}
              </button>
              <p className="informacion-p">
                Es una enfermedad hereditaria de patrón autosómico dominante, lo
                que significa que una sola copia del gen defectuoso puede causar
                la enfermedad.
              </p>
            </section>
          </div>
          <div className="div-canvas-1">
            <Canvas camera={{ position: [1, 1, 3] }} shadows={true}>
              <OrbitControls />
              <directionalLight position={[5, 5, 10]} intensity={2} />
              <Boy playAnimation={isAnimating ? 'Armature|mixamo.com|Layer0' : null} />
              <Light />
              <Piso />
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

export default Esquizofrenia;
