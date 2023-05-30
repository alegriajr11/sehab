import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriterioDialisisEntity } from '../criterio_dialisis.entity';
import { CriteriosDialisisService } from './criterios_dialisis.service';
import { CriteriosDialisisController } from './criterios_dialisis.controller';
import { DialisisEntity } from '../dialisis.entity';


@Module({
    imports: [TypeOrmModule.forFeature([CriterioDialisisEntity, DialisisEntity])],
    controllers: [CriteriosDialisisController],
    providers: [CriteriosDialisisService],
    exports: [CriteriosDialisisService]
})
export class CriteriosDialisisModule {}
