import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsNotEmpty, IsNumber } from "class-validator";

export class CreateCalificacionDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo nota no debe ser vacío' })
  @IsNumber({}, { message: 'El campo nota debe ser de tipo numérico' })
  readonly nota: number;

  @ApiProperty()
  @IsDefined({ message: 'El campo idEstudiante debe estar definido' })
  @IsNumber({}, { message: 'El campo idEstudiante debe ser de tipo numérico' })
  readonly idEstudiante: number;

  @ApiProperty()
  @IsDefined({ message: 'El campo idTarea debe estar definido' })
  @IsNumber({}, { message: 'El campo idTarea debe ser de tipo numérico' })
  readonly idTarea: number;

  @ApiProperty()
  @IsDefined({ message: 'El campo idExamen debe estar definido' })
  @IsNumber({}, { message: 'El campo idExamen debe ser de tipo numérico' })
  readonly idExamen: number;
}
