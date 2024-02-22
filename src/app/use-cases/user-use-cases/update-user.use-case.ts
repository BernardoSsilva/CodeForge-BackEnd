import { UserEntity } from '../../../app/entities/user.entity';
import { UserRepository } from '../../../app/repositories/user.repository';
export class UpdateUserUseCase{
    constructor( private userRepository:UserRepository){}

    async execute(userData:UserEntity, userId:string){
        await this.userRepository.updateUser(userData, userId)
    }
}