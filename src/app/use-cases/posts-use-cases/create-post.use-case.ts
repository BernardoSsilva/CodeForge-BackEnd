import { PostEntity } from "../../../app/entities/post.entity";
import { PostRepository } from "../../../app/repositories/post.repository";

export class CreatePostUseCase{
    constructor(private postRepository:PostRepository){}

    async execute(post:PostEntity){
        return await this.postRepository.createPost(post)
    }
}