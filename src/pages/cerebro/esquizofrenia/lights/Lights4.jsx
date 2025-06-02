import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

const Ligths4 = () => {
  const pointLight = useRef()
  
  // Animación sutil de respiración
  useFrame(({ clock }) => {
    pointLight.current.intensity = 5 + Math.sin(clock.elapsedTime * 2) * 2
  })

  return (
    <>
      {/* Luz principal cálida */}
      <pointLight
        ref={pointLight}
        position={[2, 3, 2]}
        color="#ffeebb"
        intensity={5}
        distance={10}
        decay={1}
      />

      {/* Luz fría de contraste */}
      <pointLight
        position={[-2, 2, -1]}
        color="#bbeeff"
        intensity={3}
        distance={8}
        decay={1.5}
      />

      {/* Luz ambiental suave */}
      <ambientLight intensity={0.3} color="#ffffff" />
    </>
  )
}

export default Ligths4;