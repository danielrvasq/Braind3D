import { useState } from "react";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { db } from "../../../firebase.config";
import { auth } from "../../../firebase.config";
import useAuthStore from "../../stores/use-auth-store";
import questions from "../../data/questions";
import "./Quiz.css";
const Quiz = () => {
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
  );
};

export default Quiz;
