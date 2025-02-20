import { Link } from "react-router";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Link className="link-f" to="/cerebro/huntington">
        Enfermedad De Huntington
      </Link>
      <Link className="link-f" to="/cerebro/alzheimer">
        Alzheimer
      </Link>
      <Link className="link-f" to="/cerebro/bipolaridad">
        Bipolaridad
      </Link>
      <Link className="link-f" to="/cerebro/esquizofrenia">
        Esquizofrenia
      </Link>
    </footer>
  );
};

export default Footer;
