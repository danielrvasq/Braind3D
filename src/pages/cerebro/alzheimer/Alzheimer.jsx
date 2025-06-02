/* eslint-disable react/no-unknown-property */
import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sky, Sparkles, Text, Text3D } from "@react-three/drei";
import Lights from "./lights/Ligths";
import Lights2 from "./lights/Lights2";
import Floor from "./models-3d/Floor";
import OldManAlz from "./models-3d/OldManAlz";
import BrainAl from "./models-3d/BrainAl";
import Title from "./texts/Title";
import "./Alzheimer.css";


const Alzheimer = () => {

   // Estado para controlar la animación
    const [startAnimation, setStartAnimation] = useState(false);
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
                target={[0, 0, 0]} // Esto centra los controles en el origen
                enableZoom={true}
                enablePan={true}
              />
              <directionalLight position={[5, 5, 10]} intensity={2} />
              <Title text="Alzheimer" position={[0, 0, 0]} />
              <Lights />
            </Canvas>
          </div>
        </section>
     <div className="contenedor-alzheimer">
       <div className="texto-alzheimer ">
         <h1>¿Qué es la enfermedad del Alzheimer?</h1>
         <p>
         El Alzheimer es una enfermedad neurodegenerativa que afecta principalmente el cerebro, 
         causando un deterioro progresivo de la memoria y otras funciones cognitivas. 
         Es la forma más común de demencia en personas mayores. 
         </p>
       </div>
 
      <div className="modelo-alzheimer">
      <Canvas
        shadows
        camera={{ position: [0, 3, 5], fov: 40 }}
        style={{ background: '#ffffff' } } // ⬅️ Aquí le ponemos fondo blanco
      >
       <Lights />
       <Lights2 />
       <BrainAl scale={1.8} />
        <Floor />
       <OrbitControls enableZoom={false} />
         
         </Canvas>
       </div>
     </div>

        <div className="contenedor-alzheimer">
            <div className="texto-alzheimer">
                        
              <h1>Sintomas</h1>
                  <p>
                  El Alzheimer es una enfermedad neurodegenerativa que afecta 
                  principalmente la memoria y las funciones cognitivas. Los síntomas 
                  pueden variar, pero generalmente se desarrollan de la siguiente manera:
                  <br />
                  •Pérdida de memoria          •Pérdida de iniciativa
                  <br />
                  •Problemas con el lenguaje   •Alteraciones en el juicio 
                  <br />
                  •Dificultad para realizar tareas cotidianas
                    <br />
                    </p>
                      <button
                          onClick={() => setStartAnimation((prev) => !prev)}
                          style={{
                          display: "block",
                          margin: "0 auto",
                          padding: "10px 20px",
                          background: startAnimation ? "#ff4444" : "#4CAF50",
                          color: "white",
                          border: "none",
                          borderRadius: "4px",
                          cursor: "pointer",
                          }}
                        >
                          {startAnimation ? "DETENER ANIMACIÓN" : "REPRODUCIR ANIMACIÓN"}
                        </button>
                      </div>
                      <div className="modelo-alzheimer">
                        <Canvas camera={{ position: [7, 3, 5], fov: 50 }} shadows>
                          <OrbitControls />
                          <directionalLight position={[5, 5, 10]} intensity={2} />
                          <OldManAlz
                            startAnimation={startAnimation}
                            stopAnimation={!startAnimation}scale={2.2}
                          />
                          <Text />
                          <Lights2 />
                          <Floor />
                          <Sky />
                          <Sparkles
                            count={1000}
                            speed={2}
                            opacity={3}
                            color={"yellow"}
                            size={3}
                            scale={[10, 10, 10]}
                            noise={1}
                          />
                        </Canvas>
                      </div>
                    </div>

                  <div className="contenedor-alzheimer">
            <div className="texto-alzheimer">
                        
              <h1>Sintomas</h1>
                  <p>
                  El Alzheimer es una enfermedad neurodegenerativa que afecta 
                  principalmente la memoria y las funciones cognitivas. Los síntomas 
                  pueden variar, pero generalmente se desarrollan de la siguiente manera:
                  <br />
                  •Pérdida de memoria          •Pérdida de iniciativa
                  <br />
                  •Problemas con el lenguaje   •Alteraciones en el juicio 
                  <br />
                  •Dificultad para realizar tareas cotidianas
                    <br />
                    </p>
                      <button
                          onClick={() => setStartAnimation((prev) => !prev)}
                          style={{
                          display: "block",
                          margin: "0 auto",
                          padding: "10px 20px",
                          background: startAnimation ? "#ff4444" : "#4CAF50",
                          color: "white",
                          border: "none",
                          borderRadius: "4px",
                          cursor: "pointer",
                          }}
                        >
                          {startAnimation ? "DETENER ANIMACIÓN" : "REPRODUCIR ANIMACIÓN"}
                        </button>
                      </div>
                      <div className="modelo-alzheimer">
                        <Canvas camera={{ position: [7, 3, 5], fov: 50 }} shadows>
                          <OrbitControls />
                          <directionalLight position={[5, 5, 10]} intensity={2} />
                          <OldManAlz
                            startAnimation={startAnimation}
                            stopAnimation={!startAnimation}scale={2.2}
                          />
                          <Text />
                          <Lights2 />
                          <Floor />
                          <Sky />
                          <Sparkles
                            count={1000}
                            speed={2}
                            opacity={3}
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

export default Alzheimer;
