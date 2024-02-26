import { Controller, Get, UseGuards } from '@nestjs/common';
import { GetAllCommentsUseCase } from 'src/app/use-cases/comment-use-cases/get-all-comments.use-case';
import { AuthGuard } from 'src/infrastructure/auth/auth.guard';

@Controller('/comment/all')
export class GetAllCommentsController {
  constructor(private getAllComments: GetAllCommentsUseCase) {}

  @UseGuards(AuthGuard)
  @Get()
  async executeGetAll() {
    return await this.getAllComments.execute();
  }
}
