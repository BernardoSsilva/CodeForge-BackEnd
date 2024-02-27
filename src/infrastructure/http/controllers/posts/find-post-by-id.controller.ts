import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { FindPostByIdUseCase } from 'src/app/use-cases/posts-use-cases/find-post-by-id.use-case';
import { AuthGuard } from 'src/infrastructure/auth/auth.guard';

@Controller('/post/get')
export class FindPostByIdController {
  constructor(private findPostById: FindPostByIdUseCase) {}

  @UseGuards(AuthGuard)
  @Get('/:id')
  async findPostExecute(@Param('id') id: string) {
    const result = await this.findPostById.execute(id);
    return result;
  }
}
