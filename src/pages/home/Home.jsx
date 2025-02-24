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
    <section id="section">
      <div id="contenido">
        <p id="texto-super">Software 3D</p>
        <h1 id="titulo">BRAIND3D</h1>
        <p id="texto">
          En esta web, exploraremos diversas enfermedades mentales y <br />
          trastornos del cerebro, comprendiendo sus causas, síntomas y <br />
          tratamientos. Nuestro objetivo es informar y concientizar sobre <br />
          la importancia de la salud mental, eliminando estigmas y <br />
          promoviendo el bienestar. <br />
          Acompáñanos en este viaje de aprendizaje y descubre más <br /> sobre
          el funcionamiento de la mente.
        </p>
        <button onClick={handleClick} type="button" id="boton-h">
          Conocer Las Enfermedades
        </button>
      </div>
      <div>
        <img id="imagen" src="images/doctora.jpg" />
      </div>
    </section>
    // <div class="container text-center">
    //   <div class="row">
    //     <div class="col">
    //       <img id="imagen" src="src/assets/isotipoHtml.png" />
    //     </div>
    //     <div class="col" id="contenido">
    //       <h1 id="titulo">Bienvenido A Braind3D</h1>
    //       <h4 id="texto">
    //         En esta web, exploraremos diversas enfermedades mentales y
    //         trastornos del cerebro, comprendiendo sus causas, síntomas y
    //         tratamientos. Nuestro objetivo es informar y concienciar sobre la
    //         importancia de la salud mental, eliminando estigmas y promoviendo el
    //         bienestar. Acompáñanos en este viaje de aprendizaje y descubre más
    //         sobre el funcionamiento de la mente.{" "}
    //       </h4>
    //     </div>
    //     <div class="col">
    //       <button onClick={handleClick} type="button" className="btn-primary">
    //         Ver más enfermedades
    //       </button>
    //     </div>
    //   </div>
    // </div>
    // <div className="contenedor">
    //   <div className="card">
    //     <img src="src/assets/isotipoHtml.png" />
    //     <h1 id="h1">Bienvenido A Braind3D</h1>
    //     <button onClick={handleClick} type="button" className="btn-primary">
    //       Ver más enfermedades
    //     </button>
    //   </div>
    // </div>
  );
};

export default Home;
