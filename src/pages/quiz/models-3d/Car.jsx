import React, { useRef, useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { cameraPosition } from "three/webgpu";

export function Car(props) {
  const container = useRef();

  const { nodes, materials } = useGLTF("/models-3d/Car.glb");
  const ref = useRef();
  const keys = useRef({});
  const velocityRef = useRef(0); // velocidad actual

  const maxSpeed = 40;
  const acceleration = 60; // cuanto sube por segundo
  const deceleration = 50; // cuanto baja por segundo
  const turnSpeed = 2;

  useEffect(() => {
    const down = (e) => (keys.current[e.key.toLowerCase()] = true);
    const up = (e) => (keys.current[e.key.toLowerCase()] = false);
    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
    };
  }, []);

  useFrame((state, delta) => {
    const body = ref.current;
    if (!body) return;

    body.wakeUp();

    const forward = keys.current["w"];
    const backward = keys.current["s"];
    const left = keys.current["a"];
    const right = keys.current["d"];

    // 1. Aumentar o disminuir velocidad actual
    if (forward) {
      velocityRef.current += acceleration * delta;
    } else if (backward) {
      velocityRef.current -= acceleration * delta;
    } else {
      // Desacelerar
      if (velocityRef.current > 0) {
        velocityRef.current -= deceleration * delta;
        if (velocityRef.current < 0) velocityRef.current = 0;
      } else if (velocityRef.current < 0) {
        velocityRef.current += deceleration * delta;
        if (velocityRef.current > 0) velocityRef.current = 0;
      }
    }

    // Limitar velocidad máxima
    velocityRef.current = Math.max(
      -maxSpeed,
      Math.min(maxSpeed, velocityRef.current)
    );

    // 2. Dirección hacia adelante basada en rotación
    const quat = body.rotation();
    const orientation = new THREE.Quaternion(quat.x, quat.y, quat.z, quat.w);
    const forwardVec = new THREE.Vector3(0, 0, -1).applyQuaternion(orientation);

    const velocity = forwardVec.clone().multiplyScalar(velocityRef.current);
    velocity.y = 0;
    body.setLinvel(velocity, true);

    // 3. Rotación mientras se mueve
    let angularVelocity = 0;
    if (velocityRef.current !== 0) {
      if (left) angularVelocity += turnSpeed;
      if (right) angularVelocity -= turnSpeed;
    }
    body.setAngvel(new THREE.Vector3(0, angularVelocity, 0), true);
  });

  return (
    <RigidBody
      ref={ref}
      colliders="cuboid"
      friction={1.5}
      restitution={0.3}
      position={[0, 0.5, 0]}
      linearDamping={1.5}
      angularDamping={4}
    >
      <group {...props} dispose={null} scale={10} rotation={[0, Math.PI, 0]}>
        <group position={[0, 0, 3]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane009.geometry}
            material={materials["Main Color 7"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane009_1.geometry}
            material={materials.Light}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane009_2.geometry}
            material={materials.Glass}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane009_3.geometry}
            material={materials["Back Light"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane009_4.geometry}
            material={materials.Matle}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle006.geometry}
            material={materials.Tire}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle006_1.geometry}
            material={materials.Matle}
          />
        </group>
      </group>
    </RigidBody>
  );
}

useGLTF.preload("/models-3d/Car.glb");

export default Car;
