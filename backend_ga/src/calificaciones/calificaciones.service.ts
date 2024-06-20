import { Injectable } from '@nestjs/common';
import { CreateCalificacionDto } from './dto/create-calificacion.dto';
import { UpdateCalificacionDto } from './dto/update-calificacion.dto';

@Injectable()
export class CalificacionesService {
  create(createCalificacioneDto: CreateCalificacionDto) {
    return 'This action adds a new calificacione';
  }

  findAll() {
    return `This action returns all calificaciones`;
  }

  findOne(id: number) {
    return `This action returns a #${id} calificacione`;
  }

  update(id: number, updateCalificacioneDto: UpdateCalificacionDto) {
    return `This action updates a #${id} calificacione`;
  }

  remove(id: number) {
    return `This action removes a #${id} calificacione`;
  }
}
