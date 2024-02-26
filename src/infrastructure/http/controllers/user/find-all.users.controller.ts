import { Controller, Get } from '@nestjs/common';
import { FindAllUsersUseCase } from '../../../../app/use-cases/user-use-cases/find-all-users.use-case';
import { UserPresenter } from './presenters/user.presenter';

@Controller('/user/all')
export class FindAllUsersController {
  constructor(private findAllUsers: FindAllUsersUseCase) {}
  @Get()
  async findAllUsersFunction() {
    const allUsers = await this.findAllUsers.execute();
    return allUsers.map((user) => UserPresenter.toHttp(user));
  }
}
