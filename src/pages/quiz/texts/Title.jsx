import { Html } from "@react-three/drei";
import "./Title.css";

const Title = ({ text, position = [0, 5, 0] }) => {
  return (
    <Html position={position} transform occlude>
      <div className="title-2d">{text}</div>
    </Html>
  );
};

export default Title;
