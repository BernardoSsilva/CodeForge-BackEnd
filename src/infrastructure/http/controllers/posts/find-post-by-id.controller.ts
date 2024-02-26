import { Controller, Get, Param } from '@nestjs/common';
import { FindPostByIdUseCase } from 'src/app/use-cases/posts-use-cases/find-post-by-id.use-case';

@Controller('/post/get')
export class FindPostByIdController {
  constructor(private findPostById: FindPostByIdUseCase) {}
  @Get('/:id')
  async findPostExecute(@Param('id') id: string) {
    const result = await this.findPostById.execute(id);
    return result;
  }
}
