import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CriterioGestionPretransfusionalEntity } from '../criterio_gestion_pretrans.entity';
import { CriterioGestionPretransfusionalRepository } from '../criterio_gestion_pretrans.repository';
import { GestionPretransfusionalEntity } from '../gestion_pretrans.entity';
import { GestionPretransfusionalRepository } from '../gestion_pretrans.repository';
import { MessageDto } from 'src/common/message.dto';

@Injectable()
export class CriteriosGestionPretransService {
    constructor(
        @InjectRepository(CriterioGestionPretransfusionalEntity)
        private readonly criterioGestionPretransfusionalRepository: CriterioGestionPretransfusionalRepository,
        @InjectRepository(GestionPretransfusionalEntity)
        private readonly gestionPretransfusionalRepository: GestionPretransfusionalRepository,
    ) { }

   
    //LISTANDO CRITERIOS POR ESTANDAR
async getCriterioForEstandar(id: number): Promise<CriterioGestionPretransfusionalEntity[]> {
    const cri_gest_pretrasn = await this.criterioGestionPretransfusionalRepository.createQueryBuilder('criterio')
    .select(['criterio', 'gestion_pretransfusional.gestp_nombre_estandar'])
    .innerJoin('criterio.gestion_pretransfusional', 'gestion_pretransfusional')
    .where('gestion_pretransfusional.gestp_id = :dial_est', { dial_est : id})
    .getMany()
    if (!cri_gest_pretrasn) throw new NotFoundException(new MessageDto('No Existe en la lista'))
    return cri_gest_pretrasn
}
}
