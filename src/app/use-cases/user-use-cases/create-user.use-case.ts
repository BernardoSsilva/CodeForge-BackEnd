import { UserEntity } from '../../../app/entities/user.entity';
import { UserRepository } from '../../../app/repositories/user.repository';

export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}
    async execute(user:UserEntity){
        await this.userRepository.registerUser(user)
    }

}
