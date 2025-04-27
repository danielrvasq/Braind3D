import "./Esquizofrenia.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import People from "./models-3d/people";

const Esquizofrenia = () => {

  return(
    <Canvas camera={{ 
      position: [2, 0, 5], 
      }}>
      <OrbitControls />
      <ambientLight intensity={1.5} />
      <directionalLight position={[5, 5, 10]} intensity={2} />
      <People />
    </Canvas>
  )
};

export default Esquizofrenia;
