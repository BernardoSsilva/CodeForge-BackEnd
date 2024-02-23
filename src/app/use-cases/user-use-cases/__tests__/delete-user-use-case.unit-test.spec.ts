import { DeleteUserUseCase } from './../delete-user.use-case';
import { UserEntity } from '../../../../app/entities/user.entity';
import { UserInMemoryRepository } from '../../../../../test/helpers/user-in-memory.repository';

describe('Delete user use case unit tests', () => {
  const repository = new UserInMemoryRepository();
  const deleteUser = new DeleteUserUseCase(repository);
  it("Should throw an error if user doesn't exists", () => {
    expect(async () => await deleteUser.execute('')).rejects.toThrow();
  });

  it('Should be able to delete a user', async () => {
    const newUser = new UserEntity({
      createdAt: new Date(),
      userEmail: 'testEmail',
      userLogin: 'testLogin',
      userPassword: 'testPassword',
      userName: 'testName',
    });

    repository.users = [newUser];

    expect(repository.users).toHaveLength(1);

    await deleteUser.execute(newUser.id);

    expect(repository.users).toHaveLength(0);
  });
});
