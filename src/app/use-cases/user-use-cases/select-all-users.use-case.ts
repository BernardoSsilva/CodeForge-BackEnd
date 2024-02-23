import { UserRepository } from "../../../app/repositories/user.repository";


export class GetAllUsersUseCase{
    constructor(private userRepository:UserRepository){}

    async execute(){
        return await this.userRepository.findAllUsers();
    }
}