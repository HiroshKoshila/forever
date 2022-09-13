import { HttpErrorFilter } from './errors/http-error.filter';
import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ForeverModule } from './forever/forever.module';
import { APP_FILTER } from '@nestjs/core';

@Module({
  imports: [HttpModule, ForeverModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: HttpErrorFilter,
    },
  ],
})
export class AppModule {}
