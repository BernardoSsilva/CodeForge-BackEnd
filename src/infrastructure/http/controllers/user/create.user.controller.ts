import { Controller, Post } from '@nestjs/common';
import { CreateUserUseCase } from '../../../../app/use-cases/user-use-cases/create-user.use-case';
import { CreateUserDTO } from './dtos/create.user.dto';
import { UserEntity } from 'src/app/entities/user.entity';

@Controller('/user/new-user')
export class CreateUserController {
  constructor(private createUser: CreateUserUseCase) {}

  @Post()
  async registerNewUser(createUserDto: CreateUserDTO) {
    const user = new UserEntity({
      createUserDto,
    });
    this.createUser.execute(user);
  }
}
