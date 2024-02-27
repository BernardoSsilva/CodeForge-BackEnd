import { BadRequestException, Injectable } from '@nestjs/common';
import { PostEntity } from '../../../app/entities/post.entity';
import { PostRepository } from '../../../app/repositories/post.repository';

export interface CreatePostInterface {
  postTitle: string;
  postContent: string;
  postLikes: number;
  postTags: string[];
  userId: string;
}

@Injectable()
export class CreatePostUseCase {
  constructor(private postRepository: PostRepository) {}

  async execute(post: CreatePostInterface) {
    if(!post){
      throw new BadRequestException("Bad requestF")
    }

    const createPost = new PostEntity(post)
    return await this.postRepository.createPost(createPost);
  }
}
