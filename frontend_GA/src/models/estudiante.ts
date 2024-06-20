import type { Curso } from './curso'
import type { Usuario } from './usuario'

export interface Estudiante {
  id: number
  ci: string
  nombres: string
  apellidos: string
  fechaNacimiento: Date
  usuario: Usuario
  curso: Curso
}
