import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ForeverController } from './forever.controller';
import { ForeverService } from './forever.service';

@Module({
  imports: [HttpModule],
  controllers: [ForeverController],
  providers: [ForeverService],
})
export class ForeverModule {}
