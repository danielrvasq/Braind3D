/* eslint-disable react/no-unknown-property */
import { useGLTF, useHelper } from "@react-three/drei";
import { useRef } from "react";
import {  SpotLightHelper } from "three";

export function Room(props) {
  const { nodes, materials } = useGLTF("/models-3d/Room.glb");
  const spotLightRef = useRef();
  useHelper(spotLightRef, SpotLightHelper, 2, "cyan");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Room.geometry}
        material={materials.Building}
        position={[0, 0.411, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sofa.geometry}
        material={materials.Sofa}
        position={[-0.023, 0.611, 2.575]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Television.geometry}
        material={materials.TV}
        position={[-0.28, 3.631, -3.878]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tv_Cabinet.geometry}
        material={materials.Cabinet}
        position={[0.028, 0.411, -3.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Television001.geometry}
        material={materials.TVBacklight}
        position={[-0.28, 3.631, -3.878]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1.967, 1.124, 1.124]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane022.geometry}
        material={materials.Soundbar}
        position={[1.996, 1.782, -3.776]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_Frame.geometry}
        material={materials["Wall Frame"]}
        position={[-4, 3.335, -0.763]}
        rotation={[1.571, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials.Dvd}
        position={[-0.063, 0.642, -3.27]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials.Led}
        position={[-0.542, 1.502, -3.376]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.161}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["1"].geometry}
        material={materials.Plant}
        position={[3.367, 1.125, -3.448]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["1001"].geometry}
        material={materials.Guitar}
        position={[-3.273, 1.667, -3.134]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials.Lamp}
        position={[-3.991, 4.441, 2.095]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={1.091}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text.geometry}
        material={materials.Clock}
        position={[-2.054, 1.316, -3.16]}
        rotation={[0.787, 0.26, -0.253]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Book4009.geometry}
        material={materials.Book}
        position={[-2.067, 0.604, -2.987]}
      />
      <spotLight
        ref={spotLightRef}
        color={"white"}
        position={[4, 2, -2]}
        distance={6}
        intensity={100}
        angle={Math.Pi / 14}
        penumbra={1}
      />
    </group>
  );
}

export default Room;
useGLTF.preload("/models-3d/Room.glb");
