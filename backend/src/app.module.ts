import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ForeverModule } from './forever/forever.module';

@Module({
  imports: [HttpModule, ForeverModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
