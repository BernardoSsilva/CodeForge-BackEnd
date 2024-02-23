import { UserRepository } from "../../../app/repositories/user.repository";

export class DeleteUserUseCase{
    constructor(private userRepository:UserRepository){}

    async execute(userId:string){
        return await this.userRepository.deleteUser(userId)
    }
}