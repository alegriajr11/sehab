import { Test, TestingModule } from '@nestjs/testing';
import { AuditoriaRegistroController } from './auditoria_registro.controller';

describe('AuditoriaRegistroController', () => {
  let controller: AuditoriaRegistroController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuditoriaRegistroController],
    }).compile();

    controller = module.get<AuditoriaRegistroController>(AuditoriaRegistroController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
