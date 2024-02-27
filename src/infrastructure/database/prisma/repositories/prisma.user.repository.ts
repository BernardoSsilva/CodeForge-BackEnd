import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { BadRequestError } from 'src/shared/errors/bad-request.error';
import { UserEntity } from '../../../../app/entities/user.entity';
import { UserRepository } from '../../../../app/repositories/user.repository';
import { UserMapper } from '../mappers/user.mapper';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  // find all users
  async findAllUsers(): Promise<UserEntity[]> {
    try {
      const result = await this.prisma.user.findMany();
      if (result.length == 0) {
        throw new BadRequestError('users not found');
      }
      return result.map((user) => UserMapper.toDomain(user));
    } catch {
      throw new BadRequestException("Bad request");
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
      throw new BadRequestException("Bad request");
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
      throw new BadRequestException("Bad request");
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
      throw new BadRequestException("Bad request");
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
      throw new BadRequestException("Bad request");
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
      throw new BadRequestException("Bad request");
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
      throw new BadRequestException("Bad request");
    }
  }

  // authenticate

  async authenticate(authenticationBody): Promise<{ access_token: string }> {
    console.log(authenticationBody);
    const userExists = await this.prisma.user.findUnique({
      where: { userLogin: authenticationBody.userLogin },
    });
    if (!userExists) {
      throw new NotFoundException('User not found');
    }

    const premisedPassword = await bcrypt.compareSync(
      authenticationBody.userPassword,
      userExists.userPassword,
    );
    if (!premisedPassword) {
      throw new UnauthorizedException('Unauthorized');
    }

    const jwtPayload = { userId: userExists.userId };

    return {
      access_token: await this.jwtService.signAsync(jwtPayload),
    };
  }
}
