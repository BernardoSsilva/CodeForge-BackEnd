import { UserRepository } from '../../../app/repositories/user.repository';

export class FindUserByEmailUseCase{
    constructor(private userRepository:UserRepository){}

    async execute(userEmail:string){
        await this.userRepository.getByEmail(userEmail)    
    }
}