import { Controller, Post } from "@nestjs/common";
import { CreatePostUseCase } from "src/app/use-cases/posts-use-cases/create-post.use-case";
import { CreatePostDto } from "./dtos/create.post.dto";


@Controller("/post/create")
export class CreatePostController{
    constructor(private createPost: CreatePostUseCase){}

    @Post()
    async executeCreatePost(createPostDto:CreatePostDto){
        await this.createPost.execute(createPostDto)
    }
}