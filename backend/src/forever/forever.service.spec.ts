import { Test, TestingModule } from '@nestjs/testing';
import { ForeverService } from './forever.service';

describe('ForeverService', () => {
  let service: ForeverService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ForeverService],
    }).compile();

    service = module.get<ForeverService>(ForeverService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
