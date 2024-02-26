import { Controller, Get } from '@nestjs/common';
import { GetAllCommentsUseCase } from 'src/app/use-cases/comment-use-cases/get-all-comments.use-case';

@Controller('/comment/all')
export class GetAllCommentsController {
  constructor(private getAllComments: GetAllCommentsUseCase) {}

  @Get()
  async executeGetAll() {
    return await this.getAllComments.execute();
  }
}
