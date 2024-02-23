import { FindUserByLoginUseCase } from '../find-user-by-login.use-case';
import { UserInMemoryRepository } from '../../../../../test/helpers/user-in-memory.repository';
import { UserEntity } from '../../../entities/user.entity';

describe('Find user by email unit test', () => {
  const repository = new UserInMemoryRepository();
  const findByLogin = new FindUserByLoginUseCase(repository);
  it('Should throw error if user not founded', () => {
    expect(() => findByLogin.execute('')).rejects.toThrow();
  });

  it('Should be able to find a user by Login', async () => {
    const newUser = new UserEntity({
      userName: 'testName',
      userEmail: 'test@email',
      userLogin: 'testLogin',
      userPassword: 'testPassword',
      createdAt: new Date(),
    });

    repository.users = [newUser];

    const foundedUser = await findByLogin.execute('testLogin');
    expect(foundedUser.userLogin).toEqual('testLogin');
  });
});
