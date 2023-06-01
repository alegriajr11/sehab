import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CriterioHospitalizacionParcialEntity } from '../criterio_hosp_parcial.entity';
import { HospitalizacionParcialEntity } from '../hospitalizacion_parcial.entity';
import { CriterioHospitalizacionParcialRepository } from '../criterio_hosp_parcial.repository';
import { HospitalizacionParcialRepository } from '../hospitalizacion_parcial.repository';
import { MessageDto } from 'src/common/message.dto';

@Injectable()
export class CriteriosHospParcialService {

    constructor(
        @InjectRepository(CriterioHospitalizacionParcialEntity)
        private readonly criterioHospitalizacionParcialRepository: CriterioHospitalizacionParcialRepository,
        @InjectRepository(HospitalizacionParcialEntity)
        private readonly hospitalizacionParcialRepository: HospitalizacionParcialRepository,
        ) {}


         //LISTANDO CRITERIOS POR ESTANDAR
        async getCriterioForEstandar(id: number): Promise<CriterioHospitalizacionParcialEntity[]> {
            const cri_hos_par = await this.criterioHospitalizacionParcialRepository.createQueryBuilder('criterio')
            .select(['criterio', 'hospitalizacion_parcial.hosp_parc_nombre_estandar'])
            .innerJoin('criterio.hospitalizacion_parcial', 'hospitalizacion_parcial')
            .where('hospitalizacion_parcial.hosp_parc__id = :hos_par_est', {hos_par_est : id})
            .getMany()
            if (!cri_hos_par) throw new NotFoundException(new MessageDto('No Existe en la lista'))
            return cri_hos_par
        }
}
