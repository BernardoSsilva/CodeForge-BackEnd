import { PostEntity } from 'src/app/entities/post.entity';
import { PostRepository } from '../../repositories/post.repository';
import { Injectable } from '@nestjs/common';

export interface UpdatePostInterface {
  postTittle?: string;
  postContent?: string;
  postLikes?: number;
  postTags?: string[];
}
@Injectable()
export class UpdatePostUseCase {
  constructor(private postRepository: PostRepository) {}

  async execute(postData: UpdatePostInterface, postId: string) {
    return await this.postRepository.updatePost(postData, postId);
  }
}
