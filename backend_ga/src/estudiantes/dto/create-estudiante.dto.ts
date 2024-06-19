import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateEstudianteDto {
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
}
