import { UserEntity } from '../../../../../app/entities/user.entity';
import { User as PrismaUser} from '@prisma/client';

export class UserPresenter {
  static toHttp(user: UserEntity) {
    return {
      userId: user.id,
      userLogin: user.props.userLogin,
      userName: user.props.userName,
      userEmail: user.props.userEmail,
    };
  }
}
