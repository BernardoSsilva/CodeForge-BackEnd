import { Controller, Get, Param } from '@nestjs/common';
import { GetAllCommentsByUserIdUseCase } from 'src/app/use-cases/comment-use-cases/get-all-comments-by-user.use-case';

@Controller('comment/user')
export class GetAllCommentsByUserIdController {
  constructor(private getAllCommentsByUser: GetAllCommentsByUserIdUseCase) {}

  @Get('/:userId')
  async executeSearch(@Param('userId') userId: string) {
    const result = await this.getAllCommentsByUser.execute(userId);
    return result;
  }
}
