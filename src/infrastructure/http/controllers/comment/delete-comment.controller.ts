import { Controller, Delete, Param, UseGuards } from "@nestjs/common";
import { DeleteCommentUseCase } from "src/app/use-cases/comment-use-cases/delete-comment.use-case";
import { AuthGuard } from "src/infrastructure/auth/auth.guard";


@Controller("comment/delete")
export class DeleteCommentController{
    constructor(private deleteComment: DeleteCommentUseCase){}

    @UseGuards(AuthGuard)
    @Delete("/:id")
    async executeDelete(@Param("id") commentId:string){
        await this.deleteComment.execute(commentId)
    }
}