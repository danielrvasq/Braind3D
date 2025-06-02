import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

// Componente funcional del modelo OldMan
export function OldMan({ startAnimation, stopAnimation, ...props }) {
  const group = useRef();

  const { nodes, materials, animations } = useGLTF("/models-3d/oldMan.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    const firstAction = actions?.[animations[0]?.name];

    if (firstAction) {
      if (startAnimation) {
        firstAction.reset().fadeIn(0.3).play();
      } else if (stopAnimation) {
        firstAction.fadeOut(0.3).stop();
      }
    }
  }, [startAnimation, stopAnimation, actions, animations]);

  return (
    <>
      <group ref={group} {...props} dispose={null}>
        <group name="Scene">
          <group
            name="mixamorigMeshes"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          />
          <group
            name="Armature"
            rotation={[Math.PI / 2, 0, 0]}
            position={[0, -1, 0]}
            scale={0.01}
          >
            <skinnedMesh
              name="mixamorigArms_Geo"
              castShadow
              geometry={nodes.mixamorigArms_Geo.geometry}
              material={materials.Skin_MAT}
              skeleton={nodes.mixamorigArms_Geo.skeleton}
            />
            {/* Meshes animadas del modelo */}
            <skinnedMesh
              name="mixamorigArms_Geo"
              castShadow
              geometry={nodes.mixamorigArms_Geo.geometry}
              material={materials.Skin_MAT}
              skeleton={nodes.mixamorigArms_Geo.skeleton}
            />

            <skinnedMesh
              name="mixamorigCigar_Geo"
              castShadow
              geometry={nodes.mixamorigCigar_Geo.geometry}
              material={materials.Cigar_Mat}
              skeleton={nodes.mixamorigCigar_Geo.skeleton}
            />
            <skinnedMesh
              name="mixamorigHat_Geo"
              castShadow
              geometry={nodes.mixamorigHat_Geo.geometry}
              material={materials["Clothes_MAT.001"]}
              skeleton={nodes.mixamorigHat_Geo.skeleton}
            />
            <skinnedMesh
              name="mixamorigHead_Geo"
              castShadow
              geometry={nodes.mixamorigHead_Geo.geometry}
              material={materials.Skin_MAT}
              skeleton={nodes.mixamorigHead_Geo.skeleton}
            />
            <skinnedMesh
              name="mixamorigJacket_Geo"
              castShadow
              geometry={nodes.mixamorigJacket_Geo.geometry}
              material={materials.Clothes_MAT}
              skeleton={nodes.mixamorigJacket_Geo.skeleton}
            />
            <skinnedMesh
              name="mixamorigL_Eye_Geo"
              castShadow
              geometry={nodes.mixamorigL_Eye_Geo.geometry}
              material={materials["Eyes_MAT.001"]}
              skeleton={nodes.mixamorigL_Eye_Geo.skeleton}
            />
            <skinnedMesh
              name="mixamorigArms_Geo"
              castShadow
              geometry={nodes.mixamorigArms_Geo.geometry}
              material={materials.Skin_MAT}
              skeleton={nodes.mixamorigArms_Geo.skeleton}
            />
            <skinnedMesh
              name="mixamorigPants_Geo"
              castShadow
              geometry={nodes.mixamorigPants_Geo.geometry}
              material={materials["Clothes_MAT.001"]}
              skeleton={nodes.mixamorigPants_Geo.skeleton}
            />
            <skinnedMesh
              name="mixamorigR_Eye_Geo"
              castShadow
              geometry={nodes.mixamorigR_Eye_Geo.geometry}
              material={materials.Eyes_MAT}
              skeleton={nodes.mixamorigR_Eye_Geo.skeleton}
            />
            <skinnedMesh
              name="mixamorigShoes_Geo"
              castShadow
              geometry={nodes.mixamorigShoes_Geo.geometry}
              material={materials["Clothes_MAT.001"]}
              skeleton={nodes.mixamorigShoes_Geo.skeleton}
            />
            <skinnedMesh
              name="mixamorigTeeth_Down_Geo"
              castShadow
              geometry={nodes.mixamorigTeeth_Down_Geo.geometry}
              material={materials.Skin_MAT}
              skeleton={nodes.mixamorigTeeth_Down_Geo.skeleton}
            />
            <skinnedMesh
              name="mixamorigTeeth_Up_Geo"
              castShadow
              geometry={nodes.mixamorigTeeth_Up_Geo.geometry}
              material={materials.Skin_MAT}
              skeleton={nodes.mixamorigTeeth_Up_Geo.skeleton}
            />
            {/* Objeto raíz del esqueleto */}
            <primitive object={nodes.mixamorigHips} />
          </group>
        </group>
      </group>
    </>
  );
}

// Precarga el modelo GLB para mejorar tiempos de carga
export default OldMan;
useGLTF.preload("/models-3d/oldMan.glb");
