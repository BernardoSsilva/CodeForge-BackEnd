import { PostRepository } from "../../../app/repositories/post.repository";

export class GetAllPostsUseCase{
    constructor(private postRepository:PostRepository){}

    async execute(){
        return await this.postRepository.getAllPosts()
    }
}