import { useEffect, useRef } from "react";

const Saludo1 = () => {
  const audioRef = useRef(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/sounds/saludo1.mp3" preload="auto" />
    </>
  );
};

export default Saludo1;
