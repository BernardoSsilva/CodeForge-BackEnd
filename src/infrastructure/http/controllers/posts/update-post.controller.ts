import { Body, Controller, Param, Patch } from '@nestjs/common';
import { UpdatePostUseCase } from 'src/app/use-cases/posts-use-cases/update-post.use-case';
import { UpdatePostDto } from './dtos/update.post.dto';

@Controller('/post/update')
export class UpdatePostController {
  constructor(private updatePost: UpdatePostUseCase) {}

  @Patch(':postId')
  async executeUpdate(
    @Param('postId') postId: string,
    @Body() updatePostBody: UpdatePostDto,
  ) {
    await this.updatePost.execute(updatePostBody, postId);
  }
}
