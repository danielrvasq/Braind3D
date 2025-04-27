import { Link } from "react-router";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="contenedor-footer">
        <div className= "footer-links">
          <Link className="link-footer" to="/cerebro/huntington">
            Enfermedad De Huntington
          </Link>
          <Link className="link-footer" to="/cerebro/alzheimer">
            Alzheimer
          </Link>
          <Link className="link-footer" to="/cerebro/bipolaridad">
            Bipolaridad
          </Link>
          <Link className="link-footer" to="/cerebro/esquizofrenia">
            Esquizofrenia
          </Link>
        </div>
        <div className= "footer-copy">
          <ul>
            <li>
              &copy; 2025 - Todos los derechos reservados.{" "}
            </li>
          </ul>
        </div>  
      </div>
    </footer>
  );
};

export default Footer;
