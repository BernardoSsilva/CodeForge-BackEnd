import { Injectable } from '@nestjs/common';
import { PostRepository } from '../../../app/repositories/post.repository';

@Injectable()
export class DeletePostUseCase {
  constructor(private postRepository: PostRepository) {}

  async execute(postId: string) {
    return await this.postRepository.deletePost(postId);
  }
}
