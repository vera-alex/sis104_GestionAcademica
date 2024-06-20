import { Module } from '@nestjs/common';
import { DocenteMateriasService } from './docente_materias.service';
import { DocenteMateriasController } from './docente_materias.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DocenteMateria } from './entities/docente_materia.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DocenteMateria])],
  controllers: [DocenteMateriasController],
  providers: [DocenteMateriasService],
})
export class DocenteMateriasModule {}
