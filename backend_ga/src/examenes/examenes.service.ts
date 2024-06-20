import { Injectable } from '@nestjs/common';
import { CreateExamenDto } from './dto/create-examen.dto';
import { UpdateExamenDto } from './dto/update-examen.dto';

@Injectable()
export class ExamenesService {
  create(createExameneDto: CreateExamenDto) {
    return 'This action adds a new examene';
  }

  findAll() {
    return `This action returns all examenes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} examene`;
  }

  update(id: number, updateExameneDto: UpdateExamenDto) {
    return `This action updates a #${id} examene`;
  }

  remove(id: number) {
    return `This action removes a #${id} examene`;
  }
}
