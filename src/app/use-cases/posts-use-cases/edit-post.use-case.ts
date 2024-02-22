import { PostEntity } from "src/app/entities/post.entity";
import { PostRepository } from "../../../app/repositories/post.repository";

export class EditPostUseCase{
    constructor(private postRepository:PostRepository){}

    async execute(postData:PostEntity, postId:string){
        await this.postRepository.updatePost(postData, postId)
    }
}