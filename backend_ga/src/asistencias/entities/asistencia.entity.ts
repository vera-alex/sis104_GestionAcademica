import { Estudiante } from 'src/estudiantes/entities/estudiante.entity';
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

@Entity('asistencias')
export class Asistencia {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  fecha: Date;

  @Column('varchar', { length: 1, nullable: false })
  presente: string;

  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date;

  @UpdateDateColumn({ name: 'fecha_modificacion' })
  fechaModificacion: Date;

  @ManyToOne(() => Estudiante, estudiante => estudiante.asistencias)
  @JoinColumn({ name: 'id_estudiante', referencedColumnName: 'id' })
  estudiante: Estudiante;

  @ManyToOne(() => Materia, materia => materia.asistencias)
  @JoinColumn({ name: 'id_materia', referencedColumnName: 'id' })
  materia: Materia;
}
