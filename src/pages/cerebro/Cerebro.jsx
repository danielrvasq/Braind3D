import { Outlet } from "react-router";
import "./Cerebro.css";

const Cerebro = () => {
  return (
    // <div id="contenido">
    //   <div id="card">
    //     <img id="imagen" src="images/doctora.jpg" />
    //     <div class="card-body" id="cuerpo-tarjeta">
    //       <h5 id="card-title">HUNTINGTON</h5>
    //       <p id="card-text">
    //         Trastorno hereditario neurodegenerativo
    //         <br />
    //         (img de referencia)
    //       </p>
    //     </div>
    //   </div>
    //   <div id="card">
    //     <img id="imagen" src="images/doctora.jpg" />
    //     <div id="card-body">
    //       <h5 id="card-title">ALZHEIMER</h5>
    //       <p id="card-text">
    //         Pérdida de memoria progresiva
    //         <br />
    //         (img de referencia)
    //       </p>
    //     </div>
    //   </div>
    //   <div id="card">
    //     <img id="imagen" src="images/doctora.jpg" />
    //     <div id="card-body">
    //       <h5 id="card-title">BIPOLARIDAD</h5>
    //       <p id="card-text">
    //         Cambios emocionales extremos
    //         <br />
    //         (img de referencia)
    //       </p>
    //     </div>
    //   </div>
    //   <div id="card">
    //     <img id="imagen" src="images/doctora.jpg" />
    //     <div id="card-body">
    //       <h5 id="card-title">ESQUIZOFRENIA</h5>
    //       <p id="card-text">
    //         Alucinaciones y pensamiento desorganizado <br />
    //         (img de referencia)
    //       </p>
    //     </div>
    //   </div>
    // </div>

    <div>
      <div className="div1">
        <Outlet />
      </div>
    </div>
  );
};

export default Cerebro;
