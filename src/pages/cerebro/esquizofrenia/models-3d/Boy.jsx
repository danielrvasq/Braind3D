import {useGLTF} from '@react-three/drei';  
import {useEffect} from 'react';

const Boy = () => {
    const boyModel = useGLTF("models-3d/boy.glb");
    useEffect(() => {
        console.log(boyModel);
    }, [boyModel]);
    return(
        <primitive object={boyModel.scene} />
    );
};

export default Boy;
useGLTF.preload("models-3d/boy.glb");