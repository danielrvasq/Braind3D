import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useHelper } from '@react-three/drei'
import { SpotLightHelper, PointLightHelper } from 'three'

const Ligths3 = ({ debug = false }) => {
  const spotLightRef = useRef()
  const pointLightRef = useRef()
  const [pulseSpeed] = useState(2)
  let pulseFactor = 0

  // Animación de pulsación
  useFrame(({ clock }) => {
    pulseFactor = Math.sin(clock.elapsedTime * pulseSpeed) * 0.5 + 0.8
    pointLightRef.current.intensity = pulseFactor * 15
    pointLightRef.current.color.setHSL(
        Math.sin(clock.elapsedTime * 0.5) * 0.1 + 0.55,
        0.8,
        0.6
    )
  })

  if (debug) {
    useHelper(spotLightRef, SpotLightHelper, 'cyan')
    useHelper(pointLightRef, PointLightHelper, 1, 'hotpink')
  }

  return (
    <>
      {/* Luz principal con efecto de neón */}
      <spotLight
        ref={spotLightRef}
        position={[5, 8, 2]}
        angle={Math.PI / 6}
        penumbra={0.5}
        intensity={80}
        color="#00ffff"
        castShadow
        shadow-mapSize={[2048, 2048]}
      />

      {/* Luz pulsante RGB */}
      <pointLight
        ref={pointLightRef}
        position={[0, 3, 0]}
        intensity={15}
        distance={10}
        decay={1.5}
      />

      {/* Tira de LED virtual */}
      <rectAreaLight
        width={8}
        height={0.2}
        intensity={30}
        color="#ff00ff"
        position={[0, 1, -2]}
        rotation={[-Math.PI / 2, 0, 0]}
      />

      {/* Efecto de luz ambiental gradiente */}
      <ambientLight intensity={0.3}>
        <color attach="color" args={['#330033']} />
      </ambientLight>

      {/* Volumetric light (necesitas fog en tu escena) */}
      <fog attach="fog" args={['#110022', 5, 15]} />
    </>
  );
};

export default Ligths3;