import { NavLink } from "react-router-dom";
import "./Header.css";
import useAuthStore from "../../stores/use-auth-store";
import { useNavigate } from "react-router";
import { useCallback } from "react";
const Header = () => {
  const { userLooged, loginGoogleWhithPopup, logout } = useAuthStore();
  const navigate = useNavigate();
  const handleClick = async () => {
    if (userLooged) {
      await logout()
      .then(() => navigate("/"))
      .catch(() => navigate("/"));
    } else {
      await loginGoogleWhithPopup()
      .then(() => navigate("/perfil"))
      .catch(() => navigate("/"));
    } [loginGoogleWhithPopup, navigate];
  };

  return (
    <header id="header">
      <nav id="navegacion">
        <div id="logo-div">
          <NavLink to="/" end>
            <img id="logo-nav" src="isotipoHtml.png" />
          </NavLink>
        </div>
        <div id="links">
          <button className="link-button" type="button" title="Continuar con Google" onClick={handleClick}> 
            <img src="images/iconoGoogle.png" id="icono" />
            {userLooged ? "Cerrar Sesión" : "Iniciar Sesión"}
          </button>

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
