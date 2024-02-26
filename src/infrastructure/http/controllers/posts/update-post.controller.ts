import { Body, Controller, Param, Patch, UseGuards } from '@nestjs/common';
import { UpdatePostUseCase } from 'src/app/use-cases/posts-use-cases/update-post.use-case';
import { UpdatePostDto } from './dtos/update.post.dto';
import { AuthGuard } from 'src/infrastructure/auth/auth.guard';

@Controller('/post/update')
export class UpdatePostController {
  constructor(private updatePost: UpdatePostUseCase) {}

  @UseGuards(AuthGuard)
  @Patch(':postId')
  async executeUpdate(
    @Param('postId') postId: string,
    @Body() updatePostBody: UpdatePostDto,
  ) {
    await this.updatePost.execute(updatePostBody, postId);
  }
}
