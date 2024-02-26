import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../../app/repositories/user.repository';

@Injectable()
export class FindUserByEmailUseCase{
    constructor(private userRepository:UserRepository){}

    async execute(userEmail:string){
        return await this.userRepository.getByEmail(userEmail)    
    }
}