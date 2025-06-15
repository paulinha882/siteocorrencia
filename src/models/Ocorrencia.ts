import { Aluno } from './Aluno';
import { Professor } from './Professor';
import { Disciplina } from './Disciplina';
import { Turma } from './Turma';
import { Motivo } from './Motivo';

export type Ocorrencia = {
  id: string;
  aluno: Aluno;
  professor: Professor;
  disciplina: Disciplina;
  turma: Turma;
  motivo: Motivo;
  data: string;
};
