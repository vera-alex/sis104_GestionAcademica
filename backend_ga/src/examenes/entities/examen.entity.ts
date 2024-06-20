import { Calificacion } from 'src/calificaciones/entities/calificacion.entity';
import { Materia } from 'src/materias/entities/materia.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('examenes')
export class Examen {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 30, nullable: false })
  titulo: string;

  @Column('varchar', { length: 150, nullable: false })
  descripcion: string;

  @CreateDateColumn()
  fecha: Date;

  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date;

  @UpdateDateColumn({ name: 'fecha_modificacion' })
  fechaModificacion: Date;

  @ManyToOne(() => Materia, materia => materia.examenes)
  @JoinColumn({ name: 'id_materia', referencedColumnName: 'id' })
  materia: Materia;

  @OneToOne(() => Calificacion, calificacion => calificacion.examen)
  calificaciones: Calificacion[];
}
