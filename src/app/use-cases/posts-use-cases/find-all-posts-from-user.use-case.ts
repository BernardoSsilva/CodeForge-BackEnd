import { PostRepository } from "../../repositories/post.repository";

export class FindAllPostsFromUserUseCase{
    constructor( private postRepository:PostRepository){}

    async execute(userId:string){
        return await this.postRepository.getAllPostsByUser(userId)
    }
}