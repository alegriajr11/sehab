import { Test, TestingModule } from '@nestjs/testing';
import { EvaluacionpamecController } from './evaluacionpamec.controller';

describe('EvaluacionpamecController', () => {
  let controller: EvaluacionpamecController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EvaluacionpamecController],
    }).compile();

    controller = module.get<EvaluacionpamecController>(EvaluacionpamecController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
