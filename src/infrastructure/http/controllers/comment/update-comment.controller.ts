import { Body, Controller, Param, Patch, Req, UseGuards } from '@nestjs/common';
import { UpdateCommentUseCase } from 'src/app/use-cases/comment-use-cases/update-comment.use-case';
import { UpdateCommentDto } from './dto/update.comment.dto';
import { AuthGuard } from 'src/infrastructure/auth/auth.guard';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

@Controller('/comment/update')
export class UpdateCommentController {
  constructor(
    private updateComment: UpdateCommentUseCase,
    private jwtService: JwtService,
  ) {}

  @UseGuards(AuthGuard)
  @Patch('/:commentId')
  async executeUpdate(
    @Param('commentId') commentId: string,
    @Body() updateBody: UpdateCommentDto,
    @Req() request: Request,
  ) {
    const [type, token] = request.headers.authorization?.split(' ') ?? '';
    const decodedToken = await this.jwtService.decode(token);
    await this.updateComment.execute(
      updateBody,
      commentId,
      decodedToken.userId,
    );
  }
}
