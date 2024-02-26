import { Controller, Get, Param } from '@nestjs/common';
import { FindUserByEmailUseCase } from 'src/app/use-cases/user-use-cases/find-user-by-email.use-case';
import { UserPresenter } from './presenters/user.presenter';

@Controller('/user/email/')
export class FindUserByEmailController {
  constructor(private findUserByEmail: FindUserByEmailUseCase) {}

  @Get('/:email')
  async findUserByEmailExecute(@Param('email') email: string) {
    const user = await this.findUserByEmail.execute(email);
    return UserPresenter.toHttp(user);
  }
}
