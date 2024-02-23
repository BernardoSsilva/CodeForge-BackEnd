import { PostRepository } from "../../../app/repositories/post.repository";

export class GetAllPostsFromUserUseCase{
    constructor( private postRepository:PostRepository){}

    async execute(userId:string){
        return await this.postRepository.getAllPostsByUser(userId)
    }
}