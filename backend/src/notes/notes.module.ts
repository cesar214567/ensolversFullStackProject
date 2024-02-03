import { Module } from '@nestjs/common';
import { NotesController } from './notes.controller';
import { NotesService } from './notes.service';
import { Notes } from './notes.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfigModule } from 'src/config/database.config';
import { CategoriesService } from 'src/category/categories.service';
import { Categories } from 'src/category/categories.entity';

@Module({
  imports: [DatabaseConfigModule,TypeOrmModule.forFeature([Notes,Categories])],
  controllers: [NotesController],
  providers: [NotesService,CategoriesService],
  exports: [NotesService]
})
export class NotesModule {}