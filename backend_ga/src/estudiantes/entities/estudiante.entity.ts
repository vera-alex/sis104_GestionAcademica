import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { Curso } from 'src/cursos/entities/curso.entity';
import { Asistencia } from 'src/asistencias/entities/asistencia.entity';
import { Calificacion } from 'src/calificaciones/entities/calificacion.entity';

@Entity('estudiantes')
export class Estudiante {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 15, nullable: false })
  ci: string;

  @Column('varchar', { length: 50, nullable: false })
  nombres: string;

  @Column('varchar', { length: 40, nullable: false })
  apellidos: string;

  @CreateDateColumn({ name: 'fecha_nacimiento' })
  fechaNacimiento: Date;

  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date;

  @UpdateDateColumn({ name: 'fecha_modificacion' })
  fechaModificacion: Date;

  @OneToOne(() => Usuario, usuario => usuario.estudiantes)
  @JoinColumn({ name: 'id_usuario', referencedColumnName: 'id' })
  usuario: Usuario;

  @ManyToOne(() => Curso, curso => curso.estudiantes)
  @JoinColumn({ name: 'id_curso', referencedColumnName: 'id' })
  curso: Curso;

  @OneToMany(() => Asistencia, asistencia => asistencia.estudiante)
  asistencias: Asistencia[];

  @OneToMany(() => Calificacion, calificacion => calificacion.estudiante)
  calificaciones: Calificacion[];
}
