import { Routes, Route } from 'react-router-dom';
import Login from './models/Login';
import OcorrenciaForm from './models/OcorrenciaForm';


export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/ocorrencias" element={<OcorrenciaForm />} />
    </Routes>
  );
}
