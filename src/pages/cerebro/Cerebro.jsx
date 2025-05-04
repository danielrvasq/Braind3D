import { Outlet } from "react-router";
import "./Cerebro.css";

const Cerebro = () => {
  return (
    <div>
      <div className="div1">
        <Outlet />
      </div>
    </div>
  );
};

export default Cerebro;
