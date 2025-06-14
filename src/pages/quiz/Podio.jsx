import { useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  orderBy,
  limit,
} from "firebase/firestore";
import "./Podio.css"; // puedes diseñar como prefieras
import { Canvas } from "@react-three/fiber";
import Girl from "./models-3d/Girl";
import Boy2 from "./models-3d/Boy2";
import Developer from "./models-3d/Developer";
import Lights2 from "./lights/Lights2";

const Podio = () => {
  const [topUsuarios, setTopUsuarios] = useState([]);

  useEffect(() => {
    const fetchTop = async () => {
      const db = getFirestore();
      const respuestasRef = collection(db, "respuestasQuiz");
      const q = query(respuestasRef, orderBy("aciertos", "desc"));

      try {
        const querySnapshot = await getDocs(q);
        const datos = querySnapshot.docs.map((doc) => doc.data());
        setTopUsuarios(datos);
      } catch (error) {
        console.error("Error al obtener el podio:", error);
      }
    };

    fetchTop();
  }, []);

  return (
    <>
      <div className="podio-container">
        <h2>🏆 Podio de los 3 mejores</h2>
        <ol className="podio-lista">
          {topUsuarios.map((usuario, index) => (
            <li key={index} className={`puesto puesto-${index + 1}`}>
              <strong>{index + 1}°</strong> - {usuario.nombre} (
              {usuario.aciertos} aciertos)
            </li>
          ))}
        </ol>
      </div>
      <div className="podio">
        <Canvas shadows camera={{ position: [0, 1, 4] }}>
          <Girl />
          <Developer />
          <Boy2 />
          <Lights2 />
          <mesh
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, 0, 0]}
            receiveShadow
          >
            <planeGeometry args={[100, 100]} />
            <shadowMaterial transparent opacity={0.2} />
          </mesh>
        </Canvas>
      </div>
    </>
  );
};

export default Podio;
