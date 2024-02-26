import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserUseCase } from '../../../../app/use-cases/user-use-cases/create-user.use-case';
import { CreateUserDTO } from './dtos/create.user.dto';
import * as bcrypt from 'bcrypt';

@Controller('/user/new-user')
export class CreateUserController {
  constructor(private createUser: CreateUserUseCase) {}

  @Post()
  async registerNewUser(@Body() createUserDto: CreateUserDTO) {
    let { userEmail, userName, userPassword, userLogin } = createUserDto;

    userPassword = await bcrypt.hash(userPassword, 10);
    const newRequest = { userEmail, userName, userPassword, userLogin };
    await this.createUser.execute(newRequest);
  }
}
