import { CommentEntity } from "../../../app/entities/comment.entity";
import { CommentRepository } from "../../../app/repositories/comment.repository";

export class UpdateCommentUseCase{
    constructor(private commentRepository:CommentRepository){}

    async execute(commentEntity:CommentEntity, commentId:string){
        return await this.commentRepository.updateComment(commentEntity, commentId)
    }
}