import { Link } from "react-router";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Link to="/cerebro/huntington">Enfermedad De Huntington</Link>
      <Link to="/cerebro/alzheimer">Alzheimer</Link>
      <Link to="/cerebro/bipolaridad">Bipolaridad</Link>
      <Link to="/cerebro/esquizofrenia">Esquizofrenia</Link>
    </footer>
  );
};

export default Footer;
