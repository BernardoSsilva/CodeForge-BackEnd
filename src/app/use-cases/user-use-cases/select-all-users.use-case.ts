import { UserRepository } from "../../../app/repositories/user.repository";


export class SelectAllUsersUseCase{
    constructor(private userRepository:UserRepository){}

    async execute(){
        await this.userRepository.findAllUsers();
    }
}