import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateDocenteMateriaDto {
  @ApiProperty()
  @IsDefined({ message: 'El campo idDocente debe estar definido' })
  @IsNumber({}, { message: 'El campo idDocente debe ser de tipo numérico' })
  readonly idDocente: number;

  @ApiProperty()
  @IsDefined({ message: 'El campo idMateria debe estar definido' })
  @IsNumber({}, { message: 'El campo idMateria debe ser de tipo numérico' })
  readonly idMateria: number;
}
