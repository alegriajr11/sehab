import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CriteriosicEntity } from '../criteriosic.entity';
import { CriterioSicRepository } from '../criteriosic.repository';
import { EvaluacionSicEntity } from '../evaluacionsic.entity';
import { EvaluacionsicRepository } from '../evaluacionsic.repository';
import { CumplimientoSicEntity } from '../cumplimientosic.entity';
import { CumplimientoSicRepository } from '../cumplimientosic.repository';
import { CumplimientoSicDto } from 'src/usuario/dto/Sic/cumplimientosic.dto';
import { MessageDto } from 'src/common/message.dto';

@Injectable()
export class CumplimientosicService {

    constructor(
        @InjectRepository(CriteriosicEntity)
        private criterioSicRepository: CriterioSicRepository,
        @InjectRepository(EvaluacionSicEntity)
        private evaluacionsicRepository: EvaluacionsicRepository,
        @InjectRepository(CumplimientoSicEntity)
        private cumplimientoSicRepository: CumplimientoSicRepository,
    ) { }

    //CREAR CUMPLIMIENTO
    async create(eva_id: number,cri_id: number, dto: CumplimientoSicDto ): Promise<any> {
        const evaluacion = await this.evaluacionsicRepository.findOne({ where: { eva_id: eva_id } });
        if (!evaluacion) throw new NotFoundException(new MessageDto('La evaluacion no ha sido creada'))
        const criterio = await this.criterioSicRepository.findOne({ where: { cri_id: cri_id } });
        if (!criterio) throw new NotFoundException(new MessageDto('El criterio no ha sido creada'))
        const cumplimiento = this.cumplimientoSicRepository.create(dto)
        //asigna la evaluacion a la calificacion
        cumplimiento.cump_eva_sic = evaluacion
        //asigna eñ criterio a la evaluacion
        cumplimiento.criterio_sic = criterio
        await this.cumplimientoSicRepository.save(cumplimiento)
        return new MessageDto('El cumplimiento ha sido Creado');
    }
}
