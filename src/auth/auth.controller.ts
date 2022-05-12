import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './DTO/login.dto';


@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }
    @Post('/login')
    login(@Body() body: LoginDto) {
        return this.authService.login(body.username, body.password);
    }
}
