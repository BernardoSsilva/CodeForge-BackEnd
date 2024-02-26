import { Controller, Get } from '@nestjs/common';
import { FindAllPostsUseCase } from 'src/app/use-cases/posts-use-cases/find-all-posts.use-case';

@Controller('/posts/all')
export class FIndAllPostsController {
  constructor(private findAllPosts: FindAllPostsUseCase) {}

  @Get()
  async executeFindAll() {
    const result = this.findAllPosts.execute();
    return result;
  }
}
