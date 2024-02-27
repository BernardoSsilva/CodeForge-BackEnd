import { PostEntity } from 'src/app/entities/post.entity';
import { PostRepository } from 'src/app/repositories/post.repository';
import { PrismaService } from '../prisma.service';
import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { error } from 'console';
import { PostMapper } from '../mappers/post.mapper';

@Injectable()
export class PrismaPostRepository implements PostRepository {
  constructor(private prisma: PrismaService) {}

  // create post
  async createPost(post: PostEntity): Promise<void> {
    try {
      const { userId } = post.props;

      const userExists = await this.prisma.user.findUnique({
        where: { userId },
      });
      if (!userExists) {
        throw new NotFoundException('user not found');
      }
      await this.prisma.post.create({
        data: {
          postContent: post.props.postContent,
          postLikes: post.props.postLikes,
          postTitle: post.props.postTitle,
          userId: post.props.userId,
          postTags: post.props.postTags,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  // get all posts
  async getAllPosts(): Promise<PostEntity[]> {
    try {
      const result = await this.prisma.post.findMany();
      if (result.length == 0) {
        throw new NotFoundException('posts not found');
      }

      return result.map((post) => PostMapper.toDomain(post));
    } catch {
      throw new BadRequestException("Bad request");
    }
  }

  // get post by id
  async getPostById(id: string): Promise<PostEntity> {
    try {
      const result = await this.prisma.post.findUnique({
        where: {
          postId: id,
        },
      });

      if (!result) {
        throw new NotFoundException('posts not found');
      }

      return PostMapper.toDomain(result);
    } catch {
      throw new BadRequestException("Bad request");
    }
  }

  // get all posts from a user
  async getAllPostsByUser(userId: string): Promise<PostEntity[]> {
    try {
      const result = await this.prisma.post.findMany({
        where: {
          userId,
        },
      });
      if (result.length == 0) {
        throw new NotFoundException('posts not found');
      }

      return result.map((post) => PostMapper.toDomain(post));
    } catch {
      throw new BadRequestException("Bad request");
    }
  }

  // update post
  async updatePost(post: Partial<PostEntity>, postId: string, userId:string): Promise<void> {
    try {

      
      const postExists = await this.prisma.post.findUnique({
        where: { postId },
      });
      
      if (!postExists) {
        throw new NotFoundException('Post not found');
      }

      if(postExists.userId !== userId){
        throw new UnauthorizedException("Can't edit posts from other users")
      }
      await this.prisma.post.update({ where: { postId }, data: post });
    } catch {
      throw new BadRequestException("Bad request");
    }
  }

  // delete a post
  async deletePost(id: string, userId): Promise<void> {
    try {
      const postExists = await this.prisma.post.findUnique({
        where: { postId: id },
      });


      if (!postExists) {
        throw new NotFoundException('Post not found');
      }

      if(postExists.userId !== userId){
        throw new UnauthorizedException("Can't delete posts from other users")
      }
      await this.prisma.post.delete({ where: { postId: id } });
    } catch {
      throw new BadRequestException("Bad request");
    }
  }
}
