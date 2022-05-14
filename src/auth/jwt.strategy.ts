import { ExtractJwt, Strategy, StrategyOptions } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { JwtPayload } from 'jsonwebtoken';
import { AuthService } from './auth.service';
import { User } from './user.type';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromBodyField('token'),
      ignoreExpiration: false,
      secretOrKey: 'wYy+A0V7itkHZuJVoveYY6m+SBy4IB6IzvUnwZmFePU',
      issuer: 'https://api.medcome.ir',
      audience: 'https://medcome.ir',
    } as StrategyOptions);
  }

  validate(payload: JwtPayload): User {
    return this.authService.getUserById(payload.sub);
  }
}
