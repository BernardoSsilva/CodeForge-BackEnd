import { Injectable } from '@nestjs/common';
import { UserEntity } from '../../../app/entities/user.entity';
import { UserRepository } from '../../../app/repositories/user.repository';


export interface CreateUserInterface{
  userName:string,
  userLogin:string,
  userEmail:string,
  userPassword:string
}

@Injectable()
export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}
    async execute(user:CreateUserInterface){
      const { userEmail, userName, userLogin, userPassword } = user

      const createdUser = new UserEntity({
        userEmail, userName, userLogin, userPassword
      })
        return await this.userRepository.registerUser(createdUser)
    }

}
