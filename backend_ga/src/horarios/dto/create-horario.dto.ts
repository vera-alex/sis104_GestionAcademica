import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateHorarioDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo dia no debe ser vacío' })
  @IsString({ message: 'El campo dia debe ser de tipo cadena' })
  @MaxLength(9, { message: 'El campo dia no debe ser mayor a 9 caracteres' })
  @MinLength(5, { message: 'El campo dia no debe ser menor a 5 caracteres' })
  readonly dia: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo horaInicio no debe ser vacío' })
  @IsString({ message: 'El campo horaInicio debe ser de tipo cadena' })
  @MaxLength(5, { message: 'El campo horaInicio no debe ser mayor a 5 caracteres' })
  readonly horaInicio: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo horaFin no debe ser vacío' })
  @IsString({ message: 'El campo horaFin debe ser de tipo cadena' })
  @MaxLength(5, { message: 'El campo horaFin no debe ser mayor a 5 caracteres' })
  readonly horaFin: string;

  @ApiProperty()
  @IsDefined({ message: 'El campo idCurso debe estar definido' })
  @IsNumber({}, { message: 'El campo idCurso debe ser de tipo numérico' })
  readonly idCurso: number;

  @ApiProperty()
  @IsDefined({ message: 'El campo idDocente debe estar definido' })
  @IsNumber({}, { message: 'El campo idDocente debe ser de tipo numérico' })
  readonly idDocente: number;

  @ApiProperty()
  @IsDefined({ message: 'El campo idMateria debe estar definido' })
  @IsNumber({}, { message: 'El campo idMateria debe ser de tipo numérico' })
  readonly idMateria: number;
}
