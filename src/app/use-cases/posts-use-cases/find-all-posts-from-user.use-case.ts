import { Injectable } from "@nestjs/common";
import { PostRepository } from "../../repositories/post.repository";

@Injectable()
export class FindAllPostsFromUserUseCase{
    constructor( private postRepository:PostRepository){}

    async execute(userId:string){
        return await this.postRepository.getAllPostsByUser(userId)
    }
}