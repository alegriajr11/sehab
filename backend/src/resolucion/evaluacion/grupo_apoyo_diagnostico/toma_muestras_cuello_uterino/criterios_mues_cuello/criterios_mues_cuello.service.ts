import { Injectable, NotFoundException } from '@nestjs/common';
import { CriterioCuelloUterinoEntity } from '../criterio_tom_muest_cuello.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CuelloUterinoEntity } from '../tom_muestras_cuello_uter.entity';
import { CriterioCuelloUterinoRepository } from '../criterio_tom_muest_cuello.repository';
import { CuelloUterinoRepository } from '../tom_muestras_cuello_uter.repository';
import { MessageDto } from 'src/common/message.dto';

@Injectable()
export class CriteriosMuesCuelloService {

    constructor(
        @InjectRepository(CriterioCuelloUterinoEntity)
        private readonly criterioCuelloUterinoRepository: CriterioCuelloUterinoRepository,
        @InjectRepository(CuelloUterinoEntity)
        private readonly cuelloUterinoRepository: CuelloUterinoRepository ,
        ) {}


         //LISTANDO CRITERIOS POR ESTANDAR
        async getCriterioForEstandar(id: number): Promise<CriterioCuelloUterinoEntity[]> {
            const cri_cuello = await this.criterioCuelloUterinoRepository.createQueryBuilder('criterio')
            .select(['criterio', 'cue_uterino.cuel_ute_nombre_estandar'])
            .innerJoin('criterio.cue_uterino', 'cue_uterino')
            .where('cue_uterino.cuel_ute_id = :uteri_est', { uteri_est : id})
            .getMany()
            if (!cri_cuello) throw new NotFoundException(new MessageDto('No Existe en la lista'))
            return cri_cuello
        }
}
