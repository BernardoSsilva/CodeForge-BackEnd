import { Controller, Get, Param } from '@nestjs/common';
import { FindUserByLoginUseCase } from 'src/app/use-cases/user-use-cases/find-user-by-login.use-case';
import { UserPresenter } from './presenters/user.presenter';

@Controller('user/login')
export class FindUserByLoginController {
  constructor(private findUserByLogin: FindUserByLoginUseCase) {}

  @Get('/:login')
  async getUser(@Param('login') login: string) {
    const user = await this.findUserByLogin.execute(login);
    return UserPresenter.toHttp(user);
  }
}
