import { Injectable } from '@nestjs/common';
import { CommentRepository } from '../../../app/repositories/comment.repository';

export interface UpdateCommentInterface {
  commentTittle?: string;
  commentContent?: string;
  commentAuthor?: string;
  publication?: string;
}

@Injectable()
export class UpdateCommentUseCase {
  constructor(private commentRepository: CommentRepository) {}

  async execute(commentEntity: UpdateCommentInterface, commentId: string) {
    return await this.commentRepository.updateComment(commentEntity, commentId);
  }
}
