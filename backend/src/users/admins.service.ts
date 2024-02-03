import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Admins } from './admins.entity';
import { LoginDTO } from './dtos/get-note.dto';

@Injectable()
export class AdminsService {
  constructor(
    @InjectRepository(Admins)
    private readonly usersRepository: Repository<Admins>,
  ) {}

  async login(login:LoginDTO): Promise<Admins> {
    console.log(login);
    return await this.usersRepository.findOneBy({...login});
  }
}