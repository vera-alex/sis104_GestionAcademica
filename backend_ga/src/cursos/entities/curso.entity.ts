import { Estudiante } from 'src/estudiantes/entities/estudiante.entity';
import { Horario } from 'src/horarios/entities/horario.entity';
import { Materia } from 'src/materias/entities/materia.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('cursos')
export class Curso {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int', { nullable: false })
  grado: number;

  @Column('varchar', { length: 1, nullable: false })
  paralelo: string;

  @CreateDateColumn()
  gestion: Date;

  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date;

  @UpdateDateColumn({ name: 'fecha_modificacion' })
  fechaModificacion: Date;

  @OneToMany(() => Estudiante, estudiante => estudiante.curso)
  estudiantes: Estudiante[];

  @OneToMany(() => Horario, horario => horario.curso)
  horarios: Horario[];

  @OneToMany(() => Materia, materia => materia.curso)
  materias: Materia[];
}
