import type { Usuario } from './usuario'

export interface Docente {
  id: number
  ci: string
  nombres: string
  apellidos: string
  fechaNacimiento: Date
  email: string
  usuario: Usuario
}
