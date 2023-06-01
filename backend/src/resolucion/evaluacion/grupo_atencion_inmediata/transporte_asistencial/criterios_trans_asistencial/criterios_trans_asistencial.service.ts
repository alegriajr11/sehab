import { Injectable, NotFoundException } from '@nestjs/common';
import { CriterioTranspAsistencialEntity } from '../criterio_trans_asistencial.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TranspAsistencialEntity } from '../transporte_asistencial.entity';
import { TranspAsistencialRepository } from '../transporte_asistencial.repository';
import { CriterioTranspAsistencialRepository } from '../criterio_trans_asistencial.repository';
import { MessageDto } from 'src/common/message.dto';

@Injectable()
export class CriteriosTransAsistencialService {

    constructor(
        @InjectRepository(CriterioTranspAsistencialEntity)
        private readonly criterioTranspAsistencialRepository: CriterioTranspAsistencialRepository,
        @InjectRepository(TranspAsistencialEntity)
        private readonly transpAsistencialRepository: TranspAsistencialRepository ,
        ) {}


         //LISTANDO CRITERIOS POR ESTANDAR
        async getCriterioForEstandar(id: number): Promise<CriterioTranspAsistencialEntity[]> {
            const cri_trans_asis = await this.criterioTranspAsistencialRepository.createQueryBuilder('criterio')
            .select(['criterio', 'transp_asistencial.trans_asis_nombre_estandar'])
            .innerJoin('criterio.transp_asistencial', 'transp_asistencial')
            .where('transp_asistencial.trans_asis_id = :asis_est', { asis_est : id})
            .getMany()
            if (!cri_trans_asis) throw new NotFoundException(new MessageDto('No Existe en la lista'))
            return cri_trans_asis
        }
}
