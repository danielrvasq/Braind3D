import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Html } from "@react-three/drei";

const keys = {}; // Objeto global para almacenar teclas presionadas

const Cat = ({ activo = false, ...props }) => {
  const { nodes, materials } = useGLTF("/models-3d/cat.glb");
  const catRef = useRef();

  useEffect(() => {
    const handleKeyDown = (e) => {
      keys[e.key] = true;
    };

    const handleKeyUp = (e) => {
      keys[e.key] = false;
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useFrame(() => {
    if (!catRef.current || !activo) return;

    if (keys["ArrowRight"]) catRef.current.position.z -= 0.05;
    if (keys["ArrowLeft"]) catRef.current.position.z += 0.05;
    if (keys["ArrowDown"]) catRef.current.position.x -= 0.05;
    if (keys["ArrowUp"]) catRef.current.position.x += 0.05;
  });

  // Reproducir sonido al hacer clic
  const handleClick = () => {
    const audio = new Audio("/sounds/miau.mp3");
    audio.play();
  };

  return (
    <group ref={catRef} {...props} dispose={null}>
      <mesh
        geometry={nodes.Mesh_0.geometry}
        material={materials.Material_0}
        castShadow
        receiveShadow
        scale={0.2}
        position={[0, -1, 0]}
        onClick={handleClick} // <--- sonido al hacer clic
      />
      {activo && (
        <Html position={[2.3, 2, 3]} distanceFactor={10}>
          <div
            style={{
              background: "rgba(0,0,0,0.7)",
              color: "white",
              padding: "4px 8px",
              borderRadius: "10px",
              fontSize: "8px",
              Width: "250px",
            }}
          >
            Usa las flechas para mover el gato
            y haz clic sobre él para que maúlle.
          </div>
        </Html>
      )}
    </group>
  );
};

export default Cat;
useGLTF.preload("/models-3d/cat.glb");
