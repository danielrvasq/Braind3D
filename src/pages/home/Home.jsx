import { useNavigate } from "react-router";
import "./Home.css";
import { useCallback } from "react";

const Home = () => {
  const navigate = useNavigate();

  /*-------------------------------------------------------------------------------------- */
  const huntington = useCallback(() => {
    navigate("/cerebro/huntington", {
      state: { userData: { displayName: "" } },
    });
  }, [navigate]);
  /*-------------------------------------------------------------------------------------- */
  const alzheimer = useCallback(() => {
    navigate("/cerebro/alzheimer", {
      state: { userData: { displayName: "" } },
    });
  }, [navigate]);
  /*-------------------------------------------------------------------------------------- */
  const bipolaridad = useCallback(() => {
    navigate("/cerebro/bipolaridad", {
      state: { userData: { displayName: "" } },
    });
  }, [navigate]);
  /*-------------------------------------------------------------------------------------- */
  const esquizofrenia = useCallback(() => {
    navigate("/cerebro/esquizofrenia", {
      state: { userData: { displayName: "" } },
    });
  }, [navigate]);

  return (
    <>
      <section id="section1">
        <div id="contenido">
          <p id="texto-super">Software 3D</p>
          <h1 id="titulo">BRAIND3D</h1>
          <p id="texto">
            En esta web, exploraremos diversas enfermedades mentales y
            trastornos del cerebro, comprendiendo sus causas, síntomas y
            tratamientos. Nuestro objetivo es informar y concientizar sobre la
            importancia de la salud mental, eliminando estigmas y promoviendo el
            bienestar. Acompáñanos en este viaje de aprendizaje y descubre más
            sobre el funcionamiento de la mente.
          </p>
          <a href="#section2">
            <button /*onClick={handleClick} */ type="button" id="boton-h">
              Conocer Las Enfermedades
            </button>
          </a>
        </div>
        <div>
          <img id="imagen" src="images/doctora.jpg" />
        </div>
      </section>
      <div id="section2">
        <img id="imagen2" src="images/doctora.jpg" />
        <div id="contenido2">
          <h1 id="titulo2">HUNTINGTON</h1>

          <button onClick={huntington} type="button" id="boton-h2">
            Saber Más
          </button>
        </div>
      </div>
      <div id="section3">
        <div id="contenido3">
          <h1 id="titulo3">ALZHEIMER</h1>
          <button onClick={alzheimer} type="button" id="boton-h3">
            Saber Más
          </button>
        </div>
        <img id="imagen3" src="images/doctora.jpg" />
      </div>
      <div id="section2">
        <img id="imagen2" src="images/doctora.jpg" />
        <div id="contenido2">
          <h1 id="titulo2">BIPOLARIDAD</h1>
          <button onClick={bipolaridad} type="button" id="boton-h2">
            Saber Más
          </button>
        </div>
      </div>
      <div id="section3">
        <div id="contenido3">
          <h1 id="titulo3">ESQUIZOFRENIA</h1>
          <button onClick={esquizofrenia} type="button" id="boton-h3">
            Saber Más
          </button>
        </div>
        <img id="imagen3" src="images/doctora.jpg" />
      </div>
    </>
  );
};

export default Home;

{
  /* <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              id="dropdown-button"
            >
              Conoce las enfermedades
            </button>
            <ul class="dropdown-menu">
              <li>
                <button onClick={huntington} type="button" id="button-list">
                  huntington
                </button>
              </li>
              <li>
                <button onClick={alzheimer} type="button" id="button-list">
                  alzheimer
                </button>
              </li>
              <li>
                <button onClick={bipolaridad} type="button" id="button-list">
                  bipolaridad
                </button>
              </li>
              <li>
                <button onClick={esquizofrenia} type="button" id="button-list">
                  esquizofrenia
                </button>
              </li>
            </ul>
          </div> */
}
