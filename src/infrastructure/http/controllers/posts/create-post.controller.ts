import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { CreatePostUseCase } from 'src/app/use-cases/posts-use-cases/create-post.use-case';
import { CreatePostDto } from './dtos/create.post.dto';
import { AuthGuard } from 'src/infrastructure/auth/auth.guard';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';

@Controller('/post/create')
export class CreatePostController {
  constructor(
    private createPost: CreatePostUseCase,
    private jwtService: JwtService,
  ) {}

  @UseGuards(AuthGuard)
  @Post()
  async executeCreatePost(
    @Body() createPostDto: CreatePostDto,
    @Req() request: Request,
  ) {
    const [type, token] = request.headers.authorization?.split(' ') ?? '';
    const decodedToken = await this.jwtService.decode(token);
    createPostDto.userId = decodedToken.userId;
    await this.createPost.execute(createPostDto);
  }
}
