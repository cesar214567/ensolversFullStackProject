import { Module } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categories } from './categories.entity';
import { DatabaseConfigModule } from 'src/config/database.config';
import { Notes } from 'src/notes/notes.entity';

@Module({
  imports: [DatabaseConfigModule,TypeOrmModule.forFeature([Categories,Notes])],
  controllers: [CategoriesController],
  providers: [CategoriesService]
})
export class CategoriessModule {}