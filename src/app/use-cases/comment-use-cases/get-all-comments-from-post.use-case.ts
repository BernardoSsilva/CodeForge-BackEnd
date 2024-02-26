import { Injectable } from '@nestjs/common';
import { CommentRepository } from '../../../app/repositories/comment.repository';

@Injectable()
export class GetAllCommentsFromPostUseCase {
  constructor(private commentRepository: CommentRepository) {}

  async execute(postId: string) {
    return await this.commentRepository.getAllCommentsByPostId(postId);
  }
}
