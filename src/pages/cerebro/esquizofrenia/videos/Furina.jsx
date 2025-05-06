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
    vid.muted = true;
    vid.playsInline = true;
    vid.autoplay = true;

    vid.addEventListener("canplaythrough", () => {
      const videoTexture = new THREE.VideoTexture(vid);
      videoTexture.minFilter = THREE.LinearFilter;
      videoTexture.magFilter = THREE.LinearFilter;
      videoTexture.format = THREE.RGBFormat;
      setTexture(videoTexture);
      vid.play(); // asegurarse de que comience
    });

    return () => {
      vid.pause();
      vid.removeAttribute("src");
      vid.load();
    };
  }, []);

  return (
    <mesh ref={meshRef} position={[0, 0.5, 1.48 ]} rotation={[0, Math.PI , 0]}>
      <planeGeometry args={[0.8, 0.8]} />
      {texture && <meshBasicMaterial map={texture} toneMapped={false} />}
    </mesh>
  );
}