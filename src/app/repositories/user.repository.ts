import { AuthenticationDto } from 'src/infrastructure/http/controllers/user/dtos/authentication.dto';
import { UserEntity } from '../entities/user.entity';

export abstract class UserRepository {
  abstract findAllUsers(): Promise<UserEntity[]>;
  abstract findUserById(id: string): Promise<UserEntity>;
  abstract registerUser(user: UserEntity): Promise<void>;

  abstract updateUser(user: Partial<UserEntity>, userId:string): Promise<void>;
  abstract deleteUser(id: string): Promise<void>;
  abstract getByEmail(email: string): Promise<UserEntity>;
  abstract getByLogin(login: string): Promise<UserEntity>;
  abstract authenticate(authenticationInterface: AuthenticationDto):Promise<{ access_token: string }>
}
