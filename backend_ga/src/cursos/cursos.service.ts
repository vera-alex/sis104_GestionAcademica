import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Curso } from './entities/curso.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CursosService {
  constructor(
    @InjectRepository(Curso) private cursosRepository: Repository<Curso>,
  ) {}

  async create(createCursoDto: CreateCursoDto): Promise<Curso> {
    const existe = await this.cursosRepository.findOneBy({
      grado: createCursoDto.grado,
      paralelo: createCursoDto.paralelo.trim(),
    });

    if (existe) {
      throw new ConflictException('El curso ya existe');
    }

    return this.cursosRepository.save({
      grado: createCursoDto.grado,
      paralelo: createCursoDto.paralelo.trim(),
      gestion: createCursoDto.gestion,
    });
  }

  async findAll(): Promise<Curso[]> {
    return this.cursosRepository.find();
  }

  async findOne(id: number): Promise<Curso> {
    const curso = await this.cursosRepository.findOneBy({ id });
    if (!curso) {
      throw new NotFoundException(`El curso ${id} no existe`);
    }
    return curso;
  }

  async update(id: number, updateCursoDto: UpdateCursoDto): Promise<Curso> {
    const curso = await this.findOne(id);
    const cursoUpdate = Object.assign(curso, updateCursoDto);
    return this.cursosRepository.save(cursoUpdate);
  }

  async remove(id: number) {
    const curso = await this.findOne(id);
    return this.cursosRepository.delete(curso.id);
  }
}
