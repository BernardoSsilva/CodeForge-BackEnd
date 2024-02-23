import { CommentRepository } from "../../../app/repositories/comment.repository";

export class FindCommentsByUserIdUseCae{
    constructor(private commentRepository:CommentRepository){}

    async execute(userId:string){
        return await this.commentRepository.getAllCommentsByUserId(userId);
    }
}