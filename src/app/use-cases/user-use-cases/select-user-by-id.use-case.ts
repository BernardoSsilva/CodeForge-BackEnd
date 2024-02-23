import { UserRepository } from "../../../app/repositories/user.repository";

export class SelectUserByIdUseCase{
    constructor(private userRepository:UserRepository){}

    async execute(userId:string){
        return await this.userRepository.findUserById(userId)
    }
}