import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EvaluacionIndependientesEntity } from '../evaluacion-independientes.entity';
import { EvaluacionIndependientesRepository } from '../evaluacion-independientes.repository';
import { MessageDto } from 'src/common/message.dto';

@Injectable()
export class EvaluacionIndService {

    constructor(
        @InjectRepository(EvaluacionIndependientesEntity)
        private readonly evaluacionIndRepository: EvaluacionIndependientesRepository
    ) { }

    //ENCONTRAR POR ID - FORANEA ACTA_ID
    async findByIdEvaInd(id_acta: number): Promise<EvaluacionIndependientesEntity> {
        const evaluacion_ind = await this.evaluacionIndRepository.createQueryBuilder('evaluacion')
            .select(['evaluacion'])
            .innerJoinAndSelect('evaluacion.eval_acta_ind', 'eval_acta_ind')
            .where('eval_acta_ind.id = :id_eva', { id_eva: id_acta })
            .getOne()
        if (!evaluacion_ind) {
            throw new NotFoundException(new MessageDto('La Evaluación No Existe'));
        }
        return evaluacion_ind;
    }

    //ENCONTRAR EVALUACION POR ID
    async findById(eva_id: number): Promise<EvaluacionIndependientesEntity> {
        const evaluacion_ind = await this.evaluacionIndRepository.findOne({ where: { eva_id } })
        if (!evaluacion_ind) {
            throw new NotFoundException(new MessageDto('No Existe la Evaluacion'));
        }
        return evaluacion_ind;
    }

    //LISTANDO LA ULTIMA EVALUACION REGISTRADA
    async getUltimaEvaluacion(): Promise<EvaluacionIndependientesEntity> {
        const ultima_evaluacion = await this.evaluacionIndRepository.createQueryBuilder('evaluacion')
            .select(['evaluacion'])
            .orderBy('evaluacion.eva_id', 'DESC')
            .getOne();

        if (!ultima_evaluacion) throw new NotFoundException(new MessageDto('No existe evaluación en la lista'))
        return ultima_evaluacion
    }
}
