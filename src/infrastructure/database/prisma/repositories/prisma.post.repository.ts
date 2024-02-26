import { PostEntity } from 'src/app/entities/post.entity';
import { PostRepository } from 'src/app/repositories/post.repository';
import { PrismaService } from '../prisma.service';
import { Injectable } from '@nestjs/common';
import { error } from 'console';
import { PostMapper } from '../mappers/post.mapper';

@Injectable()
export class PrismaPostRepository implements PostRepository {
  constructor(private prisma: PrismaService) {}

  // create post
  async createPost(post: PostEntity): Promise<void> {
    try {
      console.log(post);
      await this.prisma.post.create({
        data: {
          postContent: post.props.postContent,
          postLikes: post.props.postLikes,
          postTittle: post.props.postTittle,
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

      return result.map((post) => PostMapper.toDomain(post));
    } catch {
      throw new Error();
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
      
      return PostMapper.toDomain(result)
    } catch {
        throw new Error
    }
  }
  getAllPostsByUser(userId: string): Promise<PostEntity[]> {
    throw new Error('Method not implemented.');
  }
  updatePost(post: PostEntity, postId: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  deletePost(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
