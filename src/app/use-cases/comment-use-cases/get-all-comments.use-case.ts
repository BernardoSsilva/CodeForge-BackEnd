import { Injectable } from "@nestjs/common";
import { CommentRepository } from "../../../app/repositories/comment.repository";


@Injectable()
export class GetAllCommentsUseCase{
    constructor( private commentRepository:CommentRepository){}

    async execute(){
        return await this.commentRepository.getAllComments()
    }
}