import {
  Body,
  Controller,
  Param,
  Patch,
  Req,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { UpdateUserDto } from './dtos/update.user.dto';
import { UpdateUserUseCase } from 'src/app/use-cases/user-use-cases/update-user.use-case';
import { AuthGuard } from 'src/infrastructure/auth/auth.guard';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';

@Controller('user/update')
export class UpdateUserController {
  constructor(
    private updateUser: UpdateUserUseCase,
    private jwtService: JwtService,
  ) {}

  @UseGuards(AuthGuard)
  @Patch(':id')
  async updateUserExecute(
    @Param('id') id: string,
    @Body() updateUser: UpdateUserDto,
    @Req() request: Request,
  ) {
    const [type, token] = request.headers.authorization?.split(' ') ?? '';
    const decodedToken = await this.jwtService.decode(token);

    if (decodedToken.userId !== id) {
      throw new UnauthorizedException('unauthorized to update another user');
    }
    const updatedUser = await this.updateUser.execute(updateUser, id);
  }
}
