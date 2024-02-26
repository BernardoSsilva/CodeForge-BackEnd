import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { GetAllCommentsFromPostUseCase } from 'src/app/use-cases/comment-use-cases/get-all-comments-from-post.use-case';
import { AuthGuard } from 'src/infrastructure/auth/auth.guard';

@Controller('comment/post')
export class GetAllCommentsFromPostController {
  constructor(private findAllCommentsFromPost: GetAllCommentsFromPostUseCase) {}

  @UseGuards(AuthGuard)
  @Get('/:postId')
  async executeSearch(@Param('postId') postId: string) {
    const comments = await this.findAllCommentsFromPost.execute(postId);
    return comments;
  }
}
