import { DocenteMateria } from 'src/docente_materias/entities/docente_materia.entity';
import { Horario } from 'src/horarios/entities/horario.entity';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('docentes')
export class Docente {
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

  @Column('varchar', { length: 50, nullable: false })
  email: string;

  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date;

  @UpdateDateColumn({ name: 'fecha_modificacion' })
  fechaModificacion: Date;

  @OneToOne(() => Usuario, usuario => usuario.docentes)
  @JoinColumn({ name: 'id_usuario', referencedColumnName: 'id' })
  usuario: Usuario;

  @OneToMany(() => Horario, horario => horario.docente)
  horarios: Horario[];

  @OneToMany(() => DocenteMateria, docenteMaterias => docenteMaterias.docente)
  docenteMaterias: DocenteMateria[];
}
