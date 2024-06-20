import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsDefined,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateDocenteDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo ci no debe ser vacío' })
  @IsString({ message: 'El campo ci debe ser de tipo cadena' })
  @MaxLength(15, { message: 'El campo ci no debe ser mayor a 15 caracteres' })
  @MinLength(7, { message: 'El campo ci no debe ser menor a 7 caracteres' })
  readonly ci: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo nombres no debe ser vacío' })
  @IsString({ message: 'El campo nombres debe ser de tipo cadena' })
  @MaxLength(50, { message: 'El campo nombres no debe ser mayor a 50 caracteres' })
  @MinLength(4, { message: 'El campo nombres no debe ser menor a 4 caracteres' })
  readonly nombres: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo apellidos no debe ser vacío' })
  @IsString({ message: 'El campo apellidos debe ser de tipo cadena' })
  @MaxLength(40, { message: 'El campo apellidos no debe ser mayor a 40 caracteres' })
  @MinLength(4, { message: 'El campo apellidos no debe ser menor a 4 caracteres' })
  readonly apellidos: string;

  @ApiProperty({ example: '2024-04-13' })
  @IsNotEmpty({ message: 'El campo fechaNacimiento no debe ser vacío' })
  @IsDateString({}, { message: 'El campo fechaNacimiento debe ser de tipo fecha' })
  readonly fechaNacimiento: Date;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo email no debe ser vacío' })
  @IsEmail({}, { message: 'El campo email debe tener el formato correcto' })
  @MaxLength(50, { message: 'El campo usario no debe ser mayor a 50 caracteres' })
  @MinLength(10, { message: 'El campo usario no debe ser menor a 10 caracteres' })
  readonly email: string;

  @ApiProperty()
  @IsDefined({ message: 'El campo idUsuario debe estar definido' })
  @IsNumber({}, { message: 'El campo idUsuario debe ser de tipo numérico' })
  readonly idUsuario: number;
}
