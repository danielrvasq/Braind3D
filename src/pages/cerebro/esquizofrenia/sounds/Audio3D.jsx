import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useThree } from "@react-three/fiber";
import { Html } from "@react-three/drei";

export function Audio3D({ activo }) {
  const listenerRef = useRef();
  const { scene, camera } = useThree();

  useEffect(() => {
    if (!activo) return;

    const listener = new THREE.AudioListener();
    camera.add(listener);
    listenerRef.current = listener;

    const playSound = (url, position) => {
      const sound = new THREE.PositionalAudio(listener);
      const audioLoader = new THREE.AudioLoader();
      audioLoader.load(url, (buffer) => {
        sound.setBuffer(buffer);
        sound.setRefDistance(2);
        sound.setLoop(false);
        sound.setVolume(1);
        sound.setMaxDistance(20);
        sound.position.set(...position);
        sound.play();
        scene.add(sound);

        sound.source.onended = () => {
          scene.remove(sound);
          sound.disconnect();
        };
      });
    };

    const handleKeyDown = (e) => {
      switch (e.key) {
        case "ArrowUp":
          playSound("/sounds/hola.mp3", [0, 2, 0]);
          break;
        case "ArrowDown":
          playSound("/sounds/hola2.mp3", [0, -2, 0]);
          break;
        case "ArrowLeft":
          playSound("/sounds/hola3.mp3", [-2, 0, 0]);
          break;
        case "ArrowRight":
          playSound("/sounds/hola4.mp3", [2, 0, 0]);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activo, camera, scene]);

  return (
    <>
      {activo && (
        <Html position={[-3, 2, 1]} distanceFactor={10}>
          <div
            style={{
              background: "rgba(0,0,0,0.7)",
              color: "white",
              padding: "8px 12px",
              borderRadius: "8px",
              fontSize: "10px",
              width: "auto",
              textAlign: "center",
            }}
          >
            utiliza las flechas del teclado para escuchar sonidos
          </div>
        </Html>
      )}
    </>
  );
}
