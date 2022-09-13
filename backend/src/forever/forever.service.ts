import { map } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ForeverService {
  private data = {
    dependency: {},
  };
}
