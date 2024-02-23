import { UserRepository } from "../../repositories/user.repository";


export class FindAllUsersUseCase{
    constructor(private userRepository:UserRepository){}

    async execute(){
        return await this.userRepository.findAllUsers();
    }
}