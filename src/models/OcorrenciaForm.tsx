import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import "../OcorrenciaForm.css";

type FormData = {
  aluno: string;
  professor: string;
  data: string;
  disciplina: string;
  turma: string;
  motivo: string;
};

export default function OcorrenciaForm() {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [ocorrencias, setOcorrencias] = useState<FormData[]>([]);

  useEffect(() => {
    const dadosSalvos = localStorage.getItem("ocorrencias");
    if (dadosSalvos) {
      setOcorrencias(JSON.parse(dadosSalvos));
    }
  }, []);

  const onSubmit = (data: FormData) => {
    const novasOcorrencias = [...ocorrencias, data];
    setOcorrencias(novasOcorrencias);
    localStorage.setItem("ocorrencias", JSON.stringify(novasOcorrencias));
    alert("Ocorrência registrada com sucesso!");
    reset();
  };

  const removerOcorrencia = (index: number) => {
    const novas = ocorrencias.filter((_, i) => i !== index);
    setOcorrencias(novas);
    localStorage.setItem("ocorrencias", JSON.stringify(novas));
  };

  return (
    <div className="container">
      <h2 className="titulo">Registro de Ocorrência Escolar</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="formulario">
        <label>Aluno:
          <input type="text" {...register("aluno", { required: true })} />
        </label>
        <label>Professor:
          <input type="text" {...register("professor", { required: true })} />
        </label>
        <label>Data:
          <input type="date" {...register("data", { required: true })} />
        </label>
        <label>Disciplina:
          <input type="text" {...register("disciplina", { required: true })} />
        </label>
        <label>Turma:
          <input type="text" {...register("turma", { required: true })} />
        </label>
        <label>Motivo:
          <textarea {...register("motivo", { required: true })}></textarea>
        </label>
        <button type="submit">Registrar Ocorrência</button>
      </form>

      <div className="lista">
        <h3>Ocorrências Registradas</h3>
        {ocorrencias.length === 0 && <p>Nenhuma ocorrência registrada ainda.</p>}
        {ocorrencias.map((oc, index) => (
          <div key={index} className="item">
            <p><strong>Aluno:</strong> {oc.aluno}</p>
            <p><strong>Professor:</strong> {oc.professor}</p>
            <p><strong>Data:</strong> {oc.data}</p>
            <p><strong>Disciplina:</strong> {oc.disciplina}</p>
            <p><strong>Turma:</strong> {oc.turma}</p>
            <p><strong>Motivo:</strong> {oc.motivo}</p>
            <button onClick={() => removerOcorrencia(index)} className="remover-botao">Remover</button>
          </div>
        ))}
      </div>
    </div>
  );
}
