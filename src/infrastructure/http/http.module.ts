import { Module } from '@nestjs/common';
import { CreateUserUseCase } from 'src/app/use-cases/user-use-cases/create-user.use-case';
import { FindAllUsersUseCase } from 'src/app/use-cases/user-use-cases/find-all-users.use-case';
import { FindUserByIdUseCase } from 'src/app/use-cases/user-use-cases/find-user-by-id.use-case';
import { DataBaseModule } from '../database/database.module';
import { CreateUserController } from './controllers/user/create.user.controller';
import { FindAllUsersController } from './controllers/user/find-all.users.controller';
import { FindUserByIdController } from './controllers/user/find-user-by-id.controller';
import { FindUserByEmailController } from './controllers/user/find-user-by-email.controller';
import { FindUserByEmailUseCase } from 'src/app/use-cases/user-use-cases/find-user-by-email.use-case';

@Module({
  imports: [DataBaseModule],
  controllers: [
    CreateUserController,
    FindAllUsersController,
    FindUserByIdController,
    FindUserByEmailController,
  ],
  providers: [
    CreateUserUseCase,
    FindAllUsersUseCase,
    FindUserByIdUseCase,
    FindUserByEmailUseCase,
  ],
  exports: [HttpModule],
})
export class HttpModule {}
