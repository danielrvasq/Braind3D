import { useState } from "react";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { db } from "../../../firebase.config";
import useAuthStore from "../../stores/use-auth-store";
import questions from "../../data/questions";
import "./Quiz.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sky } from "@react-three/drei";
import Island from "./models-3d/Island";
import LightJuego from "./lights/LightJuego";
import Respuesta from "./models-3d/Respuesta";
import { Physics } from "@react-three/rapier";
import Title from "./texts/Title";
import { Rocks } from "./models-3d/Rocks";
import Brain from "./models-3d/Brain";

const Quiz = () => {
  // Estados del quiz
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [quizFinalizado, setQuizFinalizado] = useState(false);
  const [mostrarRetro, setMostrarRetro] = useState(false);
  const [aciertos, setAciertos] = useState(0);
  const [retroIndex, setRetroIndex] = useState(0);
  const [objetosCaidos, setObjetosCaidos] = useState([]);

  // Usuario autenticado
  const { userLooged } = useAuthStore();
  const db = getFirestore();

  // Lanza un objeto con físicas (cerebro o piedra)
  const lanzarObjeto = (esCorrecta) => {
    const id = crypto.randomUUID();
    setObjetosCaidos((prev) => [
      ...prev,
      {
        id,
        tipo: esCorrecta ? "brain" : "rock",
        posicion: [Math.random() * 4 - 2, 10, 0],
      },
    ]);
  };

  // Maneja el paso a la siguiente pregunta o finalización del quiz
  const handleNext = async () => {
    if (!selectedOption) return alert("Selecciona una opción");

    const isCorrect = selectedOption === questions[currentIndex].correctAnswer;
    lanzarObjeto(isCorrect);

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
      } catch (error) {
        console.error("Error al guardar respuestas:", error);
      }
    }
  };

  // Reinicia el quiz completo
  const reiniciarQuiz = () => {
    setCurrentIndex(0);
    setUserAnswers([]);
    setSelectedOption("");
    setAciertos(0);
    setQuizFinalizado(false);
    setMostrarRetro(false);
    setRetroIndex(0);
    setObjetosCaidos([]);
  };

  return (
    <div className="juego">
      <Canvas camera={{ position: [0, 3, 11] }} shadows>
        <OrbitControls />
        <Sky />
        <LightJuego />

        <Physics>
          {/* Objetos físicos lanzados por respuestas */}
          {objetosCaidos.map((obj) =>
            obj.tipo === "brain" ? (
              <Brain key={obj.id} position={obj.posicion} />
            ) : (
              <Rocks key={obj.id} position={obj.posicion} />
            )
          )}

          <Island />

          {/* Pregunta actual */}
          {!quizFinalizado && !mostrarRetro && (
            <Title text={questions[currentIndex].question} />
          )}

          {/* Resultado final */}
          {quizFinalizado && !mostrarRetro && (
            <>
              <Title
                text={`¡Gracias, ${userLooged?.displayName}!`}
                position={[-0.5, 5, 4]}
              />
              <Title
                text={`Aciertos: ${aciertos} de ${questions.length}`}
                position={[-0.5, 3, 4]}
              />

              <Respuesta
                color="blue"
                mensaje="Ver retroalimentación"
                onClick={() => setMostrarRetro(true)}
                posicion={[-2.5, 2, 5]}
                tamanio={[3.5, 0.5, 1]}
                type="fixed"
              />
              <Respuesta
                color="blue"
                mensaje="Volver al inicio"
                onClick={() => (window.location.href = "/")}
                posicion={[2.5, 2, 5]}
                tamanio={[3, 0.5, 1]}
                type="fixed"
              />
              <Respuesta
                color="purple"
                mensaje="Ver podio"
                onClick={() => (window.location.href = "/Podio")}
                posicion={[-2.5, 1, 5]}
                tamanio={[3, 0.5, 1]}
                type="fixed"
              />
              <Respuesta
                color="orange"
                mensaje="Volver a empezar"
                onClick={reiniciarQuiz}
                posicion={[2.5, 1, 5]}
                tamanio={[3, 0.5, 1]}
                type="fixed"
              />
            </>
          )}

          {/* Retroalimentación */}
          {mostrarRetro && retroIndex < questions.length && (
            <>
              <Title
                key={retroIndex}
                text={`P: ${questions[retroIndex].question}\nTu: ${userAnswers[retroIndex]}\nOk: ${questions[retroIndex].correctAnswer}`}
                position={[0, 4.5, 4]}
              />
              <Respuesta
                color="blue"
                mensaje={
                  retroIndex === questions.length - 1
                    ? "Finalizar"
                    : "Siguiente"
                }
                onClick={() => {
                  setRetroIndex((prev) => {
                    if (prev < questions.length - 1) {
                      return prev + 1;
                    } else {
                      setMostrarRetro(false);
                      return 0;
                    }
                  });
                }}
                posicion={[0, 2, 5]}
                tamanio={[3, 0.5, 1]}
                type="fixed"
              />

              <Respuesta
                color="blue"
                mensaje="Volver al inicio"
                onClick={() => (window.location.href = "/")}
                posicion={[2.8, 1, 5]}
                tamanio={[3, 0.5, 1]}
                type="fixed"
              />
              <Respuesta
                color="purple"
                mensaje="Ver podio"
                onClick={() => (window.location.href = "/Podio")}
                posicion={[-2.5, 1, 5]}
                tamanio={[3, 0.5, 1]}
                type="fixed"
              />
            </>
          )}

          {/* Opciones de respuesta */}
          {!quizFinalizado &&
            !mostrarRetro &&
            questions[currentIndex].options.map((option, idx) => (
              <Respuesta
                key={idx}
                color={selectedOption === option ? "yellow" : "green"}
                mensaje={option}
                onClick={() => setSelectedOption(option)}
                posicion={[0, idx * 0.6 - -0.7, 4]}
                tamanio={[2, 0.5, 1]}
                type="fixed"
              />
            ))}

          {/* Botón siguiente */}
          {!quizFinalizado && !mostrarRetro && (
            <Respuesta
              color="blue"
              mensaje="Siguiente"
              onClick={handleNext}
              posicion={[4, 1, 5]}
              tamanio={[3, 0.5, 1]}
              type="fixed"
            />
          )}
        </Physics>
      </Canvas>
    </div>
  );
};

export default Quiz;
