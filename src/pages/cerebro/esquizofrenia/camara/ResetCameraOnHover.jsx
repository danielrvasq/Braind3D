// ResetCameraOnHover.jsx
import { useThree } from '@react-three/fiber';
import { useEffect, useRef } from 'react';

export default function ResetCameraOnHover() {
  const { camera, gl, controls } = useThree();
  const containerRef = useRef();

  useEffect(() => {
    const domElement = gl.domElement;

    const handleMouseEnter = () => {
      camera.position.set(0, 1.2, 6.5);
      camera.lookAt(0, 0, 0);
      camera.updateProjectionMatrix();

      // Si usas OrbitControls desde drei, también resetea su target
      if (controls) {
        controls.target.set(0, 0, 0);
        controls.update();
      }
    };

    domElement.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      domElement.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [camera, gl, controls]);

  return null;
}
