import { CommentRepository } from "../../repositories/comment.repository";

export class GetAllCommentsByUserIdUseCae{
    constructor(private commentRepository:CommentRepository){}

    async execute(userId:string){
        return await this.commentRepository.getAllCommentsByUserId(userId);
    }
}