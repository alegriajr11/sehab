import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CriterioHospitCronicoEntity } from '../criterio_hosp_paciente_cron.entity';
import { HospitalizacionCronicoEntity } from '../hospi_paciente_cronico.entity';
import { CriterioHospitCronicoRepository } from '../criterio_hosp_paciente_cron.repository';
import { HospitalizacionCronicoRepository } from '../hospi_paciente_cronico.repository';
import { MessageDto } from 'src/common/message.dto';

@Injectable()
export class CriteriosHospPacienteCronicoService {

    constructor(
        @InjectRepository(CriterioHospitCronicoEntity)
        private readonly criterioHospitCronicoRepository: CriterioHospitCronicoRepository,
        @InjectRepository(HospitalizacionCronicoEntity)
        private readonly hospitalizacionCronicoRepository: HospitalizacionCronicoRepository,
        ) {}


         //LISTANDO CRITERIOS POR ESTANDAR
        async getCriterioForEstandar(id: number): Promise<CriterioHospitCronicoEntity[]> {
            const cri_hosp_cro = await this.criterioHospitCronicoRepository.createQueryBuilder('criterio')
            .select(['criterio', 'hospit_cronico.hosp_cron_nombre_estandar'])
            .innerJoin('criterio.hospit_cronico', 'hospit_cronico')
            .where('hospit_cronico.hosp_cron_id = :hosp_cro_est', {hosp_cro_est : id})
            .getMany()
            if (!cri_hosp_cro) throw new NotFoundException(new MessageDto('No Existe en la lista'))
            return cri_hosp_cro
        }
}
