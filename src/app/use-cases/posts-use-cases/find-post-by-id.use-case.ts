import { Injectable } from '@nestjs/common';
import { PostRepository } from '../../repositories/post.repository';

@Injectable()
export class FindPostByIdUseCase {
  constructor(private postRepository: PostRepository) {}

  async execute(postId: string) {
    return await this.postRepository.getPostById(postId);
  }
}
