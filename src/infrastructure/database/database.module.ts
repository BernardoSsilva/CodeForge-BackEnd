import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { UserRepository } from '../../app/repositories/user.repository';
import { PrismaUserRepository } from './prisma/repositories/prisma.user.repository';
import { PostRepository } from '../../app/repositories/post.repository';
import { PrismaPostRepository } from './prisma/repositories/prisma.post.repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: UserRepository,
      useClass: PrismaUserRepository,
    },
    {
      provide: PostRepository,
      useClass: PrismaPostRepository,
    },
  ],

  exports: [UserRepository, DataBaseModule, PostRepository],
})
export class DataBaseModule {}
