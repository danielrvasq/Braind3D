import { NavLink } from "react-router";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <a href="/">
          <img id="logo-nav" src="src/assets/isotipoHtml.png" />
        </a>
        <NavLink className="link" to="/" end>
          Inicio
        </NavLink>
        <NavLink className="link" to="/quiz" end>
          Quiz
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
