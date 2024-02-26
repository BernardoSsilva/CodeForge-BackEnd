import { Controller, Delete, Param } from "@nestjs/common";
import { DeletePostUseCase } from "src/app/use-cases/posts-use-cases/delete-post.use-case";


@Controller("/post/delete")
export class DeletePostController{
    constructor(private deletePost:DeletePostUseCase){}

    @Delete("/:postId")
    async executeDelete(@Param("postId") postId:string){
        await this.deletePost.execute(postId)
    }
}