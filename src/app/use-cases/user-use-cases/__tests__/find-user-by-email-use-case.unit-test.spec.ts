import { FindUserByEmailUseCase } from '../find-user-by-email.use-case';
import { UserInMemoryRepository } from '../../../../../test/helpers/user-in-memory.repository';
import { UserEntity } from '../../../entities/user.entity';

describe('Find user by email unit test', () => {
  const repository = new UserInMemoryRepository();
  const findByEmail = new FindUserByEmailUseCase(repository);
  it('Should throw error if user not founded', () => {
    expect(() => findByEmail.execute('')).rejects.toThrow();
  });

  it('Should be able to find a user by email', async () => {
    const newUser = new UserEntity({
      userName: 'testName',
      userEmail: 'test@email',
      userLogin: 'testLogin',
      userPassword: 'testPassword',
      createdAt: new Date(),
    });

    repository.users = [newUser];

    const foundedUser = await findByEmail.execute('test@email');
    expect(foundedUser.userEmail).toEqual('test@email');
  });
});
