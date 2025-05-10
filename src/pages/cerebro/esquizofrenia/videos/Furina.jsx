import * as THREE from "three";
import { useRef, useState } from "react";

export function Furina() {
  const meshRef = useRef();
  const videoRef = useRef(null);
  const [texture, setTexture] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {
    if (!videoRef.current) {
      // Crear video solo la primera vez
      const vid = document.createElement("video");
      vid.src = "/videos/furina_480.mp4";
      vid.crossOrigin = "anonymous";
      vid.loop = true;
      vid.playsInline = true;

      const videoTexture = new THREE.VideoTexture(vid);
      setTexture(videoTexture);
      videoRef.current = vid;

      vid.play();
      setIsPlaying(true);
    } else {
      // Reproducir o pausar si ya está creado
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <mesh
      ref={meshRef}
      position={[0, 0.5, 1.48]}
      rotation={[0, Math.PI, 0]}
      onClick={handleClick} // Solo responde a clics sobre el plano
    >
      <planeGeometry args={[0.8, 0.8]} />
      {texture && <meshBasicMaterial map={texture} toneMapped={false} />}
    </mesh>
  );
}
