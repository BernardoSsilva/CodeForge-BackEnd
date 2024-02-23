import { BadRequestError } from '../../src/shared/errors/bad-request.error';
import { PostEntity } from '../../src/app/entities/post.entity';
import { PostRepository } from '../../src/app/repositories/post.repository';
import { NotFoundError } from '../../src/shared/errors/not-found.error';

export class PostsInMemoryRepository implements PostRepository {
  public posts: PostEntity[] = [];
  async createPost(post: PostEntity): Promise<void> {
    if (!post) {
      throw new BadRequestError('Post is required');
    }
    await this.posts.push(post);
  }
  async getAllPosts(): Promise<PostEntity[]> {
    if (this.posts.length == 0) {
      throw new NotFoundError('no post founded');
    }

    return await this.posts;
  }
  async getPostById(id: string): Promise<PostEntity> {
    const post = await this.posts.find((post) => post.id === id);
    if (!post) {
      throw new NotFoundError('Post not found');
    }
    return post;
  }
  async getAllPostsByUser(userId: string): Promise<PostEntity[]> {
    const posts = await this.posts.filter((post) => post.userId == userId);
    if (posts.length == 0) {
      throw new NotFoundError('no post founded');
    }

    return posts;
  }
  async updatePost(post: PostEntity, postId: string): Promise<void> {
    const updatedPost = await this.posts.findIndex((post) => post.id == postId);
    if (updatedPost < 0) {
      throw new NotFoundError('Post not found');
    }
    if(!post){
        throw new BadRequestError("Post entity is required")
    }
    this.posts[updatedPost] = post;
  }
  async deletePost(id: string): Promise<void> {
    const deletedPost = await this.posts.findIndex((post) => post.id == id);
    if (deletedPost < 0) {
      throw new NotFoundError('Post not found');
    }
    this.posts.splice(deletedPost, 1);
  }
}
