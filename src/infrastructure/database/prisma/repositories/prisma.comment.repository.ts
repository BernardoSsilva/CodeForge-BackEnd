import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CommentEntity } from 'src/app/entities/comment.entity';
import { CommentRepository } from 'src/app/repositories/comment.repository';
import { CommentMapper } from '../mappers/comment.mapper';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaCommentRepository implements CommentRepository {
  constructor(private prisma: PrismaService) {}

  //post comment
  async postComment(comment: CommentEntity): Promise<void> {
    try {
      const { commentAuthor, commentContent, commentTittle, publication } =
        comment;

      const userExists = await this.prisma.user.findUnique({
        where: { userId: commentAuthor },
      });
      const publicationExists = await this.prisma.post.findUnique({
        where: { postId: publication },
      });

      if (!userExists) {
        throw new NotFoundException('User not found');
      }

      if (!publicationExists) {
        throw new NotFoundException('Publication not found');
      }

      await this.prisma.comment.create({
        data: { commentAuthor, commentContent, commentTittle, publication },
      });
    } catch {
      throw new BadRequestException("Bad request");
    }
  }

  // get all comments
  async getAllComments(): Promise<CommentEntity[]> {
    try {
      const result = await this.prisma.comment.findMany();

      if (result.length == 0) {
        throw new NotFoundException('comments not found');
      }

      return result.map((comment) => CommentMapper.toDomain(comment));
    } catch {
      throw new BadRequestException("Bad request");
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

      if (!result) {
        throw new NotFoundException('Comment not found');
      }

      return CommentMapper.toDomain(result);
    } catch {
      throw new BadRequestException("Bad request");
    }
  }

  // get all comments from post
  async getAllCommentsByPostId(postId: string): Promise<CommentEntity[]> {
    try {
      const result = await this.prisma.comment.findMany({
        where: { publication: postId },
      });

      if (result.length == 0) {
        throw new NotFoundException('comments not found');
      }

      return result.map((comment) => CommentMapper.toDomain(comment));
    } catch {
      throw new BadRequestException("Bad request");
    }
  }

  // get all comments from a user
  async getAllCommentsByUserId(userId: string): Promise<CommentEntity[]> {
    try {
      const result = await this.prisma.comment.findMany({
        where: { commentAuthor: userId },
      });

      if (result.length == 0) {
        throw new NotFoundException('comments not found');
      }

      return result.map((comment) => CommentMapper.toDomain(comment));
    } catch {
      throw new BadRequestException("Bad request");
    }
  }

  // update comment
  async updateComment(
    comment: Partial<CommentEntity>,
    commentId: string,
  ): Promise<void> {
    try {
      const commentExists = await this.prisma.comment.findUnique({
        where: { commentId },
      });
      if (!commentExists) {
        throw new NotFoundException('Comment not found');
      }
      await this.prisma.comment.update({ where: { commentId }, data: comment });
    } catch {
      throw new BadRequestException("Bad request");
    }
  }

  // delete comment
  async deleteComment(commentId: string): Promise<void> {
    try {
      const commentExists = await this.prisma.comment.findUnique({
        where: { commentId },
      });
      if (!commentExists) {
        throw new NotFoundException('Comment not found');
      }

      await this.prisma.comment.delete({ where: { commentId } });
    } catch {
      throw new BadRequestException("Bad request");
    }
  }
}
