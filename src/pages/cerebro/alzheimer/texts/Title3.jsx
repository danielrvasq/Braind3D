import { Html } from "@react-three/drei";
import { Text3D } from "@react-three/drei";
import "./Title3.css";

const Title3 = ({ title }) => {
  return (
    <Html
      center
      position={[0, -1.5, 0]}
      transform
      distanceFactor={5}
      wrapperClass="title"
    >
      <h1>{title}</h1>
    </Html>
  );
};

export default Title3;