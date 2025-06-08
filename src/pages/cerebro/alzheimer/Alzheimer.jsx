import { Sky, Sparkles, OrbitControls } from "@react-three/drei";
import Lights from "../huntington/lights/Lights";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import Title from "../esquizofrenia/texts/Title";
import { useRef, useEffect, useState, Suspense } from "react";
import useOldmanStore from "../../../stores/use-oldman-store";
import Light3 from "./lights/Lights3";
import Title1 from "./texts/Title1";

// Modelos 3D
import BrainAl from "./models-3d/BrainAl";
import WomanOld from "./models-3d/WomanOld";
import OldManAlz from "./models-3d/OldManAlz";
import Floor from "../huntington/models-3d/Floor";
import Lavadora from "./models-3d/Lavadora";
import Boton3D from "./models-3d/Boton3D";
import Pancito from "./models-3d/Pancito";

const Alzheimer = () => {
  const [oldManIsWalking, setOldManIsWalking] = useState(false);
  const [womanIsThinking, setWomanIsThinking] = useState(false);
  const { setCurrentAnimation } = useOldmanStore();

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
              <Title text="Alzheimer" position={[0, 0, 0]} />
              <Lights />
            </Suspense>
          </Canvas>
        </div>
      </section>

      <div className="div-container">
        <div className="div-text">
          <section className="quees-info">
            <h1 className="informacion-h1">¿Qué es la enfermedad del Alzheimer?</h1>
            <p className="informacion-p">
              El Alzheimer es una enfermedad neurodegenerativa que afecta principalmente el cerebro,
              causando un deterioro progresivo de la memoria y otras funciones cognitivas. Es la forma más común de demencia en personas mayores.
            </p>
          </section>
        </div>
        <div className="div-canvas-1">
          <Canvas camera={{ position: [1, 1, 2] }} shadows>
            <Suspense fallback={null}>
              <OrbitControls />
              <Floor />
              <Lights />
              <BrainAl scale={2.4} />
              <Sky />
              <Sparkles count={256} speed={1.5} opacity={1} color="yellow" size={3} scale={[10, 10, 10]} noise={1} />
            </Suspense>
          </Canvas>
        </div>
      </div>

      <div className="div-container">
        <div className="div-text">
          <section className="quees-info">
            <h1 className="informacion-h1">Causas</h1>
            <p>
              Las causas exactas del Alzheimer no se conocen completamente, pero hay varios factores que contribuyen a su desarrollo:
              <br />• Acumulación de proteínas anormales&nbsp;&nbsp;&nbsp;&nbsp;• Envejecimiento
              <br />• Factores genéticos&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Enfermedades cardiovasculares
              <br />• Dificultad para realizar tareas cotidianas&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Factores ambientales
            </p>
            <button onClick={() => setOldManIsWalking((prev) => !prev)}>
              {oldManIsWalking ? "Detener caminata" : "Caminar"}
            </button>
          </section>
        </div>
        <div className="div-canvas-1">
          <Canvas camera={{ position: [1, 1.8, 2] }} shadows>
            <Suspense fallback={null}>
              <OrbitControls />
              <Floor />
              <Lights />
              <OldManAlz walk={oldManIsWalking} scale={1.4} />
              <Sky />
              <Boton3D
                position={[0, 0, -2]}
                onClick={() => setOldManIsWalking(true)}
                mensaje="Caminar"
                color="#4CAF50"
                posicion={[-1, -0.52, -0.5]}
                tamanio={[2, 0.5, 1]}
              />
              <Sparkles count={256} speed={1.5} opacity={1} color="yellow" size={3} scale={[10, 10, 10]} noise={1} />
            </Suspense>
          </Canvas>
        </div>
      </div>

      <div className="div-container">
        <div className="div-text">
          <section className="quees-info">
            <h1 className="informacion-h1">Síntomas</h1>
            <p>
              El Alzheimer afecta la memoria y funciones cognitivas. Los síntomas suelen incluir:
              <br />• Pérdida de memoria&nbsp;&nbsp;&nbsp;&nbsp;• Pérdida de iniciativa
              <br />• Problemas con el lenguaje&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Alteraciones en el juicio
              <br />• Dificultad para realizar tareas cotidianas
            </p>
            <button onClick={() => setWomanIsThinking((prev) => !prev)}>
              {womanIsThinking ? "Detener pensamiento" : "Pensar"}
            </button>
          </section>
        </div>
        <div className="div-canvas-1">
          <Canvas camera={{ position: [1, 1, 2] }} shadows>
            <Suspense fallback={null}>
              <OrbitControls />
              <Floor />
              <Title1 title="Utiliza el cursor para iluminar la escena" />
              <Light3 />
              <WomanOld thinking={womanIsThinking} scale={1.4} />
              <Lavadora scale={0.06} />
              <Pancito scale={0.35} />
              <Sky />
              <Boton3D
                position={[0, 0, -2]}
                onClick={() => setWomanIsThinking(true)}
                mensaje="Pensar"
                color="#4CAF50"
                posicion={[-1, -0.52, -0.5]}
                tamanio={[2, 0.5, 1]}
              />
              <Sparkles count={256} speed={1.5} opacity={1} color="yellow" size={3} scale={[10, 10, 10]} noise={1} />
            </Suspense>
          </Canvas>
        </div>
      </div>

      <div className="div-container">
        <div className="div-text">
          <section className="quees-info">
            <h1 className="informacion-h1">¿Qué es la Enfermedad de Huntington?</h1>
            <p className="informacion-p">
              La enfermedad de Huntington es un trastorno genético neurodegenerativo que afecta el cerebro, causando deterioro progresivo de las capacidades motoras, cognitivas y psiquiátricas.
              Es hereditaria, de patrón autosómico dominante.
            </p>
          </section>
        </div>
        <div className="div-canvas-1">
          <Canvas camera={{ position: [1, 1, 2] }} shadows>
            <Suspense fallback={null}>
              <OrbitControls />
              <Floor />
              <Lights />
              <Sky />
              <Sparkles count={256} speed={1.5} opacity={1} color="yellow" size={3} scale={[10, 10, 10]} noise={1} />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Alzheimer;
