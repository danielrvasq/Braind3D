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
      <div className="card">
        <img src="src/assets/isotipoHtml.png" />
        <h1 id="h1">Bienvenido A Braind3D</h1>
        <button onClick={handleClick} type="button" className="btn-primary">
          Ver más enfermedades
        </button>
      </div>
    </div>
  );
};

export default Home;
