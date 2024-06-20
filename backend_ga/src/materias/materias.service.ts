import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateMateriaDto } from './dto/create-materia.dto';
import { UpdateMateriaDto } from './dto/update-materia.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Materia } from './entities/materia.entity';
import { Repository } from 'typeorm';
import { Curso } from 'src/cursos/entities/curso.entity';

@Injectable()
export class MateriasService {
  constructor(
    @InjectRepository(Materia) private materiasRepository: Repository<Materia>,
  ) {}

  async create(createMateriaDto: CreateMateriaDto): Promise<Materia> {
    const existe = await this.materiasRepository.findOneBy({
      nombre: createMateriaDto.nombre.trim(),
      curso: { id: createMateriaDto.idCurso },
    });

    if (existe) {
      throw new ConflictException('La materia ya existe');
    }

    return this.materiasRepository.save({
      nombre: createMateriaDto.nombre.trim(),
      curso: { id: createMateriaDto.idCurso },
    });
  }

  async findAll(): Promise<Materia[]> {
    return this.materiasRepository.find({ relations: ['curso', 'curso.estudiante'] });
  }

  async findOne(id: number): Promise<Materia> {
    const materia = await this.materiasRepository.findOne({
      where: { id },
      relations: ['curso'],
    });
    if (!materia) {
      throw new NotFoundException(`La materia ${id} no existe`);
    }
    return materia;
  }

  async update(id: number, updateMateriaDto: UpdateMateriaDto): Promise<Materia> {
    const materia = await this.findOne(id);
    const materiaUpdate = Object.assign(materia, updateMateriaDto);
    materiaUpdate.curso = { id: updateMateriaDto.idCurso } as Curso;
    return this.materiasRepository.save(materiaUpdate);
  }

  async remove(id: number) {
    const materia = await this.findOne(id);
    return this.materiasRepository.delete(materia.id);
  }
}
