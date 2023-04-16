/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { CriterioTerapiasService } from './criterio_terapias.service';

@Module({
    providers: [CriterioTerapiasService]
})
export class CriterioTerapiasModule {}
