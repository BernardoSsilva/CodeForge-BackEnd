import { Body, Controller, Post } from '@nestjs/common';
import { CreateCommentUseCase } from 'src/app/use-cases/comment-use-cases/create-comment.use-case';
import { CreateCommentDto } from './dto/create.comment.dto';

@Controller('comment/new')
export class PostCommentController {
  constructor(private createComment: CreateCommentUseCase) {}

  @Post()
  async executeCreateComment(@Body() createCommentDto: CreateCommentDto) {
    await this.createComment.execute(createCommentDto);
  }
}
