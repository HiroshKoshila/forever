import { ForeverService } from './forever.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('forever')
export class ForeverController {
  constructor(private foreverService: ForeverService) {}
}
