import { AuthenticationDto } from 'src/infrastructure/http/controllers/user/dtos/authentication.dto';
import { UserEntity } from '../../src/app/entities/user.entity';
import { UserRepository } from '../../src/app/repositories/user.repository';
import { BadRequestError } from '../../src/shared/errors/bad-request.error';
import { NotFoundError } from '../../src/shared/errors/not-found.error';

export class UserInMemoryRepository implements UserRepository {
  authenticate(authenticationInterface: AuthenticationDto): Promise<Boolean> {
    throw new Error('Method not implemented.');
  }
  

  public users: UserEntity[] = [];
  async findAllUsers(): Promise<UserEntity[]> {
    if (this.users.length <= 0) {
      throw new NotFoundError('No users found');
    }
    return await this.users;
  }
  async findUserById(id: string): Promise<UserEntity> {
    const user = await this.users.find((user) => user.id === id);
    if (!user) {
      throw new NotFoundError('User not found');
    }
    return user;
  }
  async registerUser(user: UserEntity): Promise<void> {
    if(!user){
      throw new BadRequestError("user is required")
    }
    await this.users.push(user);
  }
  async updateUser(user: UserEntity, userId: string): Promise<void> {
    const userToBeUpdated = await this.users.findIndex(
      (user) => user.id === userId,
    );

    if (userToBeUpdated < 0) {
      throw new NotFoundError('User not found');
    }
    this.users[userToBeUpdated] = user;
  }
  async deleteUser(id: string): Promise<void> {
    const userToBeDeleted = await this.users.findIndex(
      (user) => user.id === id,
    );

    if (userToBeDeleted < 0) {
      throw new NotFoundError('User not found');
    }
    this.users.splice(userToBeDeleted, 1);
  }
  async getByEmail(email: string): Promise<UserEntity> {
    const user = await this.users.find((user) => user.userEmail === email);

    if (!user) {
      throw new NotFoundError('User not found');
    }
    return user;
  }
  async getByLogin(login: string): Promise<UserEntity> {
    const user = await this.users.find((user) => (user.userLogin = login));

    if (!user) {
      throw new NotFoundError('User not found');
    }
    return user;
  }
}
