import { Controller, Delete, Param, UseGuards } from '@nestjs/common';
import { DeleteUserUseCase } from 'src/app/use-cases/user-use-cases/delete-user.use-case';
import { AuthGuard } from 'src/infrastructure/auth/auth.guard';

@Controller('/user/delete')
export class DeleteUserController {
  constructor(private deleteUser: DeleteUserUseCase) {}

  @UseGuards(AuthGuard)
  @Delete(':id')
  async deleteUserExecute(@Param('id') id: string) {
    await this.deleteUser.execute(id);
  }
}
