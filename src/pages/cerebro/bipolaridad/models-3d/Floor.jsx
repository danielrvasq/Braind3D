export default function Floor() {
  return (
    <mesh
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -1.2, 0]} // más bajo para que el cerebro no lo tape
      receiveShadow
    >
      <planeGeometry args={[30, 30]} />
      <meshStandardMaterial color="#eeeeee" /> {/* Piso gris claro */}
    </mesh>
  );
}
