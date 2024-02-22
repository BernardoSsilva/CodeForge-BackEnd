import { CommentRepository } from "../../../app/repositories/comment.repository";

export class GetAllCommentsUseCase{
    constructor( private commentRepository:CommentRepository){}

    async execute(){
        return await this.commentRepository.getAllComments()
    }
}