import { Test, TestingModule } from '@nestjs/testing';
import { DocenteMateriasService } from './docente_materias.service';

describe('DocenteMateriasService', () => {
  let service: DocenteMateriasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DocenteMateriasService],
    }).compile();

    service = module.get<DocenteMateriasService>(DocenteMateriasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
