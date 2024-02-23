import { CommentRepository } from '../../../app/repositories/comment.repository';

export class GetCommentByIdUseCase {
  constructor(private commentRepository: CommentRepository) {}

  async execute(commentId: string) {
    return await this.commentRepository.getCommentById(commentId);
  }
}
