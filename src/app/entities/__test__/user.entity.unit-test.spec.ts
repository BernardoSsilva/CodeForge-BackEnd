import { UserEntity } from '../user.entity';

describe('User entity unit tests', () => {
  it('Should create a new user entity', () => {
    const newUser = new UserEntity({
      userName: 'test Name',
      userEmail: 'test@email',
      userLogin: 'testLogin',
      userPassword: 'testPassword',
      createdAt: new Date(),
    });

    expect(newUser.id).toBeDefined();
    expect(newUser.userName).toEqual('test Name');
    expect(newUser.userEmail).toEqual('test@email');
    expect(newUser.userLogin).toEqual('testLogin');
    expect(newUser.userPassword).toEqual('testPassword');
    expect(newUser.createdAt).toBeInstanceOf(Date);
  });
});
