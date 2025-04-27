import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header id="header">
      <nav id="navegacion">
        <div id="logo-div">
          <NavLink to="/" end>
            <img id="logo-nav" src="isotipoHtml.png" />
          </NavLink>
        </div>
        <div id="links">
          <NavLink className="link" to="/" end>
            <img src="images/iconoGoogle.png" id="icono" />
            Iniciar/Registrarse
          </NavLink>

          <NavLink className="link" to="/" end>
            <img src="images/iconoHome.png" id="icono" />
            Inicio
          </NavLink>

          <NavLink className="link" to="/quiz" end>
            <img src="images/iconoQuiz.png" id="icono" />
            Quiz
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
