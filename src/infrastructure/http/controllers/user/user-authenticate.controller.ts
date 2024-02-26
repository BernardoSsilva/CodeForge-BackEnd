import { Body, Controller, Injectable, Post } from '@nestjs/common';
import { AuthenticateUserUseCase } from 'src/app/use-cases/user-use-cases/authenticate-user.use-case';
import { AuthenticationDto } from './dtos/authentication.dto';

@Controller('/user/signup')
export class AuthenticateUserController {
  constructor(private authenticate: AuthenticateUserUseCase) {}

  @Post()
  async executeFunction(@Body() authenticationDto:AuthenticationDto) {
    return await this.authenticate.execute(authenticationDto);
  }
}
