import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsDefined,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateTareaDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo titulo no debe ser vacío' })
  @IsString({ message: 'El campo titulo debe ser de tipo cadena' })
  @MaxLength(30, { message: 'El campo titulo no debe ser mayor a 30 caracteres' })
  @MinLength(10, { message: 'El campo titulo no debe ser menor a 10 caracteres' })
  readonly titulo: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo descripcion no debe ser vacío' })
  @IsString({ message: 'El campo descripcion debe ser de tipo cadena' })
  @MaxLength(150, { message: 'El campo descripcion no debe ser mayor a 150 caracteres' })
  @MinLength(10, { message: 'El campo descripcion no debe ser menor a 10 caracteres' })
  readonly descripcion: string;

  @ApiProperty({ example: '2024-04-13' })
  @IsNotEmpty({ message: 'El campo fechaEntrega no debe ser vacío' })
  @IsDateString({}, { message: 'El campo fechaEntrega debe ser de tipo fecha' })
  readonly fechaEntrega: Date;

  @ApiProperty()
  @IsDefined({ message: 'El campo idMateria debe estar definido' })
  @IsNumber({}, { message: 'El campo idMateria debe ser de tipo numérico' })
  readonly idMateria: number;
}
