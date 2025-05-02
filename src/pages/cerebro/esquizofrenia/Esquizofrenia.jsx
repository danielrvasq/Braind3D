import "./Esquizofrenia.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
//import People from "./models-3d/people";
import Boy from "./models-3d/Boy";
import Title from "./texts/Title";
import Piso from "./models-3d/Piso";
//import Light from "./lights/Lights";
const Esquizofrenia = () => {
  return(
    <Canvas camera={{ 
      position: [0, 1, 3], 
      }}>
      <OrbitControls target = {[0,1,0]}/>
      <ambientLight intensity={1.5} />
      <directionalLight position={[5, 5, 10]} intensity={2} />
      {/*<People />*/}
      <Boy />
      <Piso/>
      {/*<Light/>*/}      
      <Title title={"esquizofrenia"}/>
    </Canvas>
  )
};

export default Esquizofrenia;
