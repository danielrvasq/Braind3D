const Light = () => {
  return (
    <>
      <ambientLight colro={"#F5F5DC"} intensity={2} />
      <directionalLight color={"yellow"} position={[0, 5, 5]} intensity={2} />
    </>
  );
};

export default Light;
