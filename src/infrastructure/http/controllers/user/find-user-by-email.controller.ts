import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { FindUserByEmailUseCase } from 'src/app/use-cases/user-use-cases/find-user-by-email.use-case';
import { UserPresenter } from './presenters/user.presenter';
import { AuthGuard } from 'src/infrastructure/auth/auth.guard';

@Controller('/user/email/')
export class FindUserByEmailController {
  constructor(private findUserByEmail: FindUserByEmailUseCase) {}

  @UseGuards(AuthGuard)
  @Get('/:email')
  async findUserByEmailExecute(@Param('email') email: string) {
    const user = await this.findUserByEmail.execute(email);
    return UserPresenter.toHttp(user);
  }
}
