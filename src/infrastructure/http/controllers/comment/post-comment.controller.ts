import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { CreateCommentUseCase } from 'src/app/use-cases/comment-use-cases/create-comment.use-case';
import { CreateCommentDto } from './dto/create.comment.dto';
import { AuthGuard } from 'src/infrastructure/auth/auth.guard';

@Controller('comment/new')
export class PostCommentController {
  constructor(private createComment: CreateCommentUseCase) {}

  @UseGuards(AuthGuard)
  @Post()
  async executeCreateComment(@Body() createCommentDto: CreateCommentDto) {
    await this.createComment.execute(createCommentDto);
  }
}
