import { Injectable } from '@nestjs/common';
import { CreateDocenteMateriaDto } from './dto/create-docente_materia.dto';
import { UpdateDocenteMateriaDto } from './dto/update-docente_materia.dto';

@Injectable()
export class DocenteMateriasService {
  create(createDocenteMateriaDto: CreateDocenteMateriaDto) {
    return 'This action adds a new docenteMateria';
  }

  findAll() {
    return `This action returns all docenteMaterias`;
  }

  findOne(id: number) {
    return `This action returns a #${id} docenteMateria`;
  }

  update(id: number, updateDocenteMateriaDto: UpdateDocenteMateriaDto) {
    return `This action updates a #${id} docenteMateria`;
  }

  remove(id: number) {
    return `This action removes a #${id} docenteMateria`;
  }
}
