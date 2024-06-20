import type { Curso } from './curso'

export interface Materia {
  id: number
  nombre: string
  curso: Curso
}
