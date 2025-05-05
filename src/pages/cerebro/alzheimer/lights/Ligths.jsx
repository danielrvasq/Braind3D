export default function Lights() {
  return (
    <>
      <spotLight
        // ref={spotLightRef}
        color={"white"}
        position={[0, 5, 5]}
        distance={100}
        intensity={500}
        angle={Math.PI / 10}
        penumbra={1}
        castShadow={true}
      />
    </>
  );
}