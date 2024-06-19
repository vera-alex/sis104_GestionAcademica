import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Estudiante } from './entities/estudiante.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EstudiantesService {
  constructor(@InjectRepository(Estudiante) private estudiantesRepository: Repository<Estudiante>) {}

  async create(createEstudianteDto: CreateEstudianteDto): Promise<Estudiante> {
    const existe = await this.estudiantesRepository.findOneBy({
      nombres: createEstudianteDto.nombres.trim(),
      apellidos: createEstudianteDto.apellidos.trim(),
      usuario: createEstudianteDto.usuario.trim(),
    });

    if (existe) {
      throw new ConflictException('El estudiante ya existe');
    }

    const estudiante = new Estudiante();
    estudiante.nombres = createEstudianteDto.nombres.trim();
    estudiante.apellidos = createEstudianteDto.apellidos.trim();
    estudiante.fechaNacimiento = createEstudianteDto.fechaNacimiento;
    estudiante.usuario = createEstudianteDto.usuario.trim();
    estudiante.clave = process.env.DEFAULT_PASSWORD;

    const estudianteBd = await this.estudiantesRepository.save(estudiante);
    delete estudianteBd.clave;

    return estudianteBd;
  }

  async findAll(): Promise<Estudiante[]> {
    return this.estudiantesRepository.find();
  }

  async findOne(id: number): Promise<Estudiante> {
    const estudiante = await this.estudiantesRepository.findOneBy({ id });
    if (!estudiante) {
      throw new NotFoundException(`El estudiante ${id} no existe`);
    }
    return estudiante;
  }

  async update(id: number, updateEstudianteDto: UpdateEstudianteDto): Promise<Estudiante> {
    const estudiante = await this.findOne(id);
    const estudianteUpdate = Object.assign(estudiante, updateEstudianteDto);
    return this.estudiantesRepository.save(estudianteUpdate);
  }

  async remove(id: number) {
    const estudiante = await this.findOne(id);
    return this.estudiantesRepository.delete(estudiante.id);
  }

  async validate(usuario: string, clave: string): Promise<Estudiante> {
    const estudianteOk = await this.estudiantesRepository.findOne({
      where: { usuario },
      select: ['id', 'nombres', 'apellidos', 'fechaNacimiento', 'usuario', 'clave'],
    });

    if (!estudianteOk) throw new NotFoundException('Estudiante inexistente');

    if (!(await estudianteOk?.validatePassword(clave))) {
      throw new UnauthorizedException('Clave incorrecta');
    }

    delete estudianteOk.clave;
    return estudianteOk;
  }
}
