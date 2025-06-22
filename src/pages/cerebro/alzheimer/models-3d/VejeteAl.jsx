import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import * as THREE from 'three';

export function VejeteAl({ flow = false, ...props }) {
  const group = useRef();
  const { nodes, materials, animations: originalAnimations } = useGLTF('/models-3d/VejeteAl.glb');

  // 🧹 Limpiar tracks inválidos como en OldManAlz
  const animations = originalAnimations.map((clip) => {
    const filteredTracks = clip.tracks.filter(
      (track) =>
        !track.name.startsWith('Armature.position') &&
        !track.name.startsWith('Armature.quaternion') &&
        !track.name.startsWith('Armature.scale')
    );
    return new THREE.AnimationClip(clip.name, clip.duration, filteredTracks);
  });

  const { actions } = useAnimations(animations, group);

  useEffect(() => {
  if (!actions) return;

  Object.values(actions).forEach((a) => a.stop());

  if (flow && actions.Flow) {
    actions.Flow.reset().fadeIn(0.3).play();
  } else if (actions.Nervioso) {
    actions.Nervioso.reset().fadeIn(0.3).play();
  }
}, [flow, actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="vejete">
          <skinnedMesh
            name="EyeLeft"
            geometry={nodes.EyeLeft.geometry}
            material={materials['Wolf3D_Eye.001']}
            skeleton={nodes.EyeLeft.skeleton}
            morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
            morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
            castShadow
          />
          <skinnedMesh
            name="EyeRight"
            geometry={nodes.EyeRight.geometry}
            material={materials['Wolf3D_Eye.001']}
            skeleton={nodes.EyeRight.skeleton}
            morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
            morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
            castShadow
          />
          <skinnedMesh
            name="Wolf3D_Beard"
            geometry={nodes.Wolf3D_Beard.geometry}
            material={materials['Wolf3D_Beard.001']}
            skeleton={nodes.Wolf3D_Beard.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Beard.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Beard.morphTargetInfluences}
            castShadow
          />
          <skinnedMesh
            name="Wolf3D_Body"
            geometry={nodes.Wolf3D_Body.geometry}
            material={materials['Wolf3D_Body.001']}
            skeleton={nodes.Wolf3D_Body.skeleton}
            castShadow
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
            morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
            castShadow
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Bottom"
            geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
            material={materials['Wolf3D_Outfit_Bottom.001']}
            skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
            castShadow
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Footwear"
            geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
            material={materials['Wolf3D_Outfit_Top.001']}
            skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
            castShadow
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
            morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
            castShadow
          />
          <primitive object={nodes.Hips} />
        </group>
      </group>
    </group>
  );
}

export default VejeteAl;

useGLTF.preload('/models-3d/VejeteAl.glb');
