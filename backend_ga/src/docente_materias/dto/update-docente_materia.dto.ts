import { PartialType } from '@nestjs/swagger';
import { CreateDocenteMateriaDto } from './create-docente_materia.dto';

export class UpdateDocenteMateriaDto extends PartialType(CreateDocenteMateriaDto) {}
