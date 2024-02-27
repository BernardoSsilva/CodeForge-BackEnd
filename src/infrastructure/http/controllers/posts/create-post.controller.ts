import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { CreatePostUseCase } from 'src/app/use-cases/posts-use-cases/create-post.use-case';
import { CreatePostDto } from './dtos/create.post.dto';
import { AuthGuard } from 'src/infrastructure/auth/auth.guard';

@Controller('/post/create')
export class CreatePostController {
  constructor(private createPost: CreatePostUseCase) {}

  @UseGuards(AuthGuard)
  @Post()
  async executeCreatePost(@Body() createPostDto: CreatePostDto) {
    await this.createPost.execute(createPostDto);
  }
}
