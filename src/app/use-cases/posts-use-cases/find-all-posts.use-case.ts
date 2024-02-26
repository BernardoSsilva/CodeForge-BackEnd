import { Injectable } from "@nestjs/common";
import { PostRepository } from "../../../app/repositories/post.repository";

@Injectable()
export class FindAllPostsUseCase{
    constructor(private postRepository:PostRepository){}

    async execute(){
        return await this.postRepository.getAllPosts()
    }
}