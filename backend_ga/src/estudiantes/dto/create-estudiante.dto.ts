import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreateEstudianteDto {
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
  @IsNotEmpty({ message: 'El campo usario no debe ser vacío' })
  @IsString({ message: 'El campo usario debe ser de tipo cadena' })
  @MaxLength(12, { message: 'El campo usario no debe ser mayor a 12 caracteres' })
  @MinLength(4, { message: 'El campo usario no debe ser menor a 4 caracteres' })
  readonly usuario: string;
}
