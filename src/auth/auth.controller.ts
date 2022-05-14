import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { Request as expressRequest } from 'express';
import { AuthService } from './auth.service';
import { LoginDto } from './DTO/login.dto';
import { LocalAuthGuard } from './localAuth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  @UseGuards(LocalAuthGuard)
  login(@Body() body: LoginDto, @Request() req: expressRequest) {
    return req.user;
  }
}
