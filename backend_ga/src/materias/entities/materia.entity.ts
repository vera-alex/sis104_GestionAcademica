import { Asistencia } from 'src/asistencias/entities/asistencia.entity';
import { Curso } from 'src/cursos/entities/curso.entity';
import { DocenteMateria } from 'src/docente_materias/entities/docente_materia.entity';
import { Examen } from 'src/examenes/entities/examen.entity';
import { Horario } from 'src/horarios/entities/horario.entity';
import { Tarea } from 'src/tareas/entities/tarea.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('materias')
export class Materia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 30, nullable: false })
  nombre: string;

  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date;

  @UpdateDateColumn({ name: 'fecha_modificacion' })
  fechaModificacion: Date;

  @ManyToOne(() => Curso, curso => curso.materias)
  @JoinColumn({ name: 'id_curso', referencedColumnName: 'id' })
  curso: Curso;

  @OneToMany(() => Horario, horario => horario.materia)
  horarios: Horario[];

  @OneToMany(() => DocenteMateria, docenteMaterias => docenteMaterias.materia)
  docenteMaterias: DocenteMateria[];

  @OneToMany(() => Asistencia, asistencia => asistencia.materia)
  asistencias: Asistencia[];

  @OneToMany(() => Examen, examen => examen.materia)
  examenes: Examen[];

  @OneToMany(() => Tarea, tarea => tarea.materia)
  tareas: Tarea[];
}
