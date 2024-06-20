import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CalificacionesService } from './calificaciones.service';
import { CreateCalificacionDto } from './dto/create-calificacion.dto';
import { UpdateCalificacionDto } from './dto/update-calificacion.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags('calificaciones')
@Controller('calificaciones')
export class CalificacionesController {
  constructor(private readonly calificacionesService: CalificacionesService) {}

  @Post()
  create(@Body() createCalificacioneDto: CreateCalificacionDto) {
    return this.calificacionesService.create(createCalificacioneDto);
  }

  @Get()
  findAll() {
    return this.calificacionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.calificacionesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCalificacioneDto: UpdateCalificacionDto) {
    return this.calificacionesService.update(+id, updateCalificacioneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.calificacionesService.remove(+id);
  }
}
