import { User as PrismaUser } from '@prisma/client';
import { UserEntity } from '../../../../app/entities/user.entity';
export class UserMapper {
  static toDomain(user: PrismaUser): UserEntity {
    return new UserEntity(user, user.userId);
  }
}
