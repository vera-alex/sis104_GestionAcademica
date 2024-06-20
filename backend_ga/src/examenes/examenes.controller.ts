import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ExamenesService } from './examenes.service';
import { CreateExamenDto } from './dto/create-examen.dto';
import { UpdateExamenDto } from './dto/update-examen.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags('examenes')
@Controller('examenes')
export class ExamenesController {
  constructor(private readonly examenesService: ExamenesService) {}

  @Post()
  create(@Body() createExameneDto: CreateExamenDto) {
    return this.examenesService.create(createExameneDto);
  }

  @Get()
  findAll() {
    return this.examenesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.examenesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExameneDto: UpdateExamenDto) {
    return this.examenesService.update(+id, updateExameneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.examenesService.remove(+id);
  }
}
