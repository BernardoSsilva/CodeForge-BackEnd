import { Injectable } from "@nestjs/common";
import { CommentRepository } from "../../repositories/comment.repository";

@Injectable()
export class GetAllCommentsByUserIdUseCase{
    constructor(private commentRepository:CommentRepository){}

    async execute(userId:string){
        return await this.commentRepository.getAllCommentsByUserId(userId);
    }
}