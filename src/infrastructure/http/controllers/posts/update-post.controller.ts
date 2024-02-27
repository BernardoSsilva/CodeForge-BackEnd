import { Body, Controller, Param, Patch, Req, UnauthorizedException, UseGuards } from '@nestjs/common';
import { UpdatePostUseCase } from 'src/app/use-cases/posts-use-cases/update-post.use-case';
import { UpdatePostDto } from './dtos/update.post.dto';
import { AuthGuard } from 'src/infrastructure/auth/auth.guard';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

@Controller('/post/update')
export class UpdatePostController {
  constructor(private updatePost: UpdatePostUseCase, private jwtService:JwtService) {}

  @UseGuards(AuthGuard)
  @Patch(':postId')
  async executeUpdate(
    @Param('postId') postId: string,
    @Body() updatePostBody: UpdatePostDto,
    @Req() request:Request
  ) {
    const [type, token] = request.headers.authorization?.split(' ') ?? '';
    const decodedToken = await this.jwtService.decode(token);

    await this.updatePost.execute(updatePostBody, postId, decodedToken.userId);
  }
}
