import { Html } from "@react-three/drei";
import "./Position.css";
import { useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  orderBy,
  limit,
} from "firebase/firestore";

const Position = ({}) => {
  const [topUsuarios, setTopUsuarios] = useState([]);

  useEffect(() => {
    const fetchTop = async () => {
      const db = getFirestore();
      const respuestasRef = collection(db, "respuestasQuiz");
      const q = query(respuestasRef, orderBy("aciertos", "desc"), limit(3));

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
      <Html position={[-2.4, 2, 0]}>
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
      </Html>
    </>
  );
};

export default Position;
