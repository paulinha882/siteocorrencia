import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./Cadastro.css";

type FormData = {
  usuario: string;
  senha: string;
};

export default function Cadastro() {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const navigate = useNavigate();

  const onSubmit = (data: FormData) => {
    const usuariosSalvos = JSON.parse(localStorage.getItem("usuarios") || "[]");
    const usuarioExistente = usuariosSalvos.find((u: FormData) => u.usuario === data.usuario);

    if (usuarioExistente) {
      alert("Usuário já cadastrado!");
      return;
    }

    usuariosSalvos.push(data);
    localStorage.setItem("usuarios", JSON.stringify(usuariosSalvos));
    alert("Cadastro realizado com sucesso!");
    reset();
    navigate("/");
  };

  return (
    <div className="cadastro-container">
      <h2>Cadastro de Usuário</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="cadastro-form">
        <label>Usuário:
          <input type="text" {...register("usuario", { required: true })} />
        </label>
        <label>Senha:
          <input type="password" {...register("senha", { required: true })} />
        </label>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
