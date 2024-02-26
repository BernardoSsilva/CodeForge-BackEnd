import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from './infrastructure/http/http.module';
import { DataBaseModule } from './infrastructure/database/database.module';

@Module({
  imports: [HttpModule, DataBaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
