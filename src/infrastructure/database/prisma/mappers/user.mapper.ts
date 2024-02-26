import { User as PrismaUser } from '@prisma/client';
import { UserEntity } from '../../../../app/entities/user.entity';
export class UserMapper {
  static toDomain(user: PrismaUser): UserEntity {
    const returnUserFormat = new UserEntity(user);
    returnUserFormat.id = user.userId;
    return returnUserFormat;
  }
}
