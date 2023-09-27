import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CriterioIndEntity } from '../criterioind.entity';
import { CriterioIndRepository } from '../criterioind.repository';
import { CalificacionIndEntity } from '../calificacionind.entity';
import { CalificacionIndRepository } from '../calificacionind.repository';
import { EvaluacionIndependientesEntity } from '../evaluacion-independientes.entity';
import { EvaluacionIndependientesRepository } from '../evaluacion-independientes.repository';
import { calificacionindDto } from '../dto/calificacionind.dto';
import { MessageDto } from 'src/common/message.dto';

@Injectable()
export class CalificacionindService {

    constructor(
        @InjectRepository(CriterioIndEntity)
        private criterioIndRepository: CriterioIndRepository,
        @InjectRepository(EvaluacionIndependientesEntity)
        private evaluacionIndependientesRepository: EvaluacionIndependientesRepository,
        @InjectRepository(CalificacionIndEntity)
        private calificacionIndRepository: CalificacionIndRepository,
    ) { }

    //CREAR CALIFICACION
    async create(eva_id: number,cri_id: number, dto: calificacionindDto ): Promise<any> {
        const evaluacion = await this.evaluacionIndependientesRepository.findOne({ where: { eva_id: eva_id } });
        if (!evaluacion) throw new NotFoundException(new MessageDto('La evaluacion no ha sido creada'))
        const criterio = await this.criterioIndRepository.findOne({ where: { cri_id: cri_id } });
        if (!criterio) throw new NotFoundException(new MessageDto('El criterio no ha sido creada'))
        const calificacion = this.calificacionIndRepository.create(dto)
        //asigna la evaluacion a la calificacion
        calificacion.cal_evaluacion_independientes = evaluacion
        //asigna eñ criterio a la evaluacion
        calificacion.criterio_cal = criterio
        await this.calificacionIndRepository.save(calificacion)
        return new MessageDto('La calificacion ha sido Creada');
    }
}
