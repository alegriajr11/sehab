import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CriterioHospitalizacionMentalEntity } from '../criterio_hosp_salud_mental.entity';
import { HospitalizacionMentalEntity } from '../hosp_salud_mental.entity';
import { CriterioHospitalizacionMentalRepository } from '../criterio_hosp_salud_mental.repository';
import { HospitalizacionMentalRepository } from '../hosp_salud_mental.repository';
import { MessageDto } from 'src/common/message.dto';

@Injectable()
export class CriteriosHospSaludMentalService {

    constructor(
        @InjectRepository(CriterioHospitalizacionMentalEntity)
        private readonly criterioHospitalizacionMentalRepository: CriterioHospitalizacionMentalRepository,
        @InjectRepository(HospitalizacionMentalEntity)
        private readonly hospitalizacionMentalRepository: HospitalizacionMentalRepository,
        ) {}


         //LISTANDO CRITERIOS POR ESTANDAR
        async getCriterioForEstandar(id: number): Promise<CriterioHospitalizacionMentalEntity[]> {
            const cri_hosp_ment = await this.criterioHospitalizacionMentalRepository.createQueryBuilder('criterio')
            .select(['criterio', 'hospitalizacion_mental.hosp_mental_nombre_estandar'])
            .innerJoin('criterio.hospitalizacion_mental', 'hospitalizacion_mental')
            .where('hospitalizacion_mental.hosp_mental_id = :hosp_ment_est', {hosp_ment_est : id})
            .getMany()
            if (!cri_hosp_ment) throw new NotFoundException(new MessageDto('No Existe en la lista'))
            return cri_hosp_ment
        }
}
