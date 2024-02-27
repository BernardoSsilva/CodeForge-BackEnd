import { BadRequestException, Injectable } from '@nestjs/common';
import { CommentEntity } from '../../../app/entities/comment.entity';
import { CommentRepository } from '../../../app/repositories/comment.repository';


export interface CreateCommentInterface {
  commentTitle: string;
  commentContent: string;
  commentAuthor: string;
  publication: string;
}

@Injectable()
export class CreateCommentUseCase {
  constructor(private commentRepository: CommentRepository) {}
  async execute(comment: CreateCommentInterface) {
    if(!comment){
      throw new BadRequestException("Bad request")
    }
    const createdComment = new CommentEntity(comment);

    return await this.commentRepository.postComment(createdComment);
  }
}
