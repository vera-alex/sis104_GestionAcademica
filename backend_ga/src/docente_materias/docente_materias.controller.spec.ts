import { Test, TestingModule } from '@nestjs/testing';
import { DocenteMateriasController } from './docente_materias.controller';
import { DocenteMateriasService } from './docente_materias.service';

describe('DocenteMateriasController', () => {
  let controller: DocenteMateriasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DocenteMateriasController],
      providers: [DocenteMateriasService],
    }).compile();

    controller = module.get<DocenteMateriasController>(DocenteMateriasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
