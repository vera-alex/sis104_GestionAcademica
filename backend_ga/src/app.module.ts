import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstudiantesModule } from './estudiantes/estudiantes.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AuthModule } from './auth/auth.module';
import { DocentesModule } from './docentes/docentes.module';
import { CursosModule } from './cursos/cursos.module';
import { HorariosModule } from './horarios/horarios.module';
import { MateriasModule } from './materias/materias.module';
import { DocenteMateriasModule } from './docente_materias/docente_materias.module';
import { AsistenciasModule } from './asistencias/asistencias.module';
import { ExamenesModule } from './examenes/examenes.module';
import { TareasModule } from './tareas/tareas.module';
import { CalificacionesModule } from './calificaciones/calificaciones.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as any,
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [__dirname + '**/*.entity.ts'],
      synchronize: true,
      autoLoadEntities: true,
    }),
    EstudiantesModule,
    UsuariosModule,
    AuthModule,
    DocentesModule,
    CursosModule,
    HorariosModule,
    MateriasModule,
    DocenteMateriasModule,
    AsistenciasModule,
    ExamenesModule,
    TareasModule,
    CalificacionesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
