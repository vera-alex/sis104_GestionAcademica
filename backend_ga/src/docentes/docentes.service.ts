import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateDocenteDto } from './dto/create-docente.dto';
import { UpdateDocenteDto } from './dto/update-docente.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Docente } from './entities/docente.entity';
import { Repository } from 'typeorm';
import { Usuario } from 'src/usuarios/entities/usuario.entity';

@Injectable()
export class DocentesService {
  constructor(@InjectRepository(Docente) private docentesRepository: Repository<Docente>) {}

  async create(createDocenteDto: CreateDocenteDto): Promise<Docente> {
    const existe = await this.docentesRepository.findOneBy({
      ci: createDocenteDto.ci.trim(),
      nombres: createDocenteDto.nombres.trim(),
      usuario: { id: createDocenteDto.idUsuario },
    });

    if (existe) {
      throw new ConflictException('El docente ya existe');
    }

    return this.docentesRepository.save({
      ci: createDocenteDto.ci.trim(),
      nombres: createDocenteDto.nombres.trim(),
      apellidos: createDocenteDto.apellidos.trim(),
      fechaNacimiento: createDocenteDto.fechaNacimiento,
      email: createDocenteDto.email.trim(),
      usuario: { id: createDocenteDto.idUsuario },
    });
  }

  async findAll(): Promise<Docente[]> {
    return this.docentesRepository.find({ relations: ['usuario'] });
  }

  async findOne(id: number): Promise<Docente> {
    const docente = await this.docentesRepository.findOne({
      where: { id },
      relations: ['usuario'],
    });
    if (!docente) {
      throw new NotFoundException(`El docente ${id} no existe`);
    }
    return docente;
  }

  async update(id: number, updateDocenteDto: UpdateDocenteDto): Promise<Docente> {
    const docente = await this.findOne(id);
    const docenteUpdate = Object.assign(docente, updateDocenteDto);
    docenteUpdate.usuario = { id: updateDocenteDto.idUsuario } as Usuario;
    return this.docentesRepository.save(docenteUpdate);
  }

  async remove(id: number) {
    const docente = await this.findOne(id);
    return this.docentesRepository.delete(docente.id);
  }
}
