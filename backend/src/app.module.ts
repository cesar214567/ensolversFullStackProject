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

@Module({
  imports: [TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'postgres',
      entities: [Notes,Categories],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Notes,Categories]),],
  controllers: [AppController,NotesController,CategoriesController],
  providers: [AppService,NotesService,CategoriesService],
})
export class AppModule {}
