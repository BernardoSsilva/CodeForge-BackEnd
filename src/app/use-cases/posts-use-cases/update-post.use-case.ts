import { PostEntity } from "src/app/entities/post.entity";
import { PostRepository } from "../../repositories/post.repository";

export class UpdatePostUseCase{
    constructor(private postRepository:PostRepository){}

    async execute(postData:PostEntity, postId:string){
        return await this.postRepository.updatePost(postData, postId)
    }
}