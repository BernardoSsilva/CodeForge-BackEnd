import { Controller, Get, Param } from '@nestjs/common';
import { FindAllPostsFromUserUseCase } from 'src/app/use-cases/posts-use-cases/find-all-posts-from-user.use-case';

@Controller('post/all')
export class FindAllPostsFromUserController {
  constructor(private findAllPostsFromUser: FindAllPostsFromUserUseCase) {}

  @Get('/:userId')
  async findAllPostsFromUserExecute(@Param('userId') userId: string) {
    return await this.findAllPostsFromUser.execute(userId);
  }
}
