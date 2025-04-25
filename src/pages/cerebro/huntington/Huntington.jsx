import { Canvas } from "@react-three/fiber";
import "./Huntington.css";
import { OrbitControls } from "@react-three/drei";
import Brain from "../models-3d/Brain";

const Huntington = () => {
  return (
    <Canvas camera={{ position: [2, 0, 5] }}>
      <OrbitControls />
      <ambientLight intensity={1.5} />
      <directionalLight position={[5, 5, 10]} intensity={2} />
      {/* <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="purple" />
      </mesh> */}
      <Brain />
    </Canvas>
  );
};

export default Huntington;
