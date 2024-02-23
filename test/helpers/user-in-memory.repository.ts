import { NotFoundError } from '../../src/shared/errors/not-found.error';
import { UserEntity } from '../../src/app/entities/user.entity';
import { UserRepository } from '../../src/app/repositories/user.repository';

export class UserInMemoryRepository implements UserRepository {
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

    if (!userToBeDeleted) {
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
