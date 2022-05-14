import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtService } from './jwt.service';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'wYy+A0V7itkHZuJVoveYY6m+SBy4IB6IzvUnwZmFePU',
      signOptions: {
        issuer: 'https://api.medcome.ir',
        audience: 'https://medcome.ir',
        expiresIn: '60d',
      },
      verifyOptions: {
        issuer: 'https://api.medcome.ir',
        audience: 'https://medcome.ir',
      },
    }),
  ],
  providers: [AuthService, JwtService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
