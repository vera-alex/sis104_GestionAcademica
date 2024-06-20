import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { DocenteMateriasService } from './docente_materias.service';
import { CreateDocenteMateriaDto } from './dto/create-docente_materia.dto';
import { UpdateDocenteMateriaDto } from './dto/update-docente_materia.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags('docente-materias')
@Controller('docente-materias')
export class DocenteMateriasController {
  constructor(private readonly docenteMateriasService: DocenteMateriasService) {}

  @Post()
  create(@Body() createDocenteMateriaDto: CreateDocenteMateriaDto) {
    return this.docenteMateriasService.create(createDocenteMateriaDto);
  }

  @Get()
  findAll() {
    return this.docenteMateriasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.docenteMateriasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDocenteMateriaDto: UpdateDocenteMateriaDto) {
    return this.docenteMateriasService.update(+id, updateDocenteMateriaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.docenteMateriasService.remove(+id);
  }
}
