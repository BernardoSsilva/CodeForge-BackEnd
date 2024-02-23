import { error } from 'console';
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

  validate()


  async validate():Promise<string[]>{
    const errors: string[] = []
    const userNameError = await this.validateUserName(this.userName)
    const userEmailError = await this.validateUserEmail(this.userEmail)
    const userLoginError = await this.validateUserLogin(this.userLogin)
    const userPasswordErrors = await this.validateUserPassword(this.userPassword)

    if(userNameError) errors.push(userNameError)
    if(userEmailError) errors.push(userEmailError)
    if(userLoginError) errors.push(userLoginError)
    if(userPasswordErrors) errors.push(userPasswordErrors)

    return errors
  }

  validateUserName(userName:string):string|null{
    if(!userName ) return "user name is required"
    if(userName.length < 1 || userName.length > 244) return "user name have a minimum length of 1 and a maximum length of 244"
    if(typeof userName !== "string") return "user name must be a string"
    return null 
  }

  validateUserEmail(userEmail:string):string|null{
    if(!userEmail) return "email is required"
    if(userEmail.length < 1 || userEmail.length > 244) return "email have a minimum length of 1 and a maximum length of 244"
    if(typeof userEmail!== "string") return "email must be a string"
    return null
  }

  validateUserLogin(userLogin:string):string|null{
    if(!userLogin) return "user Login is required"
    if(userLogin.length < 5 || userLogin.length > 244 ) return "user login bust be a length between 5 and 244 characters"
    if(typeof userLogin!== "string") return "user login must be a string"
    return null
  }

  validateUserPassword(userPassword:string): string|null{
    if(!userPassword) return "user password is required"
    if(userPassword.length < 8|| userPassword.length > 244 ) return "user password bust be a length between 8 and 244 characters"
    if(typeof userPassword!== "string") return "user password must be a string"
    return null
  }
}
