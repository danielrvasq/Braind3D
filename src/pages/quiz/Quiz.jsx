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
  const uid = userLooged?.uid;
  const db = getFirestore();

  const handleNext = async () => {
  if (!selectedOption) return alert("Selecciona una opción");

  const updatedAnswers = [...userAnswers, selectedOption];
  setUserAnswers(updatedAnswers);
  setSelectedOption("");

  if (currentIndex < questions.length - 1) {
    setCurrentIndex(currentIndex + 1);
  } else {
    const respuestasFinales = {
      nombre: userLooged?.displayName,
      respuestas: updatedAnswers,
      timestamp: new Date()
    };

    try {
      await setDoc(doc(db, "respuestasQuiz", userLooged.uid), respuestasFinales);
      console.log("Respuestas guardadas correctamente para:", userLooged.uid);
    } catch (error) {
      console.error("Error al guardar respuestas:", error);
    }
  }
};


  const progress = Math.round(((currentIndex + 1) / questions.length) * 100);

  return (
    <div id="contenedor">
      <h1 id="titulo">QUIZ</h1>
      <p>{uid ? `UID del usuario: ${uid}` : "No has iniciado sesión"}</p>
      <span>Progreso del quiz: {progress} %</span>

      <div className="pregunta">
        <h3>{questions[currentIndex].question}</h3>
        {questions[currentIndex].options.map((option) => (
          <label key={option}>
            <input
              type="radio"
              name="option"
              value={option}
              checked={selectedOption === option}
              onChange={() => setSelectedOption(option)}
            />
            {option}
          </label>
        ))}
      </div>

      <button onClick={handleNext} className="btn-primary" id="boton">
        Siguiente
      </button>
    </div>
  );
};

export default Quiz;
