import { PostRepository } from "../../../app/repositories/post.repository";

export class FindAllPostsUseCase{
    constructor(private postRepository:PostRepository){}

    async execute(){
        return await this.postRepository.getAllPosts()
    }
}