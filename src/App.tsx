import { Routes, Route } from 'react-router-dom';
import Home from './models/Home';
import Login from './models/Login';
import OcorrenciaForm from './models/OcorrenciaForm';
import Cadastro from './models/Cadastro';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/ocorrencias" element={<OcorrenciaForm />} />
    </Routes>
  );
}
