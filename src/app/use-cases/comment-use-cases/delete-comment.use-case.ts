import { CommentRepository } from "../../../app/repositories/comment.repository";

export class DeleteCommentUseCase{
    constructor( private commentRepository:CommentRepository){}

    async execute(commentId:string){
        return await this.commentRepository.deleteComment(commentId)
    }
}