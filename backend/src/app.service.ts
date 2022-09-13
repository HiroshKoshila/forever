import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs';

@Injectable()
export class AppService {
  private data = {
    forever: {},
    forever2: {
      gitfollowers: 600,
    },
  };

  constructor(private httpService: HttpService) {}

  getUser(params) {
    return this.httpService
      .get(`http://registry.npmjs.org/${params.name}/latest`)
      .pipe(
        map((response) => response.data),
        map((data) => ({
          ...this.data[params.name],
          name: data.name,
          dependencies: data.dependencies,
          scripts: data.scripts.lint,
        })),
      );
  }
}
