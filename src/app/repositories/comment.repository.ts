import { CommentEntity } from '../entities/comment.entity';

export abstract class CommentRepository {
  abstract postComment(comment: CommentEntity): Promise<void>;
  abstract deleteComment(commentId: string): Promise<void>;

  abstract getAllComments(): Promise<CommentEntity[]>;

  abstract getCommentById(commentId: string): Promise<CommentEntity>;

  abstract getAllCommentsByPostId(postId: string): Promise<CommentEntity[]>;

  abstract getAllCommentsByUserId(userId: string): Promise<CommentEntity[]>;

  abstract updateComment(comment: CommentEntity): Promise<void>;
}
