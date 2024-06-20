import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsDefined,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateCursoDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo grado no debe ser vacío' })
  @IsNumber({}, { message: 'El campo grado debe ser de tipo numérico' })
  readonly grado: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo paralelo no debe ser vacío' })
  @IsString({ message: 'El campo paralelo debe ser de tipo cadena' })
  @MaxLength(1, { message: 'El campo paralelo no debe ser mayor a 1 caracteres' })
  readonly paralelo: string;

  @ApiProperty({ example: '2024-04-13' })
  @IsNotEmpty({ message: 'El campo gestion no debe ser vacío' })
  @IsDateString({}, { message: 'El campo gestion debe ser de tipo fecha' })
  readonly gestion: Date;
}
