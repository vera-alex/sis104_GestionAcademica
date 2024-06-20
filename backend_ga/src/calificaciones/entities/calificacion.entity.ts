import { Estudiante } from "src/estudiantes/entities/estudiante.entity";
import { Examen } from "src/examenes/entities/examen.entity";
import { Tarea } from "src/tareas/entities/tarea.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('calificaciones')
export class Calificacion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('float',{ nullable: false })
  nota: number;

  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date;

  @UpdateDateColumn({ name: 'fecha_modificacion' })
  fechaModificacion: Date;

  @ManyToOne(() => Estudiante, estudiante => estudiante.calificaciones)
  @JoinColumn({ name: 'id_estudiante', referencedColumnName: 'id' })
  estudiante: Estudiante;

  @OneToOne(() => Tarea, tarea => tarea.calificaciones)
  @JoinColumn({ name: 'id_tarea', referencedColumnName: 'id' })
  tarea: Tarea;

  @OneToOne(() => Examen, examen => examen.calificaciones)
  @JoinColumn({ name: 'id_examen', referencedColumnName: 'id' })
  examen: Examen;
}
