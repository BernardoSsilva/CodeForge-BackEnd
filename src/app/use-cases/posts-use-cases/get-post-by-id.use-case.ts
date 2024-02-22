import { PostRepository } from "../../../app/repositories/post.repository";

export class GetPostByIdUseCase{
    constructor(private postRepository:PostRepository){}

    async execute(postId:string){
        await this.postRepository.getPostById(postId)
    }
}