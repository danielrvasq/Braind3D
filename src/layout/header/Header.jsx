import { NavLink } from "react-router";
import "./Header.css";

const Header = () => {
  return (
    <header id="header">
      <nav id="navegacion">
        <div id="logo-div">
          <a href="/">
            <img id="logo-nav" src="isotipoHtml.png" />
          </a>
        </div>
        <div id="links">
          {/* -------------------------------------------------------------- */}
          <NavLink className="link" to="/" end>
            <a href="/">
              <img src="images/iconoGoogle.png" id="icono" />
            </a>
            Iniciar/Registrarse
          </NavLink>
          {/* -------------------------------------------------------------- */}
          <NavLink className="link" to="/" end>
            <a href="/">
              <img src="images/iconoHome.png" id="icono" />
            </a>
            Inicio
          </NavLink>
          {/* -------------------------------------------------------------- */}
          <NavLink className="link" to="/quiz" end>
            <a href="/quiz">
              <img src="images/iconoQuiz.png" id="icono" />
            </a>
            Quiz
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
