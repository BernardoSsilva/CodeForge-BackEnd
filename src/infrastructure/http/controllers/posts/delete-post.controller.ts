import { Controller, Delete, Param, UseGuards } from "@nestjs/common";
import { DeletePostUseCase } from "src/app/use-cases/posts-use-cases/delete-post.use-case";
import { AuthGuard } from "src/infrastructure/auth/auth.guard";


@Controller("/post/delete")
export class DeletePostController{
    constructor(private deletePost:DeletePostUseCase){}

    @UseGuards(AuthGuard)
    @Delete("/:postId")
    async executeDelete(@Param("postId") postId:string){
        await this.deletePost.execute(postId)
    }
}