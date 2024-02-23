import { UserRepository } from "../../../app/repositories/user.repository";

export class FindUserByLoginUseCase{
    constructor( private userRepository:UserRepository){}

    async execute(userLogin:string){
        return await this.userRepository.getByLogin(userLogin);
    }
}