import { UserEntity } from '../../../../../app/entities/user.entity';

export class UserPresenter {
  static toHttp(user: UserEntity) {
    return {
      userId: user.id,
      userLogin: user.userLogin,
      userName: user.userName,
      userEmail: user.userEmail,
    };
  }
}
