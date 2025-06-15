import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Sistema de Registro de Ocorrências</h1>
        <p>Gerencie de forma simples e rápida as ocorrências escolares.</p>
        <button onClick={() => navigate("/login")}>Acessar o Sistema</button>
      </div>
    </div>
  );
}
