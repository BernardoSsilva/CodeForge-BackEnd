import { PostEntity } from 'src/app/entities/post.entity';
import { PostRepository } from 'src/app/repositories/post.repository';
import { PrismaService } from '../prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaPostRepository implements PostRepository {
  constructor(private prisma: PrismaService) {}

  async createPost(post: PostEntity): Promise<void> {
    try {
      console.log(post);
      await this.prisma.post.create({
        data: {
          postContent: post.props.content,
          postLikes: post.props.likes,
          postTittle: post.props.tittle,
          userId: post.props.userId,
          postTags: post.props.tags,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }
  getAllPosts(): Promise<PostEntity[]> {
    throw new Error('Method not implemented.');
  }
  getPostById(id: string): Promise<PostEntity> {
    throw new Error('Method not implemented.');
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
