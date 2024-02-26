import { Module } from '@nestjs/common';
import { DataBaseModule } from '../database/database.module';
import { CreateUserController } from './controllers/user/create.user.controller';
import { CreateUserUseCase } from 'src/app/use-cases/user-use-cases/create-user.use-case';

@Module({
  imports: [DataBaseModule],
  controllers: [CreateUserController],
  providers: [CreateUserUseCase],
  exports: [HttpModule],
})
export class HttpModule {}
