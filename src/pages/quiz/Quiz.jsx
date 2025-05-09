import { useState } from "react";
import useAuthStore from "../../stores/use-auth-store";
import questions from "../../data/questions";
import "./Quiz.css";

const Quiz = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const { userLooged } = useAuthStore();
  const uid = userLooged?.uid;

  const handleNext = async () => {
    if (!selectedOption) return alert("Selecciona una opción");

    const updatedAnswers = [...userAnswers, selectedOption];
    setUserAnswers(updatedAnswers);
    setSelectedOption("");

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      console.log("Quiz terminado. Respuestas:", updatedAnswers);
      
      if (!uid) {
        alert("No has iniciado sesión. No se pueden guardar los resultados.");
        return;
      }

      // Enviar al backend
      try {
        const res = await fetch("http://localhost:3001/api/quiz-results", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userId: uid,
            answers: updatedAnswers,
            score: calcularPuntaje(updatedAnswers), // si quieres agregar esto
          }),
        });

        const data = await res.json();
        console.log("Resultado guardado:", data);
      } catch (error) {
        console.error("Error al guardar resultado:", error);
      }
    }
  };

  const progress = Math.round(((currentIndex + 1) / questions.length) * 100);

  const calcularPuntaje = (respuestas) => {
    // Supongamos que la respuesta correcta está en questions[i].answer
    let puntos = 0;
    for (let i = 0; i < respuestas.length; i++) {
      if (respuestas[i] === questions[i].answer) puntos++;
    }
    return puntos;
  };

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
