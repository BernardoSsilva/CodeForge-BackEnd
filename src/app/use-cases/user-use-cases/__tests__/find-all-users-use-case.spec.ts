import { UserEntity } from '../../../../app/entities/user.entity';
import { UserInMemoryRepository } from '../../../../../test/helpers/user-in-memory.repository';
import { GetAllUsersUseCase } from '../select-all-users.use-case';
describe('Find all users use case unit tests', () => {
  const userRepository = new UserInMemoryRepository();
  const findAllUsers = new GetAllUsersUseCase(userRepository);

  it('Should be able to find all users', async () => {
    const newUser = new UserEntity({
      createdAt: new Date(),
      userEmail: 'testEmail',
      userLogin: 'testLogin',
      userPassword: 'testPassword',
      userName: 'testName',
    });

    userRepository.users = [newUser];

    const result = await findAllUsers.execute();

    expect(result).toBeDefined();
    expect(result).toHaveLength(1);
  });

  it('Should throw error if users not founded', () => {
    userRepository.users.splice(0, 1);

    expect(() => findAllUsers.execute()).rejects.toThrow();
  });
});
