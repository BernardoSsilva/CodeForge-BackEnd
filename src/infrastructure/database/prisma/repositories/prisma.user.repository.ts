import { Injectable, NotFoundException } from '@nestjs/common';
import { UserEntity } from '../../../../app/entities/user.entity';
import { UserRepository } from '../../../../app/repositories/user.repository';
import { UserMapper } from '../mappers/user.mapper';
import { PrismaService } from '../prisma.service';
import { BadRequestError } from 'src/shared/errors/bad-request.error';
import { NotFoundError } from 'src/shared/errors/not-found.error';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private prisma: PrismaService) {}

  // find all users
  async findAllUsers(): Promise<UserEntity[]> {
    try {
      const result = await this.prisma.user.findMany();
      if (result.length == 0) {
        throw new BadRequestError('users not found');
      }
      return result.map((user) => UserMapper.toDomain(user));
    } catch {
      throw new Error();
    }
  }

  //find user by id
  async findUserById(id: string): Promise<UserEntity> {
    try {
      const result = await this.prisma.user.findUnique({
        where: { userId: id },
      });
      if (!result) {
        throw new BadRequestError('users not found');
      }
      return UserMapper.toDomain(result);
    } catch {
      throw new Error();
    }
  }

  // register user
  async registerUser(user: UserEntity): Promise<void> {
    try {
      console.log(user);
      const userExists = await this.prisma.user.findMany({
        where: {
          OR: [
            {
              userEmail: user.props.userEmail,
            },
            {
              userLogin: user.props.userLogin,
            },
          ],
        },
      });
      if (userExists.length > 0) {
        throw new BadRequestError('data conflict error');
      }
      await this.prisma.user.create({
        data: {
          userId: user.id,
          userEmail: user.props.userEmail,
          userLogin: user.props.userLogin,
          userName: user.props.userName,
          userPassword: user.props.userPassword,
        },
      });
    } catch {
      throw new Error();
    }
  }

  // update user
  async updateUser(user: Partial<UserEntity>, userId: string): Promise<void> {
    try {
      const userExists = await this.prisma.user.findUnique({
        where: { userId },
      });
      if (!userExists) {
        throw new BadRequestError('user not found');
      }
      await this.prisma.user.update({
        where: { userId },
        data: user,
      });
    } catch {
      throw new Error();
    }
  }

  // delete user
  async deleteUser(id: string): Promise<void> {
    try {
      const userExists = await this.prisma.user.findUnique({
        where: { userId: id },
      });
      if (!userExists) {
        throw new BadRequestError('User not found');
      }
      await this.prisma.user.delete({ where: { userId: id } });
    } catch {
      throw new Error();
    }
  }

  // get user by email
  async getByEmail(email: string): Promise<UserEntity> {
    try {
      const result = await this.prisma.user.findUnique({
        where: { userEmail: email },
      });

      if (!result) {
        throw new NotFoundException('user not found');
      }
      return UserMapper.toDomain(result);
    } catch {
      throw new Error();
    }
  }

  // get user by login
  async getByLogin(login: string): Promise<UserEntity> {
    try {
      const result = await this.prisma.user.findUnique({
        where: { userLogin: login },
      });

      if (!result) {
        throw new NotFoundException('user not found');
      }
      return UserMapper.toDomain(result);
    } catch {
      throw new Error();
    }
  }
}
