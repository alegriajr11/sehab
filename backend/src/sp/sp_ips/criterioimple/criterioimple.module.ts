import { Module } from '@nestjs/common';
import { CriterioimpleService } from './criterioimple.service';
import { CriterioimpleController } from './criterioimple.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriterioImplementacionEntity } from '../criterioimplementacion.entity';


@Module({
  imports: [TypeOrmModule.forFeature([CriterioImplementacionEntity])],
  providers: [CriterioimpleService],
  controllers: [CriterioimpleController]
})
export class CriterioimpleModule {}
