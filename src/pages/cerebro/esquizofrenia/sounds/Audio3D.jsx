import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useThree } from "@react-three/fiber";
export function Audio3D({ activo }) {
  const listenerRef = useRef();
  const { camera, scene } = useThree()
  useEffect(() => {
    
  if (!activo) return; // ⛔ Si no está activo, no agregar listeners

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
}, [activo]); // <- se reactiva cuando 'activo' cambie

}
