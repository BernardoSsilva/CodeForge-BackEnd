import { UpdateUserUseCase } from './../update-user.use-case';
import { UserInMemoryRepository } from '../../../../../test/helpers/user-in-memory.repository';
import { UserEntity } from '../../../../app/entities/user.entity';

describe('Update user use case unit tests', () => {
  const repository = new UserInMemoryRepository();
  const updateUser = new UpdateUserUseCase(repository);

  it("Should be throw a error if user doesn't exists", () => {
    const newUser = new UserEntity({
      userName: 'testName',
      userEmail: 'test@email',
      userPassword: 'testPassword',
      userLogin: 'testLogin',
      createdAt: new Date(),
    });
    expect(async () => await updateUser.execute(newUser, '')).rejects.toThrow();
  });

  it('Should be able to update a user', async () => {
    const firstUserData = new UserEntity({
      userName: 'testName',
      userEmail: 'test@email',
      userPassword: 'testPassword',
      userLogin: 'testLogin',
      createdAt: new Date(),
    });

    repository.users = [firstUserData];

    expect(repository.users).toHaveLength(1);

    let secondUserData = new UserEntity({
      userName: 'testName2',
      userEmail: 'test@email2',
      userPassword: 'testPassword2',
      userLogin: 'testLogin2',
      createdAt: new Date(),
    });
    secondUserData.id = firstUserData.id;

    await updateUser.execute(secondUserData, firstUserData.id);

    expect(repository.users[0].id).toEqual(secondUserData.id);
    expect(repository.users[0].userEmail).toEqual(secondUserData.userEmail);
    expect(repository.users[0].userLogin).toEqual(secondUserData.userLogin);
    expect(repository.users[0].userName).toEqual(secondUserData.userName);
    expect(repository.users[0].userPassword).toEqual(
      secondUserData.userPassword,
    );
    expect(repository.users).toHaveLength(1);
  });
});
