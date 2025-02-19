import { Link } from "react-router";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Link className="link" to="/cerebro/huntington">
        Enfermedad De Huntington
      </Link>
      <Link className="link" to="/cerebro/alzheimer">
        Alzheimer
      </Link>
      <Link className="link" to="/cerebro/bipolaridad">
        Bipolaridad
      </Link>
      <Link className="link" to="/cerebro/esquizofrenia">
        Esquizofrenia
      </Link>
    </footer>
  );
};

export default Footer;
