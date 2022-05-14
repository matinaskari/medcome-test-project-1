import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtService } from './jwt.service';
import { LocalStrategy } from './local.strategy';

@Module({
  providers: [AuthService, JwtService, LocalStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
