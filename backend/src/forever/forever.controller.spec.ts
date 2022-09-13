import { Test, TestingModule } from '@nestjs/testing';
import { ForeverController } from './forever.controller';

describe('ForeverController', () => {
  let controller: ForeverController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ForeverController],
    }).compile();

    controller = module.get<ForeverController>(ForeverController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
