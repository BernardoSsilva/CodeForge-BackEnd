import { Entity } from '../../shared/entities/entity';

export type UserProps = {
  userName: string;
  userEmail: string;
  userLogin: string;
  userPassword: string;
  createdAt: Date;
};

export class UserEntity extends Entity<UserProps> {
  get userName(): string {
    return this.props.userName;
  }
  get userEmail(): string {
    return this.props.userEmail;
  }
  get userLogin(): string {
    return this.props.userLogin;
  }
  get userPassword(): string {
    return this.props.userPassword;
  }
  get createdAt(): Date {
    return this.props.createdAt;
  }
  set userName(value: string) {
    this.props.userName = value;
  }
  set userEmail(value: string) {
    this.props.userEmail = value;
  }
  set userLogin(value: string) {
    this.props.userLogin = value;
  }
  set userPassword(value: string) {
    this.props.userPassword = value;
  }
}
