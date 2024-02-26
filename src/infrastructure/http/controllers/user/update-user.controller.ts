import { Body, Controller, Param, Patch } from '@nestjs/common';
import { UpdateUserDto } from './dtos/update.user.dto';
import { UpdateUserUseCase } from 'src/app/use-cases/user-use-cases/update-user.use-case';

@Controller('user/update')
export class UpdateUserController {
  constructor(private updateUser: UpdateUserUseCase) {}

  @Patch(':id')
  async updateUserExecute(
    @Param('id') id: string,
    @Body() updateUser: UpdateUserDto,
  ) {
    const updatedUser = await this.updateUser.execute(updateUser, id);
  }
}
