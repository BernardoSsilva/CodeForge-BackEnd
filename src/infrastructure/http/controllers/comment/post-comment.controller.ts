import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { CreateCommentUseCase } from 'src/app/use-cases/comment-use-cases/create-comment.use-case';
import { CreateCommentDto } from './dto/create.comment.dto';
import { AuthGuard } from 'src/infrastructure/auth/auth.guard';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

@Controller('comment/new')
export class PostCommentController {
  constructor(
    private createComment: CreateCommentUseCase,
    private jwtService: JwtService,
  ) {}

  @UseGuards(AuthGuard)
  @Post()
  async executeCreateComment(
    @Body() createCommentDto: CreateCommentDto,
    @Req() request: Request,
  ) {
    const [type, token] = request.headers.authorization?.split(' ') ?? '';
    const decodedToken = await this.jwtService.decode(token);
    createCommentDto.commentAuthor = decodedToken.userId
    await this.createComment.execute(createCommentDto);
  }
}
