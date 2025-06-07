import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei'
import useOldmanStore from '../../../../stores/use-oldman-store';

export function OldManAlz({ walk = false, ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/models-3d/OldManAlz.glb');
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (!actions) return;

    Object.values(actions).forEach((action) => action.stop());

    if (walk && actions.Walk) {
      actions.Walk.reset().play();
    } else if (actions.Lost) {
      actions.Lost.reset().play();
    }

  }, [walk, actions]);

  //useEffect(() => {
    //  actions.Lost.play();
     //return ()=>{
      //  actions.Lost.stop();
      //};
    //}, [actions]);

    
  return (
    <group ref={group} {...props} dispose={null}>

      
      <group name="Scene">
        <group name="Scene"
        position={[0, -0.68, 0]}
        >

          <skinnedMesh
            name="EyeLeft"
            geometry={nodes.EyeLeft.geometry}
            material={materials['Wolf3D_Eye.005']}
            skeleton={nodes.EyeLeft.skeleton}
            castShadow
            onClick={()=> actions.Walk.play()}
          />
          <skinnedMesh
            name="EyeRight"
            geometry={nodes.EyeRight.geometry}
            material={materials['Wolf3D_Eye.005']}
            skeleton={nodes.EyeRight.skeleton}
            castShadow
            onClick={()=> actions.Walk.play()}
          />
          <skinnedMesh
            name="Wolf3D_Beard"
            geometry={nodes.Wolf3D_Beard.geometry}
            material={materials['Wolf3D_Beard.005']}
            skeleton={nodes.Wolf3D_Beard.skeleton}
            castShadow
            onClick={()=> actions.Walk.play()}
          />
          <skinnedMesh
            name="Wolf3D_Body"
            geometry={nodes.Wolf3D_Body.geometry}
            material={materials['Wolf3D_Body.005']}
            skeleton={nodes.Wolf3D_Body.skeleton}
            castShadow
            onClick={()=> actions.Walk.play()}
          />
          <skinnedMesh
            name="Wolf3D_Glasses"
            geometry={nodes.Wolf3D_Glasses.geometry}
            material={materials['Wolf3D_Glasses.005']}
            skeleton={nodes.Wolf3D_Glasses.skeleton}
            castShadow
            onClick={()=> actions.Walk.play()}
          />
          <skinnedMesh
            name="Wolf3D_Hair"
            geometry={nodes.Wolf3D_Hair.geometry}
            material={materials['Wolf3D_Hair.005']}
            skeleton={nodes.Wolf3D_Hair.skeleton}
            castShadow
            onClick={()=> actions.Walk.play()}
          />
          <skinnedMesh
            name="Wolf3D_Head"
            geometry={nodes.Wolf3D_Head.geometry}
            material={materials['Wolf3D_Skin.005']}
            skeleton={nodes.Wolf3D_Head.skeleton}
            castShadow
            onClick={()=> actions.Walk.play()}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Bottom"
            geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
            material={materials['Wolf3D_Outfit_Bottom.005']}
            skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
            castShadow
            onClick={()=> actions.Walk.play()}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Footwear"
            geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
            material={materials['Wolf3D_Outfit_Footwear.005']}
            skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
            castShadow
            onClick={()=> actions.Walk.stop()}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Top"
            geometry={nodes.Wolf3D_Outfit_Top.geometry}
            material={materials['Wolf3D_Outfit_Top.005']}
            skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
            castShadow
            onClick={()=> actions.Walk.play()}
          />
          <skinnedMesh
            name="Wolf3D_Teeth" 
            geometry={nodes.Wolf3D_Teeth.geometry}
            material={materials['Wolf3D_Teeth.005']}
            skeleton={nodes.Wolf3D_Teeth.skeleton}
            castShadow
            onClick={()=> actions.Walk.play()}
          />
          <primitive object={nodes.Hips} />
        </group>
      </group>
    </group>
  )
}

export default OldManAlz;
useGLTF.preload("/models-3d/OldManAlz.glb");