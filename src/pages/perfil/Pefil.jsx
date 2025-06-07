import "./Perfil.css";
import useAuthStore from "../../stores/use-auth-store";

const Perfil = () => {
  const {userLooged} = useAuthStore();
  
  return (
    <>
      <h2>PERFIL USUARIO</h2>
      <p>!Bienvenido¡ {userLooged?.displayName}</p>
    </>
  );
};

export default Perfil;
