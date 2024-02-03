import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admins } from 'src/users/admins.entity';
import { AdminsController } from './admins.controller';
import { AdminsService } from './admins.service';
import { DatabaseConfigModule } from 'src/config/database.config';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [DatabaseConfigModule,TypeOrmModule.forFeature([Admins])],
  controllers: [AdminsController],
  providers: [AdminsService,JwtService],
  exports: [AdminsService]
})
export class AdminsModule {}