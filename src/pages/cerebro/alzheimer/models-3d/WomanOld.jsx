import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function WomanOld({ thinking = false, ...props }) {
  const group = useRef();
  const audioRef = useRef(null); // 🔊 referencia del audio

  const { nodes, materials, animations } = useGLTF("/models-3d/WomanOld.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/sounds/no te conozco.mp3");
      audioRef.current.loop = true; // se repite mientras piense
      audioRef.current.volume = 0.7;
    }

    if (!actions) return;

    Object.values(actions).forEach((a) => a.stop());

    if (thinking && actions.pensar) {
      actions.pensar.reset().play();
      audioRef.current.play().catch(err => {
        console.warn("No se pudo reproducir el audio:", err);
      });
    } else {
      if (actions.respirar) actions.respirar.play(); // opcional: animación base
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, [thinking, actions]);
  
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Scene"
        position={[0, -0.72, 0]}>
          <skinnedMesh
            name="EyeLeft"
            geometry={nodes.EyeLeft.geometry}
            material={materials['Wolf3D_Eye.001']}
            skeleton={nodes.EyeLeft.skeleton}
            castShadow
          />
          <skinnedMesh
            name="EyeRight"
            geometry={nodes.EyeRight.geometry}
            material={materials['Wolf3D_Eye.001']}
            skeleton={nodes.EyeRight.skeleton}
            castShadow
          />
          <skinnedMesh
            name="Wolf3D_Body"
            geometry={nodes.Wolf3D_Body.geometry}
            material={materials['Wolf3D_Body.001']}
            skeleton={nodes.Wolf3D_Body.skeleton}
            castShadow
            onClick={()=> actions.respirar.play()}
          />
          <skinnedMesh
            name="Wolf3D_Glasses"
            geometry={nodes.Wolf3D_Glasses.geometry}
            material={materials['Wolf3D_Glasses.001']}
            skeleton={nodes.Wolf3D_Glasses.skeleton}
            castShadow
          />
          <skinnedMesh
            name="Wolf3D_Hair"
            geometry={nodes.Wolf3D_Hair.geometry}
            material={materials['Wolf3D_Hair.001']}
            skeleton={nodes.Wolf3D_Hair.skeleton}
            castShadow
          />
          <skinnedMesh
            name="Wolf3D_Head"
            geometry={nodes.Wolf3D_Head.geometry}
            material={materials['Wolf3D_Skin.001']}
            skeleton={nodes.Wolf3D_Head.skeleton}
            castShadow
            onClick={()=> actions.pensar.play()}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Bottom"
            geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
            material={materials['Wolf3D_Outfit_Bottom.001']}
            skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
            castShadow
            onClick={()=> actions.respirar.play()}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Footwear"
            geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
            material={materials['Wolf3D_Outfit_Footwear.001']}
            skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
            castShadow
            onClick={()=> actions.respirar.play()}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Top"
            geometry={nodes.Wolf3D_Outfit_Top.geometry}
            material={materials['Wolf3D_Outfit_Top.001']}
            skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
            castShadow
          />
          <skinnedMesh
            name="Wolf3D_Teeth"
            geometry={nodes.Wolf3D_Teeth.geometry}
            material={materials['Wolf3D_Teeth.002']}
            skeleton={nodes.Wolf3D_Teeth.skeleton}
            castShadow
          />
          <primitive object={nodes.Hips} />
        </group>
      </group>
    </group>
  )
}

export default WomanOld;
useGLTF.preload('/models-3d/WomanOld.glb')