import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Estudiante } from 'src/estudiantes/entities/estudiante.entity';
import { Docente } from 'src/docentes/entities/docente.entity';

@Entity('usuarios')
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 12, nullable: false })
  usuario: string;

  @Column('varchar', { length: 100, nullable: false })
  clave: string;

  @Column('varchar', { length: 15, nullable: false })
  rol: string;

  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date;

  @UpdateDateColumn({ name: 'fecha_modificacion' })
  fechaModificacion: Date;

  @OneToOne(() => Estudiante, estudiante => estudiante.usuario)
  estudiantes: Estudiante[];

  @OneToOne(() => Docente, docente => docente.usuario)
  docentes: Docente[];

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    const salt = await bcrypt.genSalt();
    this.clave = await bcrypt.hash(this.clave, salt);
  }

  async validatePassword(plainPassword: string): Promise<boolean> {
    return bcrypt.compare(plainPassword, this.clave);
  }
}
