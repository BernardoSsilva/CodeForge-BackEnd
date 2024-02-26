import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { FindUserByIdUseCase } from 'src/app/use-cases/user-use-cases/find-user-by-id.use-case';
import { UserPresenter } from './presenters/user.presenter';
import { AuthGuard } from 'src/infrastructure/auth/auth.guard';

@Controller('/user')
export class FindUserByIdController {
  constructor(private findUserById: FindUserByIdUseCase) {}

  @UseGuards(AuthGuard)
  @Get('/:id')
  async findUserByIdExecute(@Param('id') id: string) {
    const user = await this.findUserById.execute(id);
    return UserPresenter.toHttp(user);
  }
}
