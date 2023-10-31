import { Test, TestingModule } from '@nestjs/testing';
import { EvaluacionpamecService } from './evaluacionpamec.service';

describe('EvaluacionpamecService', () => {
  let service: EvaluacionpamecService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EvaluacionpamecService],
    }).compile();

    service = module.get<EvaluacionpamecService>(EvaluacionpamecService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
