import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { FindAllPostsFromUserUseCase } from 'src/app/use-cases/posts-use-cases/find-all-posts-from-user.use-case';
import { AuthGuard } from 'src/infrastructure/auth/auth.guard';

@Controller('post/all')
export class FindAllPostsFromUserController {
  constructor(private findAllPostsFromUser: FindAllPostsFromUserUseCase) {}

  @UseGuards(AuthGuard)
  @Get('/:userId')
  async findAllPostsFromUserExecute(@Param('userId') userId: string) {
    return await this.findAllPostsFromUser.execute(userId);
  }
}
