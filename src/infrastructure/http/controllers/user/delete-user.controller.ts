import { Controller, Delete, Param } from '@nestjs/common';
import { DeleteUserUseCase } from 'src/app/use-cases/user-use-cases/delete-user.use-case';

@Controller('/user/delete')
export class DeleteUserController {
  constructor(private deleteUser: DeleteUserUseCase) {}

  @Delete(':id')
  async deleteUserExecute(@Param('id') id: string) {
    await this.deleteUser.execute(id);
  }
}
