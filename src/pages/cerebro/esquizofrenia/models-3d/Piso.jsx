const Piso = () => {
  return (
    <mesh
      rotation-x={-Math.PI / 2}
      receiveShadow
      position-y={-1}
    >
      <planeGeometry args={[10, 10]} />
      <meshStandardMaterial color="#444" roughness={0.9} metalness={0.1} />
    </mesh>
  );
};

export default Piso;