import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import * as bcrypt from 'bcrypt';

@Entity('estudiantes')
export class Estudiante {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 50, nullable: false })
  nombres: string;

  @Column('varchar', { length: 40, nullable: false })
  apellidos: string;

  @CreateDateColumn({ name: 'fecha_nacimiento' })
  fechaNacimiento: Date;

  @Column('varchar', { length: 12, nullable: false })
  usuario: string;

  @Column('varchar', { length: 100, nullable: false })
  clave: string;

  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date;

  @UpdateDateColumn({ name: 'fecha_modificacion' })
  fechaModificacion: Date;

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
