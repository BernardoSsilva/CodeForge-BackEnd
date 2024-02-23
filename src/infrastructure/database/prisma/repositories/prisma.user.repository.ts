import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../../../app/repositories/user.repository';
import { UserEntity } from 'src/app/entities/user.entity';
import { PrismaService } from '../prisma.service';
import { UserMapper } from '../mappers/user.mapper';
import { error } from 'console';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private prisma: PrismaService) {}
  async findAllUsers(): Promise<UserEntity[]> {
    try {
      const result = await this.prisma.user.findMany();
      return result.map((user) => UserMapper.toDomain(user));
    } catch {
      throw new Error();
    }
  }
  async findUserById(id: string): Promise<UserEntity> {
    try {
      const result = await this.prisma.user.findUnique({
        where: { userId: id },
      });
      return UserMapper.toDomain(result);
    } catch {
      throw new Error();
    }
  }
  async registerUser(user: UserEntity): Promise<void> {
    try {
      await this.prisma.user.create({
        data: {
          userEmail: user.userEmail,
          userLogin: user.userLogin,
          userName: user.userName,
          userPassword: user.userPassword,
        },
      });
    } catch {
      throw new Error();
    }
  }
  async updateUser(user: Partial<UserEntity>, userId: string): Promise<void> {
    try {
      await this.prisma.user.update({
        where: { userId },
        data: user,
      });
    } catch {
      throw new Error();
    }
  }
  async deleteUser(id: string): Promise<void> {
    try {
      await this.prisma.user.delete({ where: { userId: id } });
    } catch {
      throw new Error();
    }
  }
  getByEmail(email: string): Promise<UserEntity> {
    throw new Error('Method not implemented.');
  }
  getByLogin(login: string): Promise<UserEntity> {
    throw new Error('Method not implemented.');
  }
}
