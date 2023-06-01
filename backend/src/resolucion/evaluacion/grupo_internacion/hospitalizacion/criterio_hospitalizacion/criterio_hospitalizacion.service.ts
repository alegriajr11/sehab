import { Injectable, NotFoundException } from '@nestjs/common';
import { CriterioHospitalizacionEntity } from '../criterio_hospitalizacion.entity';
import { HospitalizacionEntity } from '../hospitalizacion.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CriterioHospitalizacionRepository } from '../criterio_hospitalizacion.repository';
import { HospitalizacionRepository } from '../hospitalizacion.repository';
import { MessageDto } from 'src/common/message.dto';

@Injectable()
export class CriterioHospitalizacionService {

    constructor(
        @InjectRepository(CriterioHospitalizacionEntity)
        private readonly criterioHospitalizacionRepository: CriterioHospitalizacionRepository,
        @InjectRepository(HospitalizacionEntity)
        private readonly hospitalizacionRepository: HospitalizacionRepository,
        ) {}


         //LISTANDO CRITERIOS POR ESTANDAR
        async getCriterioForEstandar(id: number): Promise<CriterioHospitalizacionEntity[]> {
            const cri_hosp = await this.criterioHospitalizacionRepository.createQueryBuilder('criterio')
            .select(['criterio', 'hospitalizacion.hosp_nombre_estandar'])
            .innerJoin('criterio.hospitalizacion', 'hospitalizacion')
            .where('hospitalizacion.hosp_id = :hosp_est', {hosp_est : id})
            .getMany()
            if (!cri_hosp) throw new NotFoundException(new MessageDto('No Existe en la lista'))
            return cri_hosp
        }
}
