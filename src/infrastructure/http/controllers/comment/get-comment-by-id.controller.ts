import { Controller, Get, Param } from '@nestjs/common';
import { GetCommentByIdUseCase } from 'src/app/use-cases/comment-use-cases/get-comment-by-id.use-case';

@Controller('/comment/')
export class GetCommentByIdController {
  constructor(private getCommentById: GetCommentByIdUseCase) {}

  @Get('/:commentId')
  async executeSearch(@Param('commentId') commentId: string) {
    const result = await this.getCommentById.execute(commentId);
    return result
  }
}
