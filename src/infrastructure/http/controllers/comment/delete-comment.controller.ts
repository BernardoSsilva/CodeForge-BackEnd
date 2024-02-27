import { Controller, Delete, Param, Req, UseGuards } from "@nestjs/common";
import { DeleteCommentUseCase } from "src/app/use-cases/comment-use-cases/delete-comment.use-case";
import { AuthGuard } from "src/infrastructure/auth/auth.guard";
import { Request } from 'express';
import { JwtService } from "@nestjs/jwt";


@Controller("comment/delete")
export class DeleteCommentController{
    constructor(private deleteComment: DeleteCommentUseCase, private jwtService: JwtService,){}

    @UseGuards(AuthGuard)
    @Delete("/:id")
    async executeDelete(@Param("id") commentId:string, @Req() request: Request){
        const [type, token] = request.headers.authorization?.split(' ') ?? '';
    const decodedToken = await this.jwtService.decode(token);
        await this.deleteComment.execute(commentId, decodedToken.userId)
    }
}