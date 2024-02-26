import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../repositories/user.repository';

@Injectable()
export class FindAllUsersUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute() {
    return await this.userRepository.findAllUsers();
  }
}
