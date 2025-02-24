import { NavLink } from "react-router";
import "./Header.css";

const Header = () => {
  return (
    <header id="header">
      <nav id="navegacion">
        <div id="logo-div">
          <a href="/">
            <img id="logo-nav" src="isotipoHtml.svg" />
          </a>
        </div>
        <div id="links">
          <NavLink className="link" to="/" end>
            Inicio
          </NavLink>
          <NavLink className="link" to="/quiz" end>
            Quiz
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
