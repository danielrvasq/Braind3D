import { Link } from "react-router";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <Link id="link" to="/cerebro/huntington">
        Enfermedad De Huntington
      </Link>
      <Link id="link" to="/cerebro/alzheimer">
        Alzheimer
      </Link>
      <Link id="link" to="/cerebro/bipolaridad">
        Bipolaridad
      </Link>
      <Link id="link" to="/cerebro/esquizofrenia">
        Esquizofrenia
      </Link>
    </footer>
  );
};

export default Footer;
