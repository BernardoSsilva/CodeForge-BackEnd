import { BadRequestError } from "../../src/shared/errors/bad-request.error";
import { PostEntity } from "../../src/app/entities/post.entity";
import { PostRepository } from "../../src/app/repositories/post.repository";

export class PostsInMemoryRepository implements PostRepository{

    public posts: PostEntity[] = []
    async createPost(post: PostEntity): Promise<void> {
        if(!post){
            throw new BadRequestError("Post is required")
        };
        await this.posts.push(post)
    }
    getAllPosts(): Promise<PostEntity[]> {
        throw new Error("Method not implemented.");
    }
    getPostById(id: string): Promise<PostEntity> {
        throw new Error("Method not implemented.");
    }
    getAllPostsByUser(userId: string): Promise<PostEntity[]> {
        throw new Error("Method not implemented.");
    }
    updatePost(post: PostEntity, postId: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    deletePost(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
}