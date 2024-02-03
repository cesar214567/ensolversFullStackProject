import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categories } from 'src/category/categories.entity';
import { Notes } from 'src/notes/notes.entity';
import { Admins } from 'src/users/admins.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'admin',
    database: 'postgres',
    entities: [Notes,Categories,Admins],
    synchronize: true,
  }),TypeOrmModule.forFeature([Notes,Categories,Admins])],
})
export class DatabaseConfigModule {}