import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Notes } from './notes/notes.entity';
import { Categories } from './category/categories.entity';
import { NotesController } from './notes/notes.controller';
import { NotesService } from './notes/notes.service';
import { CategoriesController } from './category/categories.controller';
import { CategoriesService } from './category/categories.service';
import { Admins } from './users/admins.entity';
import { AdminsController } from './users/admins.controller';
import { AdminsService } from './users/admins.service';
import { JwtService, JwtModule } from '@nestjs/jwt';
import { DatabaseConfigModule } from './config/database.config';
import { NotesModule } from './notes/notes.module';
import { CategoriessModule } from './category/categories.module';
import { AdminsModule } from './users/admins.module';

@Module({
  imports: [JwtModule.register({ secret: 'hard!to-guess_secret' }),DatabaseConfigModule,
    NotesModule,
    CategoriessModule,
    AdminsModule,
    TypeOrmModule.forFeature([Notes,Categories,Admins]),],
    controllers: [],
    providers: [ JwtService],
  })
export class AppModule {}
