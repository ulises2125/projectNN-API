import { Controller, Get, Post } from '@nestjs/common';
import { LoginService } from 'src/services/login.service';

@Controller()
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  /*   @Post('login')
  registerUser(@Body() userObject: RegisterAuthDto) {
    console.log({ body: userObject });
  } */
  @Get('login')
  getHello(): string {
    return this.loginService.getHello();
  }
}
