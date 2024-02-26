import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../../app/repositories/user.repository';

@Injectable()
export class DeleteUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(userId: string) {
    return await this.userRepository.deleteUser(userId);
  }
}
