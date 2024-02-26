import { Module } from '@nestjs/common';
import { DataBaseModule } from '../database/database.module';
import { CreateUserController } from './controllers/user/create.user.controller';
import { CreateUserUseCase } from 'src/app/use-cases/user-use-cases/create-user.use-case';
import { FindAllUsersController } from './controllers/user/find-all.users.controller';
import { FindAllUsersUseCase } from 'src/app/use-cases/user-use-cases/find-all-users.use-case';

@Module({
  imports: [DataBaseModule],
  controllers: [CreateUserController, FindAllUsersController],
  providers: [CreateUserUseCase, FindAllUsersUseCase],
  exports: [HttpModule],
})
export class HttpModule {}
