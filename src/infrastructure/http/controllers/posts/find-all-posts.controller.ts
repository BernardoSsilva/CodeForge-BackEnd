import { Controller, Get, UseGuards } from '@nestjs/common';
import { FindAllPostsUseCase } from 'src/app/use-cases/posts-use-cases/find-all-posts.use-case';
import { AuthGuard } from 'src/infrastructure/auth/auth.guard';

@Controller('/posts/all')
export class FIndAllPostsController {
  constructor(private findAllPosts: FindAllPostsUseCase) {}

  @UseGuards(AuthGuard)
  @Get()
  async executeFindAll() {
    const result = this.findAllPosts.execute();
    return result;
  }
}
