import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateMateriaDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo nombre no debe ser vacío' })
  @IsString({ message: 'El campo nombre debe ser de tipo cadena' })
  @MaxLength(30, { message: 'El campo nombre no debe ser mayor a 30 caracteres' })
  @MinLength(4, { message: 'El campo nombre no debe ser menor a 4 caracteres' })
  readonly nombre: string;

  @ApiProperty()
  @IsDefined({ message: 'El campo idCurso debe estar definido' })
  @IsNumber({}, { message: 'El campo idCurso debe ser de tipo numérico' })
  readonly idCurso: number;
}
