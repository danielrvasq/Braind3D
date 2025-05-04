const Piso = () => {
  return (
    <mesh rotation-x={-Math.PI / 2}>
      <circleGeometry args={[4, 32]} />
      <meshStandardMaterial roughness={0.8} metalness={1} />
    </mesh>
  );
};
export default Piso;