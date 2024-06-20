import { Docente } from 'src/docentes/entities/docente.entity';
import { Materia } from 'src/materias/entities/materia.entity';
import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('docente-materias')
export class DocenteMateria {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Docente, docente => docente.docenteMaterias)
  @JoinColumn({ name: 'id_docente', referencedColumnName: 'id' })
  docente: Docente;

  @ManyToOne(() => Materia, materia => materia.docenteMaterias)
  @JoinColumn({ name: 'id_materia', referencedColumnName: 'id' })
  materia: Materia;

  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date;

  @UpdateDateColumn({ name: 'fecha_modificacion' })
  fechaModificacion: Date;
}
