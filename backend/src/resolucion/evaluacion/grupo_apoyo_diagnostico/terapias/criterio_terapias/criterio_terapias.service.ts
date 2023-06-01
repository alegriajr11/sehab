import { Injectable, NotFoundException } from '@nestjs/common';
import { MessageDto } from 'src/common/message.dto';
import { CriterioTerapiaEntity } from '../criterios_terapias.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TerapiasEntity } from '../terapias.entity';
import { CriterioTerapiaRepository } from '../criterios_terapias.repository';
import { TerapiaRepository } from '../terapias.repository';

@Injectable()
export class CriterioTerapiasService {


    constructor(
        @InjectRepository(CriterioTerapiaEntity)
        private readonly criterioTerapiaRepository: CriterioTerapiaRepository,
        @InjectRepository(TerapiasEntity)
        private readonly terapiaRepository: TerapiaRepository ,
        ) {}


         //LISTANDO CRITERIOS POR ESTANDAR
        async getCriterioForEstandar(id: number): Promise<CriterioTerapiaEntity[]> {
            const cri_tera = await this.criterioTerapiaRepository.createQueryBuilder('criterio')
            .select(['criterio', 'terapia.ter_nombre_estandar'])
            .innerJoin('criterio.terapia', 'terapia')
            .where('terapia.ter_id = :tera_est', { tera_est : id})
            .getMany()
            if (!cri_tera) throw new NotFoundException(new MessageDto('No Existe en la lista'))
            return cri_tera
        }
}
