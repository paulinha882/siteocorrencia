import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './Login.css';

type FormData = {
  usuario: string;
  senha: string;
};

export default function Login() {
  const { register, handleSubmit } = useForm<FormData>();
  const navigate = useNavigate();

  const onSubmit = (data: FormData) => {
    const usuariosSalvos = JSON.parse(localStorage.getItem("usuarios") || "[]");

    const usuarioValido = usuariosSalvos.find(
      (u: FormData) => u.usuario === data.usuario && u.senha === data.senha
    );

    if (usuarioValido) {
      navigate('/ocorrencias');
    } else {
      alert('Usuário ou senha incorretos!');
    }
  };

  return (
    <div className="login-container">
      <h2>Faça seu Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="login-form">
        <label>Usuário:
          <input type="text" {...register('usuario', { required: true })} />
        </label>
        <label>Senha:
          <input type="password" {...register('senha', { required: true })} />
        </label>
        <button type="submit">Entrar</button>
        <p className="link-cadastro" onClick={() => navigate('/cadastro')}>
          Não tem conta? Cadastre-se
        </p>
      </form>
    </div>
  );
}
