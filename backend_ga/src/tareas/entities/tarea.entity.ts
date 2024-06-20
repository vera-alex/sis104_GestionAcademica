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

@Entity('tareas')
export class Tarea {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 30, nullable: false })
  titulo: string;

  @Column('varchar', { length: 150, nullable: false })
  descripcion: string;

  @CreateDateColumn({ name: 'fecha_entrega' })
  fechaEntrega: Date;

  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date;

  @UpdateDateColumn({ name: 'fecha_modificacion' })
  fechaModificacion: Date;

  @ManyToOne(() => Materia, materia => materia.tareas)
  @JoinColumn({ name: 'id_materia', referencedColumnName: 'id' })
  materia: Materia;

  @OneToOne(() => Calificacion, calificacion => calificacion.tarea)
  calificaciones: Calificacion[];
}
