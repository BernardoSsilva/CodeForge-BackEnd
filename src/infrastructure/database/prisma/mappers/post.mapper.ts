import { Post as PrismaPost } from '@prisma/client';
import { PostEntity } from 'src/app/entities/post.entity';

export class PostMapper {
  static toDomain(post: PrismaPost) {
    const returnPost = new PostEntity(post);
    returnPost.id = post.postId;
    return returnPost;
  }
}
