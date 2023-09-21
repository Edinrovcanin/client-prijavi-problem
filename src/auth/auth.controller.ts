import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserLoginDto } from '../user/user-login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('/login')
  async login(@Body(ValidationPipe) userLoginDto: UserLoginDto) {
    // Ovde ćete dodati logiku za proveru korisnika i generisanje JWT tokena
    // Na primer, proverite email i lozinku korisnika

    const userId = 1; // Zamijenite sa stvarnom proverom korisnika i dobijanjem userId

    return this.authService.generateJwtToken(userId);
  }
}
