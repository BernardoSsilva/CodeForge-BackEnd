import { CommentRepository } from "../../../app/repositories/comment.repository";

export class FindAllImagesFromPostUseCase{
    constructor( private commentRepository:CommentRepository){}

    async execute(postId:string){
        return await this.commentRepository.getAllCommentsByPostId(postId)
    }
}