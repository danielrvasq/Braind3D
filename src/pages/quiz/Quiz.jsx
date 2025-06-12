import { useState } from "react";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { db } from "../../../firebase.config";
import { auth } from "../../../firebase.config";
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
const Quiz = () => {
  const isCorrect = true;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const { userLooged } = useAuthStore();
  const db = getFirestore();
  const [quizFinalizado, setQuizFinalizado] = useState(false);
  const [aciertos, setAciertos] = useState(0);
  const [mostrarRetro, setMostrarRetro] = useState(false);

  const handleNext = async () => {
    if (!selectedOption) return alert("Selecciona una opción");

    const updatedAnswers = [...userAnswers, selectedOption];
    setUserAnswers(updatedAnswers);
    setSelectedOption("");

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      let correctas = 0;
      questions.forEach((q, index) => {
        if (updatedAnswers[index] === q.correctAnswer) {
          correctas++;
        }
      });

      const respuestasFinales = {
        nombre: userLooged?.displayName,
        respuestas: updatedAnswers,
        aciertos: correctas, // ✅ nuevo campo
        timestamp: new Date(),
      };

      try {
        await setDoc(
          doc(db, "respuestasQuiz", userLooged.uid),
          respuestasFinales
        );

        console.log("Respuestas guardadas correctamente para:", userLooged.uid);
        setAciertos(correctas);

        setQuizFinalizado(true);
      } catch (error) {
        console.error("Error al guardar respuestas:", error);
      }
    }
  };

  const progress = Math.round(((currentIndex + 1) / questions.length) * 100);

  return (
    <>
      <div id="contenedor">
        <h1 id="titulo">QUIZ</h1>
        <button
          onClick={() => (window.location.href = "/Podio")}
          className="btn-secondary"
        >
          Ver podio
        </button>
        {quizFinalizado && !mostrarRetro && (
          <div className="resultado-final">
            <h2>¡Gracias por completar el quiz, {userLooged?.displayName}!</h2>
            <p>
              Respuestas correctas: {aciertos} de {questions.length}
            </p>

            <button
              onClick={() => setMostrarRetro(true)}
              className="btn-secondary"
            >
              Ver retroalimentación
            </button>
            <button
              onClick={() => (window.location.href = "/")}
              className="btn-secondary"
            >
              Volver al inicio
            </button>
          </div>
        )}
        {mostrarRetro && (
          <div className="retroalimentacion">
            <h2>Retroalimentación</h2>
            {questions.map((q, index) => (
              <div key={index} className="retro-item">
                <p>
                  <strong>Pregunta:</strong> {q.question}
                </p>
                <p>
                  <strong>Tu respuesta:</strong> {userAnswers[index]}
                </p>
                <p>
                  <strong>Respuesta correcta:</strong> {q.correctAnswer}
                </p>
                <hr />
              </div>
            ))}
          </div>
        )}
        {!quizFinalizado && !mostrarRetro && (
          <div className="pregunta">
            <h2>{questions[currentIndex].question}</h2>
            <div className="opciones">
              {questions[currentIndex].options.map((option, idx) => (
                <label key={idx}>
                  <input
                    type="radio"
                    value={option}
                    checked={selectedOption === option}
                    onChange={() => setSelectedOption(option)}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
        )}
        {!quizFinalizado && !mostrarRetro && (
          <button onClick={handleNext} className="btn-primary" id="boton">
            Siguiente
          </button>
        )}
      </div>

      <div className="juego">
        <Canvas camera={{ position: [0, 5, 10] }} shadows>
          <OrbitControls />
          <LightJuego />
          <Sky />
          <Title
            text={"HOLAaaa"}
            color={"green"}
            position={[5, 5, 0]}
            anchorX="center"
            anchorY="middle"
          />
          <Physics debug>
            <Respuesta
              color={"green"}
              mensaje={"hola"}
              onClick={""}
              posicion={[-4, 2, 4]}
              tamanio={[2, 0.5, 1]}
              type={isCorrect ? "fixed" : "dynamic"}
              isCorrect={""}
            />
            <Respuesta
              color={"green"}
              mensaje={"hola"}
              onClick={""}
              posicion={[-1.5, 2, 4]}
              tamanio={[2, 0.5, 1]}
              type={isCorrect ? "fixed" : "dynamic"}
              isCorrect={""}
            />
            <Respuesta
              color={"green"}
              mensaje={"hola"}
              onClick={""}
              posicion={[1, 2, 4]}
              tamanio={[2, 0.5, 1]}
              type={isCorrect ? "fixed" : "dynamic"}
              isCorrect={""}
            />
            <Respuesta
              color={"green"}
              mensaje={"hola"}
              onClick={""}
              posicion={[3.5, 2, 4]}
              tamanio={[2, 0.5, 1]}
              type={isCorrect ? "fixed" : "dynamic"}
              isCorrect={""}
            />
            <Island />
          </Physics>
        </Canvas>
      </div>
    </>
  );
};

export default Quiz;
