import { Html } from "@react-three/drei";
import "./Title1.css";

const Title1 = ({ title }) => {
    return (
        <Html
            center
            position ={[0,-1,0]}
            transform
            distanceFactor={5}
            wrapperClass="title"
        >
            <h1> {title} </h1>
        </Html>
    );
};


export default Title1;