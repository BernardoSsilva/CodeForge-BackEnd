import { Module } from '@nestjs/common';
import { CreateCommentUseCase } from 'src/app/use-cases/comment-use-cases/create-comment.use-case';
import { GetAllCommentsUseCase } from 'src/app/use-cases/comment-use-cases/get-all-comments.use-case';
import { CreatePostUseCase } from 'src/app/use-cases/posts-use-cases/create-post.use-case';
import { DeletePostUseCase } from 'src/app/use-cases/posts-use-cases/delete-post.use-case';
import { FindAllPostsFromUserUseCase } from 'src/app/use-cases/posts-use-cases/find-all-posts-from-user.use-case';
import { FindAllPostsUseCase } from 'src/app/use-cases/posts-use-cases/find-all-posts.use-case';
import { FindPostByIdUseCase } from 'src/app/use-cases/posts-use-cases/find-post-by-id.use-case';
import { UpdatePostUseCase } from 'src/app/use-cases/posts-use-cases/update-post.use-case';
import { CreateUserUseCase } from 'src/app/use-cases/user-use-cases/create-user.use-case';
import { DeleteUserUseCase } from 'src/app/use-cases/user-use-cases/delete-user.use-case';
import { FindAllUsersUseCase } from 'src/app/use-cases/user-use-cases/find-all-users.use-case';
import { FindUserByEmailUseCase } from 'src/app/use-cases/user-use-cases/find-user-by-email.use-case';
import { FindUserByIdUseCase } from 'src/app/use-cases/user-use-cases/find-user-by-id.use-case';
import { FindUserByLoginUseCase } from 'src/app/use-cases/user-use-cases/find-user-by-login.use-case';
import { UpdateUserUseCase } from 'src/app/use-cases/user-use-cases/update-user.use-case';
import { DataBaseModule } from '../database/database.module';
import { GetAllCommentsController } from './controllers/comment/get-all-comments.controller';
import { PostCommentController } from './controllers/comment/post-comment.controller';
import { CreatePostController } from './controllers/posts/create-post.controller';
import { DeletePostController } from './controllers/posts/delete-post.controller';
import { FindAllPostsFromUserController } from './controllers/posts/find-all-posts-from-user.controller';
import { FIndAllPostsController } from './controllers/posts/find-all-posts.controller';
import { FindPostByIdController } from './controllers/posts/find-post-by-id.controller';
import { UpdatePostController } from './controllers/posts/update-post.controller';
import { CreateUserController } from './controllers/user/create-user.controller';
import { DeleteUserController } from './controllers/user/delete-user.controller';
import { FindAllUsersController } from './controllers/user/find-all.users.controller';
import { FindUserByEmailController } from './controllers/user/find-user-by-email.controller';
import { FindUserByIdController } from './controllers/user/find-user-by-id.controller';
import { FindUserByLoginController } from './controllers/user/find-user-by-login.controller';
import { UpdateUserController } from './controllers/user/update-user.controller';
import { GetCommentByIdController } from './controllers/comment/get-comment-by-id.controller';
import { GetCommentByIdUseCase } from 'src/app/use-cases/comment-use-cases/get-comment-by-id.use-case';

@Module({
  imports: [DataBaseModule],
  controllers: [
    CreateUserController,
    FindAllUsersController,
    FindUserByIdController,
    FindUserByEmailController,
    FindUserByLoginController,
    DeleteUserController,
    UpdateUserController,

    // posts

    CreatePostController,
    FIndAllPostsController,
    FindPostByIdController,
    FindAllPostsFromUserController,
    UpdatePostController,
    DeletePostController,

    // comments

    PostCommentController,
    GetAllCommentsController,
    GetCommentByIdController,
  ],
  providers: [
    CreateUserUseCase,
    FindAllUsersUseCase,
    FindUserByIdUseCase,
    FindUserByEmailUseCase,
    FindUserByLoginUseCase,
    DeleteUserUseCase,
    UpdateUserUseCase,

    //posts

    CreatePostUseCase,
    FindAllPostsUseCase,
    FindPostByIdUseCase,
    FindAllPostsFromUserUseCase,
    UpdatePostUseCase,
    DeletePostUseCase,

    //comments
    CreateCommentUseCase,
    GetAllCommentsUseCase,
    GetCommentByIdUseCase,
  ],

  exports: [HttpModule],
})
export class HttpModule {}
