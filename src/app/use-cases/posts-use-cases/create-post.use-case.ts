import { PostEntity } from "../../../app/entities/post.entity";
import { PostRepository } from "../../../app/repositories/post.repository";

export class CreatePostUseCase{
    constructor(private postRepository:PostRepository){}

    async execute(post:PostEntity){
        await this.postRepository.createPost(post)
    }
}