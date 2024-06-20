import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsDefined,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateAsistenciaDto {
  @ApiProperty({ example: '2024-04-13' })
  @IsNotEmpty({ message: 'El campo fecha no debe ser vacío' })
  @IsDateString({}, { message: 'El campo fecha debe ser de tipo fecha' })
  readonly fecha: Date;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo presente no debe ser vacío' })
  @IsString({ message: 'El campo presente debe ser de tipo cadena' })
  @MaxLength(1, { message: 'El campo presente no debe ser mayor a 1 caracteres' })
  readonly presente: string;

  @ApiProperty()
  @IsDefined({ message: 'El campo idEstudiante debe estar definido' })
  @IsNumber({}, { message: 'El campo idEstudiante debe ser de tipo numérico' })
  readonly idEstudiante: number;

  @ApiProperty()
  @IsDefined({ message: 'El campo idMateria debe estar definido' })
  @IsNumber({}, { message: 'El campo idMateria debe ser de tipo numérico' })
  readonly idMateria: number;
}
