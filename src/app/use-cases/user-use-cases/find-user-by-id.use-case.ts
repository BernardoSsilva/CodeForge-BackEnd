import { UserRepository } from "../../repositories/user.repository";

export class FindUserByIdUseCase{
    constructor(private userRepository:UserRepository){}

    async execute(userId:string){
        return await this.userRepository.findUserById(userId)
    }
}