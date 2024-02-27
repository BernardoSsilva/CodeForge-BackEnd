import { Controller, Delete, Param, Req, UseGuards } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Request } from "express";
import { DeletePostUseCase } from "src/app/use-cases/posts-use-cases/delete-post.use-case";
import { AuthGuard } from "src/infrastructure/auth/auth.guard";


@Controller("/post/delete")
export class DeletePostController{
    constructor(private deletePost:DeletePostUseCase, private jwtService:JwtService){}

    @UseGuards(AuthGuard)
    @Delete("/:postId")
    async executeDelete(@Param("postId") postId:string, @Req() request:Request){
        const [type, token] = request.headers.authorization?.split(' ') ?? '';
    const decodedToken = await this.jwtService.decode(token);
        await this.deletePost.execute(postId, decodedToken.userId)
    }
}