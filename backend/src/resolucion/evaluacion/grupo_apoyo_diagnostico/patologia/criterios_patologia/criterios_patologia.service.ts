import { Injectable, NotFoundException } from '@nestjs/common';
import { CriterioPatologiaEntity } from '../criterio_patologia.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CriterioPatologiaRepository } from '../criterio_patologia.repository';
import { PatologiaEntity } from '../patologia.entity';
import { PatologiaRepository } from '../patologia.repository';
import { MessageDto } from 'src/common/message.dto';

@Injectable()
export class CriteriosPatologiaService {

    constructor(
        @InjectRepository(CriterioPatologiaEntity)
        private readonly criterioPatologiaRepository: CriterioPatologiaRepository,
        @InjectRepository(PatologiaEntity)
        private readonly patologiaRepository: PatologiaRepository,
        ) {}


         //LISTANDO CRITERIOS POR ESTANDAR
        async getCriterioForEstandar(id: number): Promise<CriterioPatologiaEntity[]> {
            const cri_pato = await this.criterioPatologiaRepository.createQueryBuilder('criterio')
            .select(['criterio', 'patologia.pato_nombre_estandar'])
            .innerJoin('criterio.patologia', 'patologia')
            .where('patologia.pato_id = :pato_est', { pato_est : id})
            .getMany()
            if (!cri_pato) throw new NotFoundException(new MessageDto('No Existe en la lista'))
            return cri_pato
        }
}
