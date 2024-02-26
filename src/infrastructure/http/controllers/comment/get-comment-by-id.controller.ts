import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { GetCommentByIdUseCase } from 'src/app/use-cases/comment-use-cases/get-comment-by-id.use-case';
import { AuthGuard } from 'src/infrastructure/auth/auth.guard';

@Controller('/comment/')
export class GetCommentByIdController {
  constructor(private getCommentById: GetCommentByIdUseCase) {}

  @UseGuards(AuthGuard)
  @Get('/:commentId')
  async executeSearch(@Param('commentId') commentId: string) {
    const result = await this.getCommentById.execute(commentId);
    return result
  }
}
