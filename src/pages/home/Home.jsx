import { useNavigate } from "react-router";
import "./Home.css";
import { useCallback } from "react";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate("/cerebro", {
      state: { userData: { displayName: "Daniel Rueda" } },
    });
  }, [navigate]);

  return (
    <div className="contenedor">
      <h1 id="h1">Bienvenido A Braind3D</h1>
      <button onClick={handleClick} type="button" class="btn-primary">
        Ver más enfermedades
      </button>
    </div>
  );
};

export default Home;
