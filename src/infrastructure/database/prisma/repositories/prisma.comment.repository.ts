import { Injectable } from '@nestjs/common';
import { CommentEntity } from 'src/app/entities/comment.entity';
import { CommentRepository } from 'src/app/repositories/comment.repository';
import { PrismaService } from '../prisma.service';
import { CommentMapper } from '../mappers/comment.mapper';
import { error } from 'console';

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
      const result = await this.prisma.comment.findMany();
      return result.map((comment) => CommentMapper.toDomain(comment));
    } catch {
      throw new Error();
    }
  }

  // get comment by id
  async getCommentById(commentId: string): Promise<CommentEntity> {
    try {
      const result = await this.prisma.comment.findUnique({
        where: {
          commentId,
        },
      });
      console.log(result);
      return CommentMapper.toDomain(result);
    } catch {
      throw new Error();
    }
  }

  // get all comments from post
  async getAllCommentsByPostId(postId: string): Promise<CommentEntity[]> {
    try {
      const result = await this.prisma.comment.findMany({
        where: { publication: postId },
      });

      return result.map((comment) => CommentMapper.toDomain(comment));
    } catch {
      throw new Error();
    }
  }

  // get all comments from a user
  async getAllCommentsByUserId(userId: string): Promise<CommentEntity[]> {
    try {
      const result = await this.prisma.comment.findMany({
        where: { commentAuthor: userId },
      });

      return result.map((comment) => CommentMapper.toDomain(comment));
    } catch {
      throw new Error();
    }
  }

  // update comment
  updateComment(comment: CommentEntity, commentId: string): Promise<void> {
    throw new Error('Method not implemented.');
  }

  // delete comment
  deleteComment(commentId: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
