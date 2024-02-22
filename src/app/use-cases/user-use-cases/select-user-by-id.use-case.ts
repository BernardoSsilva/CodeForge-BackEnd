import { UserRepository } from "src/app/repositories/user.repository";

export class SelectUserByIdUseCase{
    constructor(private userRepository:UserRepository){}

    async execute(userId:string){
        await this.userRepository.findUserById(userId)
    }
}