import { Injectable } from '@nestjs/common';
import { CommentEntity } from 'src/app/entities/comment.entity';
import { CommentRepository } from 'src/app/repositories/comment.repository';
import { PrismaService } from '../prisma.service';
import { CommentMapper } from '../mappers/comment.mapper';

@Injectable()
export class PrismaCommentRepository implements CommentRepository {
  constructor(private prisma: PrismaService) {}

  //post comment
  async postComment(comment: CommentEntity): Promise<void> {
    try {
      const { commentAuthor, commentContent, commentTittle, publication } =
        comment;
      await this.prisma.comment.create({
        data: { commentAuthor, commentContent, commentTittle, publication },
      });
    } catch {
      throw new Error();
    }
  }

  // get all comments
  async getAllComments(): Promise<CommentEntity[]> {
    try {
      const result = await this.prisma.comment.findMany()
      return result.map((comment) => CommentMapper.toDomain(comment));
    } catch {
      throw new Error();
    }
  }

  deleteComment(commentId: string): Promise<void> {
    throw new Error('Method not implemented.');
  }

  getCommentById(commentId: string): Promise<CommentEntity> {
    throw new Error('Method not implemented.');
  }
  getAllCommentsByPostId(postId: string): Promise<CommentEntity[]> {
    throw new Error('Method not implemented.');
  }
  getAllCommentsByUserId(userId: string): Promise<CommentEntity[]> {
    throw new Error('Method not implemented.');
  }
  updateComment(comment: CommentEntity, commentId: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
