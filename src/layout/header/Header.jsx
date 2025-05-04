import { NavLink } from "react-router-dom";
import "./Header.css";
import useAuthStore from "../../stores/use-auth-store";
import { useNavigate } from "react-router";
import { useCallback } from "react";
const Header = () => {
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

  const { userLooged, loginGoogleWhithPopup, logout } = useAuthStore();
  const handleClick = async () => {
    if (userLooged) {
      await logout()
        .then(() => navigate("/"))
        .catch(() => navigate("/"));
    } else {
      await loginGoogleWhithPopup()
        .then(() => navigate("/perfil"))
        .catch(() => navigate("/"));
    }
    [loginGoogleWhithPopup, navigate];
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
          <NavLink className="link" to="/" end>
            Inicio
          </NavLink>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              id="dropdown-button"
            >
              Enfermedades
            </button>
            <ul className="dropdown-menu">
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
          </div>

          <NavLink className="link" to="/aboutUs" end>
            Sobre Nosotros
          </NavLink>
          <NavLink className="link" to="/quiz" end>
            Quiz
          </NavLink>
          <button
            className="link-button"
            type="button"
            title="Continuar con Google"
            onClick={handleClick}
          >
            <img src="images/iconoGoogle.png" id="icono" />
            {userLooged ? "Cerrar Sesión" : "Iniciar Sesión"}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
