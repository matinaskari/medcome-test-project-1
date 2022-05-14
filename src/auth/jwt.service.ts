import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtPayload, sign, verify } from 'jsonwebtoken';

@Injectable()
export class JwtService {
  private readonly secret = 'wYy+A0V7itkHZuJVoveYY6m+SBy4IB6IzvUnwZmFePU';
  private readonly issuer = 'https://api.medcome.ir';
  private readonly audience = 'https://medcome.ir';

  generate(id: string): string {
    return sign({}, this.secret, {
      audience: this.audience,
      issuer: this.issuer,
      expiresIn: '60d',
      subject: id,
    });
  }

  parse(jwt: string): JwtPayload {
    try {
      const token = verify(jwt, this.secret, {
        issuer: this.issuer,
        audience: this.audience,
      });

      return token as JwtPayload;
    } catch {
      throw new UnauthorizedException();
    }
  }
}
