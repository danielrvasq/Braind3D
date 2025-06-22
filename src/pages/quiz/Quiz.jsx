import "./Quiz.css";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Sky, Text } from "@react-three/drei";
import LightJuego from "./lights/LightJuego";
import { Physics } from "@react-three/rapier";
import Suelo from "./models-3d/Suelo";
import Car from "./models-3d/Car";
import DetectorZona from "./models-3d/DetectorZona";
import { useRef, useEffect, useState } from "react";

import questions from "../../data/questions";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import useAuthStore from "../../stores/use-auth-store";
import { Rocks } from "./models-3d/Rocks";

const generarRocasAleatorias = (cantidad = 30) => {
  const rocas = [];
  for (let i = 0; i < cantidad; i++) {
    rocas.push({
      id: crypto.randomUUID(),
      posicion: [
        Math.random() * 200 - 100, // X entre -150 y 150 → más ancho
        0,
        Math.random() * 80 - 40, // Z entre -20 y 20 → más corto
      ],
      escala: 3 + Math.random() * 7, // escala entre 3 y 10
      rotY: Math.random() * Math.PI * 2,
    });
  }
  return rocas;
};

const Quiz = () => {
  const [rocasDecorativas] = useState(() => generarRocasAleatorias(15));

  const [mostrarRetro, setMostrarRetro] = useState(false);
  const [retroIndex, setRetroIndex] = useState(0);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [userAnswers, setUserAnswers] = useState([]);
  const [quizFinalizado, setQuizFinalizado] = useState(false);
  const [aciertos, setAciertos] = useState(0);

  const { userLooged } = useAuthStore();
  const db = getFirestore();

  // Avanzar a la siguiente pregunta
  const handleNext = async () => {
    if (!selectedOption) return alert("Debes seleccionar una opción");
    if (selectedOption === "verPodio") {
      window.location.href = "/Podio";
      return;
    }

    const isCorrect = selectedOption === questions[currentIndex].correctAnswer;

    const updatedAnswers = [...userAnswers, selectedOption];
    setUserAnswers(updatedAnswers);
    setSelectedOption("");

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      let correctas = 0;
      questions.forEach((q, i) => {
        if (updatedAnswers[i] === q.correctAnswer) correctas++;
      });

      const respuestasFinales = {
        nombre: userLooged?.displayName,
        respuestas: updatedAnswers,
        aciertos: correctas,
        timestamp: new Date(),
      };

      try {
        await setDoc(
          doc(db, "respuestasQuiz", userLooged.uid),
          respuestasFinales
        );
        setAciertos(correctas);
        setQuizFinalizado(true);
        setMostrarRetro(true);
      } catch (error) {
        console.error("Error al guardar respuestas:", error);
      }
    }
  };

  // Avanzar con Enter

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        if (mostrarRetro && selectedOption === "retroSiguiente") {
          setSelectedOption("");
          if (retroIndex < questions.length - 1) {
            setRetroIndex(retroIndex + 1);
          } else {
            setMostrarRetro(false); // Fin del feedback
            setRetroIndex(0);
          }
        } else {
          handleNext(); // Flujo normal del quiz
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedOption, currentIndex, retroIndex, mostrarRetro]);

  // Recibe desde DetectorZona la respuesta seleccionada
  const handleRespuestaDetectada = (index) => {
    const opcionSeleccionada = questions[currentIndex].options[index];
    setSelectedOption(opcionSeleccionada);
  };

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
    <div className="juego">
      <Canvas camera={{ position: [0, 100, 0] }} shadows>
        <CameraReset />

        <Text
          position={[0, 0.05, -50]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={5}
        >
          {quizFinalizado
            ? `¡Completado! Aciertos: ${aciertos} / ${questions.length}`
            : questions[currentIndex]?.question}
        </Text>
        {quizFinalizado && (
          <Text
            position={[0, 0.1, -40]} // Puedes ajustar esta posición
            rotation={[-Math.PI / 2, 0, 0]}
            scale={5}
            color="white"
            anchorX="center"
            anchorY="middle"
            onClick={() => (window.location.href = "/Podio")}
          >
            Ver Podio
          </Text>
        )}
        {mostrarRetro && (
          <>
            <Text
              key={retroIndex}
              position={[0, 0.1, 0]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={4}
              color="white"
              anchorX="center"
              anchorY="middle"
            >
              {`P: ${questions[retroIndex].question}
Tu: ${userAnswers[retroIndex]}
Ok: ${questions[retroIndex].correctAnswer}`}
            </Text>

            <Text
              position={[0, 0.1, 40]} // Coincide con el DetectorZona
              rotation={[Math.PI / 2, Math.PI, Math.PI]}
              fontSize={4}
              color="black"
              anchorX="center"
              anchorY="middle"
            >
              {retroIndex === questions.length - 1 ? "Finalizar" : "Siguiente"}
            </Text>
          </>
        )}

        <OrbitControls />
        <Sky />
        <LightJuego />

        <Physics>
          <Suelo />
          <Car />
          {/* DetectorZonas para cada respuesta */}
          {!quizFinalizado && (
            <>
              <Text
                position={[-40, 0.05, -40]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={5}
              >
                Utiliza las teclas WASD
              </Text>
              <Text
                position={[-40, 0.05, -35]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={5}
              >
                para moverte
              </Text>
              <Text
                position={[40, 0.05, -40]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={5}
              >
                Utiliza la tecla Enter
              </Text>
              <Text
                position={[40, 0.05, -35]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={5}
              >
                para interactuar
              </Text>
              <Text
                position={[-40, 0.05, -25]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={5}
              >
                Estaciona sobre la
              </Text>
              <Text
                position={[-40, 0.05, -20]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={5}
              >
                respuesta correcta
              </Text>
              <DetectorZona
                respuesta={0}
                position={[0, -0.029, -15]}
                onDetect={handleRespuestaDetectada}
              />
              <DetectorZona
                respuesta={1}
                position={[0, -0.029, 0]}
                onDetect={handleRespuestaDetectada}
              />
              <DetectorZona
                respuesta={2}
                position={[0, -0.029, 15]}
                onDetect={handleRespuestaDetectada}
              />
              <DetectorZona
                respuesta={3}
                position={[0, -0.029, 30]}
                onDetect={handleRespuestaDetectada}
              />
            </>
          )}
          {quizFinalizado && (
            <DetectorZona
              respuesta={"verPodio"}
              position={[0, -0.029, -35]} // Lejos de las otras zonas
              onDetect={(respuesta) => {
                if (respuesta === "verPodio") {
                  setSelectedOption("verPodio");
                }
              }}
            />
          )}
          {mostrarRetro && (
            <DetectorZona
              respuesta={"retroSiguiente"}
              position={[0, -0.029, 45]}
              onDetect={(respuesta) => {
                if (respuesta === "retroSiguiente") {
                  setSelectedOption("retroSiguiente");
                }
              }}
            />
          )}
          {rocasDecorativas.map((roca) => (
            <Rocks
              key={roca.id}
              position={roca.posicion}
              rotation={[0, roca.rotY, 0]}
              scale={roca.escala}
            />
          ))}
        </Physics>
        {!quizFinalizado &&
          questions[currentIndex].options.map((opcion, index) => (
            <Text
              key={index}
              position={[0, 0.1, -10 + index * 15]}
              rotation={[Math.PI / 2, Math.PI, Math.PI]}
              fontSize={5}
              color="black"
              anchorX="center"
              anchorY="middle"
            >
              {opcion}
            </Text>
          ))}
      </Canvas>
    </div>
  );
};

export default Quiz;
