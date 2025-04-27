import { useCallback } from "react";
import useQuizStore from "../../stores/use-quiz-store";
import "./Quiz.css";

const Quiz = () => {
  const { quiz, incrementQuizProgress } = useQuizStore();

  const handleQuizNext = useCallback(() => {
    incrementQuizProgress();
  }, [incrementQuizProgress]);

  return (
    <div id="contenedor">
      <h1 id="titulo">QUIZ</h1>
      <span>Progreso del quiz: {quiz.percentageQuizCompleted} % </span>
      <button onClick={handleQuizNext} class="btn-primary" id="boton">
        Siguiente
      </button>
    </div>
  );
};

export default Quiz;
