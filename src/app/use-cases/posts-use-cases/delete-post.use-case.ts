import { PostRepository } from '../../../app/repositories/post.repository';

export class DeletePostUseCase {
  constructor(private postRepository: PostRepository) {}

  async execute(postId: string) {
    await this.postRepository.deletePost(postId);
  }
}
