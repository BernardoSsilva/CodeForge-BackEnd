import { Injectable } from '@nestjs/common';
import { UserEntity } from '../../../app/entities/user.entity';
import { UserRepository } from '../../../app/repositories/user.repository';

export interface UpdateUserInterface {
  userName?: string;
  userLogin?: string;
  userEmail?: string;
  userPassword?: string;
}

@Injectable()
export class UpdateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(userData: UpdateUserInterface, userId: string) {
    return await this.userRepository.updateUser(userData, userId);
  }
}
