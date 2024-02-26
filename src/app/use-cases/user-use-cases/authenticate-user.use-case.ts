import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../../app/repositories/user.repository';


export interface AuthenticationInterface{
    userLogin:string,
    userPassword:string
}

@Injectable()
export class AuthenticateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(authenticationInterface:AuthenticationInterface) {
    return await this.userRepository.authenticate(authenticationInterface);
  }
}
