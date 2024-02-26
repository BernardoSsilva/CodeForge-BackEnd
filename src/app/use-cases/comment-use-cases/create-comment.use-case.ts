import { Injectable } from '@nestjs/common';
import { CommentEntity } from '../../../app/entities/comment.entity';
import { CommentRepository } from '../../../app/repositories/comment.repository';

export interface CreateCommentInterface {
  commentTittle: string;
  commentContent: string;
  commentAuthor: string;
  publication: string;
}

@Injectable()
export class CreateCommentUseCase {
  constructor(private commentRepository: CommentRepository) {}
  async execute(comment: CreateCommentInterface) {
    console.log(comment);
    const createdComment = new CommentEntity(comment);

    return await this.commentRepository.postComment(createdComment);
  }
}
