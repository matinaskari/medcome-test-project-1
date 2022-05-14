import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { Request as expressRequest } from 'express';
import { AuthService } from './auth.service';
import { LoginDto } from './DTO/login.dto';
import { JwtService } from './jwt.service';
import { JwtAuthGuard } from './jwtAuth.guard';
import { LocalAuthGuard } from './localAuth.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly jwtService: JwtService,
  ) {}

  @Post('/login')
  @UseGuards(LocalAuthGuard)
  login(@Body() body: LoginDto, @Request() req: expressRequest) {
    return req.user;
  }

  @Post('/test')
  @UseGuards(JwtAuthGuard)
  test(@Request() req: expressRequest) {
    return req.user;
  }
}
