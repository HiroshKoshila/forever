import { Module } from '@nestjs/common';
import { ForeverController } from './forever.controller';
import { ForeverService } from './forever.service';

@Module({
  controllers: [ForeverController],
  providers: [ForeverService]
})
export class ForeverModule {}
