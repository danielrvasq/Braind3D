// src/pages/cerebro/bipolaridad/Bipolaridad.jsx

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Brain from "./models-3d/Brain"; // Usas el Brain2 o el que quieras aquí
import Lights from "./lights/Lights";
import Floor from "./models-3d/Floor";
import "./Bipolaridad.css";

const Bipolaridad = () => {
  return (
    <div className="contenedor-bipolaridad">
      <div className="texto-bipolaridad">
        <h1>¿Qué es el Trastorno Bipolar?</h1>
        <p>
          El trastorno bipolar es una enfermedad mental caracterizada por cambios extremos en el estado de ánimo, la energía y la capacidad de funcionamiento.
          Las personas con trastorno bipolar experimentan episodios de manía (estado de ánimo elevado o irritable) y episodios de depresión (estado de ánimo bajo).
          Es una condición crónica, pero tratable, que suele manifestarse en la adolescencia o adultez temprana.
          Las causas incluyen factores genéticos, biológicos y ambientales.
        </p>
      </div>

      <div className="modelo-bipolaridad">
<Canvas
  shadows
  camera={{ position: [0, 2, 5], fov: 40 }}
  style={{ background: '#ffffff' }} // ⬅️ Aquí le ponemos fondo blanco
>
  <Suspense fallback={null}>
    <Lights />
    <Brain scale={1.8} />
    <Floor />
    <OrbitControls enableZoom={false} />
  </Suspense>
</Canvas>
      </div>
    </div>
  );
};

export default Bipolaridad;
