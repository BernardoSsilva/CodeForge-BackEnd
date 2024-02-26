import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { FindUserByLoginUseCase } from 'src/app/use-cases/user-use-cases/find-user-by-login.use-case';
import { UserPresenter } from './presenters/user.presenter';
import { AuthGuard } from 'src/infrastructure/auth/auth.guard';

@Controller('user/login')
export class FindUserByLoginController {
  constructor(private findUserByLogin: FindUserByLoginUseCase) {}

  @UseGuards(AuthGuard)
  @Get('/:login')
  async getUser(@Param('login') login: string) {
    const user = await this.findUserByLogin.execute(login);
    return UserPresenter.toHttp(user);
  }
}
