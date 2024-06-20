import { Module } from '@nestjs/common';
import { ExamenesService } from './examenes.service';
import { ExamenesController } from './examenes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Examen } from './entities/examen.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Examen])],
  controllers: [ExamenesController],
  providers: [ExamenesService],
})
export class ExamenesModule {}
