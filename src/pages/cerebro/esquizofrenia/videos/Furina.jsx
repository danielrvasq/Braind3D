import * as THREE from "three";
import { useEffect, useRef, useState } from "react";

export function Furina() {
  const meshRef = useRef();
  const [texture, setTexture] = useState(null);

  useEffect(() => {
    const vid = document.createElement("video");
    vid.src = "/videos/furina_480.mp4";
    vid.crossOrigin = "anonymous";
    vid.loop = true;
    vid.playsInline = true;
  
    // Esto se activa solo tras una interacción del usuario
    const playVideo = () => {
      vid.play();
      const videoTexture = new THREE.VideoTexture(vid);
      setTexture(videoTexture);
      window.removeEventListener("click", playVideo);
    };
  
    window.addEventListener("click", playVideo); // usuario debe hacer clic
  }, []);
  

  return (
    <mesh ref={meshRef} position={[0, 0.5, 1.48 ]} rotation={[0, Math.PI , 0]}>
      <planeGeometry args={[0.8, 0.8]} />
      {texture && <meshBasicMaterial map={texture} toneMapped={false} />}
    </mesh>
  );
}