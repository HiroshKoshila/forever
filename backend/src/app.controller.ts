import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':name')
  getJsonInfo(@Param() params) {
    return this.appService.getJsonInfo(params);
  }
}
