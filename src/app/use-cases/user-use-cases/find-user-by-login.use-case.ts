import { Injectable } from "@nestjs/common";
import { UserRepository } from "../../../app/repositories/user.repository";

@Injectable()
export class FindUserByLoginUseCase{
    constructor( private userRepository:UserRepository){}

    async execute(userLogin:string){
        return await this.userRepository.getByLogin(userLogin);
    }
}