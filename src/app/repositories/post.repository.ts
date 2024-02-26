import { PostEntity } from '../entities/post.entity';

export abstract class PostRepository {
  abstract createPost(post: PostEntity): Promise<void>;
  abstract getAllPosts(): Promise<PostEntity[]>;

  abstract getPostById(id: string): Promise<PostEntity>;

  abstract getAllPostsByUser(userId: string): Promise<PostEntity[]>;

  abstract updatePost(post: Partial<PostEntity>, postId: string): Promise<void>;

  abstract deletePost(id: string): Promise<void>;
}
