import { PostRepository } from "../../repositories/post.repository";

export class FindPostByIdUseCase{
    constructor(private postRepository:PostRepository){}

    async execute(postId:string){
        return await this.postRepository.getPostById(postId)
    }
}