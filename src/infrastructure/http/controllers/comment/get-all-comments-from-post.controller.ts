import { Controller, Get, Param } from "@nestjs/common";
import { GetAllCommentsFromPostUseCase } from "src/app/use-cases/comment-use-cases/get-all-comments-from-post.use-case";


@Controller("comment/post")
export class GetAllCommentsFromPostController{
    constructor(private findAllCommentsFromPost:GetAllCommentsFromPostUseCase){}

    @Get("/:postId")
    async executeSearch(@Param("postId") postId:string){
        const comments = await this.findAllCommentsFromPost.execute(postId)
        return comments
    }
    
}