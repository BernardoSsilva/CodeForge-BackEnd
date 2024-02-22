import { CommentEntity } from "../../../app/entities/comment.entity";
import { CommentRepository } from "../../../app/repositories/comment.repository";

export class CreateCommentUseCase{
    constructor(private commentRepository:CommentRepository){}
    async execute(comment:CommentEntity){
        await this.commentRepository.postComment(comment)
    }
}