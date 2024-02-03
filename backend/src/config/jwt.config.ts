import { Module } from '@nestjs/common';
import { JwtModule, JwtSecretRequestType, JwtService,} from '@nestjs/jwt';
import 'dotenv/config';

@Module({
    imports: [
      JwtModule.register({
        global: true,
        secret: process.env.JWT_SECRET,
        signOptions: { expiresIn: '2h' },
      }),
    ],
    controllers: [],
    providers: [JwtService],
  })
export class JWTConfigModule {}