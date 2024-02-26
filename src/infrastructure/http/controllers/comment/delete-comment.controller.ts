import { Controller, Delete, Param } from "@nestjs/common";
import { DeleteCommentUseCase } from "src/app/use-cases/comment-use-cases/delete-comment.use-case";


@Controller("comment/delete")
export class DeleteCommentController{
    constructor(private deleteComment: DeleteCommentUseCase){}

    @Delete("/:id")
    async executeDelete(@Param("id") commentId:string){
        await this.deleteComment.execute(commentId)
    }
}