import { Curso } from 'src/cursos/entities/curso.entity';
import { Docente } from 'src/docentes/entities/docente.entity';
import { Materia } from 'src/materias/entities/materia.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('horarios')
export class Horario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 9, nullable: false })
  dia: string;

  @Column({ type: 'time', name: 'hora_inicio' })
  horaInicio: string;

  @Column({ type: 'time', name: 'hora_fin' })
  horaFin: string;

  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date;

  @UpdateDateColumn({ name: 'fecha_modificacion' })
  fechaModificacion: Date;

  @ManyToOne(() => Curso, curso => curso.horarios)
  @JoinColumn({ name: 'id_curso', referencedColumnName: 'id' })
  curso: Curso;

  @ManyToOne(() => Docente, docente => docente.horarios)
  @JoinColumn({ name: 'id_docente', referencedColumnName: 'id' })
  docente: Docente;

  @ManyToOne(() => Materia, materia => materia.horarios)
  @JoinColumn({ name: 'id_materia', referencedColumnName: 'id' })
  materia: Materia;
}
