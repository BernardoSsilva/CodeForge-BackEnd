import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { GetAllCommentsByUserIdUseCase } from 'src/app/use-cases/comment-use-cases/get-all-comments-by-user.use-case';
import { AuthGuard } from 'src/infrastructure/auth/auth.guard';

@Controller('comment/user')
export class GetAllCommentsByUserIdController {
  constructor(private getAllCommentsByUser: GetAllCommentsByUserIdUseCase) {}

  @UseGuards(AuthGuard)
  @Get('/:userId')
  async executeSearch(@Param('userId') userId: string) {
    const result = await this.getAllCommentsByUser.execute(userId);
    return result;
  }
}
