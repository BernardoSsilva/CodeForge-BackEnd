import { Body, Controller, Param, Patch, UseGuards } from "@nestjs/common";
import { UpdateCommentUseCase } from "src/app/use-cases/comment-use-cases/update-comment.use-case";
import { UpdateCommentDto } from "./dto/update.comment.dto";
import { AuthGuard } from "src/infrastructure/auth/auth.guard";


@Controller("/comment/update")
export class UpdateCommentController{
    constructor(private updateComment:UpdateCommentUseCase){}

    @UseGuards(AuthGuard)
    @Patch("/:commentId")
    async executeUpdate(@Param("commentId") commentId:string, @Body() updateBody: UpdateCommentDto){
        await this.updateComment.execute(updateBody, commentId)
    }
}