import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { AdminsService } from './admins.service';
import { LoginDTO } from './dtos/get-note.dto';
import { JwtService } from '@nestjs/jwt';
import 'dotenv/config';

@Controller("/admins")
export class AdminsController {
  constructor(private readonly adminsService: AdminsService,
    private readonly jwtService: JwtService) {}
  
  @Post()
  async loginAdmin(@Res() response,@Body() login:LoginDTO){
    const returnLogin = await this.adminsService.login(login);
    const payload = { sub: returnLogin.id, username: returnLogin.email };
      return response
      .status(returnLogin ? HttpStatus.OK : HttpStatus.NOT_FOUND)
      .send({access_token: await this.jwtService.sign(payload,{
        secret: process.env.JWT_SECRET,
        expiresIn: '60s'
      })});
  }
  
}
