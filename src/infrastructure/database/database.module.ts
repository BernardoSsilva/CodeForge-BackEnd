import { Module } from '@nestjs/common';
import { CommentRepository } from 'src/app/repositories/comment.repository';
import { PostRepository } from '../../app/repositories/post.repository';
import { UserRepository } from '../../app/repositories/user.repository';
import { PrismaService } from './prisma/prisma.service';
import { PrismaCommentRepository } from './prisma/repositories/prisma.comment.repository';
import { PrismaPostRepository } from './prisma/repositories/prisma.post.repository';
import { PrismaUserRepository } from './prisma/repositories/prisma.user.repository';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: 'mysecret',
      signOptions: { expiresIn: '8h' },
    }),
  ],
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
    {
      provide: CommentRepository,
      useClass: PrismaCommentRepository,
    },
  ],

  exports: [UserRepository, DataBaseModule, PostRepository, CommentRepository],
})
export class DataBaseModule {}
