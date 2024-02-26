import { Body, Controller, Param, Patch, UseGuards } from '@nestjs/common';
import { UpdateUserDto } from './dtos/update.user.dto';
import { UpdateUserUseCase } from 'src/app/use-cases/user-use-cases/update-user.use-case';
import { AuthGuard } from 'src/infrastructure/auth/auth.guard';

@Controller('user/update')
export class UpdateUserController {
  constructor(private updateUser: UpdateUserUseCase) {}

  @UseGuards(AuthGuard)
  @Patch(':id')
  async updateUserExecute(
    @Param('id') id: string,
    @Body() updateUser: UpdateUserDto,
  ) {
    const updatedUser = await this.updateUser.execute(updateUser, id);
  }
}
