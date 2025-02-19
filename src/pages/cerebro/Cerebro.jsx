import { Outlet, useLocation } from "react-router";
import "./Cerebro.css";

const Cerebro = () => {
  const location = useLocation();
  const userData = location.state?.userData;

  return (
    <div>
      <h1>Enfermedades del Cerebro</h1>
      <p>{userData?.displayName}</p>
      <Outlet />
    </div>
  );
};

export default Cerebro;
