import {
  ConflictException,
  Injectable,
  NotFoundException
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Curso } from 'src/cursos/entities/curso.entity';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { Repository } from 'typeorm';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
import { Estudiante } from './entities/estudiante.entity';
import { Materia } from 'src/materias/entities/materia.entity';

@Injectable()
export class EstudiantesService {
  constructor(
    @InjectRepository(Estudiante) private estudiantesRepository: Repository<Estudiante>,
  ) {}

  async create(createEstudianteDto: CreateEstudianteDto): Promise<Estudiante> {
    const existe = await this.estudiantesRepository.findOneBy({
      ci: createEstudianteDto.ci.trim(),
      nombres: createEstudianteDto.nombres.trim(),
      usuario: { id: createEstudianteDto.idUsuario },
      curso: { id: createEstudianteDto.idCurso },
    });

    if (existe) {
      throw new ConflictException('El estudiante ya existe');
    }

    return this.estudiantesRepository.save({
      ci: createEstudianteDto.ci.trim(),
      nombres: createEstudianteDto.nombres.trim(),
      apellidos: createEstudianteDto.apellidos.trim(),
      fechaNacimiento: createEstudianteDto.fechaNacimiento,
      usuario: { id: createEstudianteDto.idUsuario },
      curso: { id: createEstudianteDto.idCurso },
    });
  }

  async findAll(): Promise<Estudiante[]> {
    return this.estudiantesRepository.find({ relations: ['usuario', 'curso'] });
  }

  async findMateriasByEstudiante(idEstudiante: number): Promise<Materia[]> {
    const estudiante = await this.estudiantesRepository.findOne({
      where: { id: idEstudiante },
      relations: ['curso'],
    });

    if (!estudiante) {
      throw new NotFoundException(`El estudiante ${idEstudiante} no existe`);
    }

    const materias = await this.estudiantesRepository
      .createQueryBuilder('estudiante')
      .innerJoinAndSelect('estudiante.curso', 'curso')
      .innerJoinAndSelect('curso.materias', 'materia')
      .where('estudiante.id = :idEstudiante', { idEstudiante })
      .select('nombre')
      .getRawMany();

    return materias;
  }
  
  async findOne(id: number): Promise<Estudiante> {
    const estudiante = await this.estudiantesRepository.findOne({
      where: { id },
      relations: ['usuario', 'curso'],
    });
    if (!estudiante) {
      throw new NotFoundException(`El estudiante ${id} no existe`);
    }
    return estudiante;
  }

  async update(id: number, updateEstudianteDto: UpdateEstudianteDto): Promise<Estudiante> {
    const estudiante = await this.findOne(id);
    const estudianteUpdate = Object.assign(estudiante, updateEstudianteDto);
    estudianteUpdate.usuario = { id: updateEstudianteDto.idUsuario } as Usuario;
    estudianteUpdate.curso = { id: updateEstudianteDto.idCurso } as Curso;
    return this.estudiantesRepository.save(estudianteUpdate);
  }

  async remove(id: number) {
    const estudiante = await this.findOne(id);
    return this.estudiantesRepository.delete(estudiante.id);
  }
}
