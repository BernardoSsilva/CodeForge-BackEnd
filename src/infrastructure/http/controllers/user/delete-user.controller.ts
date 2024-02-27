import {
  Controller,
  Delete,
  Param,
  Req,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { DeleteUserUseCase } from 'src/app/use-cases/user-use-cases/delete-user.use-case';
import { AuthGuard } from 'src/infrastructure/auth/auth.guard';

@Controller('/user/delete')
export class DeleteUserController {
  constructor(
    private deleteUser: DeleteUserUseCase,
    private jwtService: JwtService,
  ) {}

  @UseGuards(AuthGuard)
  @Delete(':id')
  async deleteUserExecute(@Param('id') id: string, @Req() request: Request) {
    const [type, token] = request.headers.authorization?.split(' ') ?? '';
    const decodedToken = await this.jwtService.decode(token);

    if (decodedToken.userId !== id) {
      throw new UnauthorizedException('unauthorized to update another user');
    }
    await this.deleteUser.execute(id);
  }
}
