import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CriterioVacunacionEntity } from '../criterio_vacunacion.entity';
import { VacunacionEntity } from '../vacunacion.entity';
import { CriterioVacunacionRepository } from '../criterio_vacunacion.repository';
import { VacunacionRepository } from '../vacunacion.repository';
import { MessageDto } from 'src/common/message.dto';

@Injectable()
export class CriteriosVacunacionService {

    constructor(
        @InjectRepository(CriterioVacunacionEntity)
        private readonly criterioVacunacionRepository: CriterioVacunacionRepository,
        @InjectRepository(VacunacionEntity)
        private readonly vacunacionRepository: VacunacionRepository ,
        ) {}


         //LISTANDO CRITERIOS POR ESTANDAR
        async getCriterioForEstandar(id: number): Promise<CriterioVacunacionEntity[]> {
            const cri_vacu = await this.criterioVacunacionRepository.createQueryBuilder('criterio')
            .select(['criterio', 'vacunacion.vac_nombre_estandar'])
            .innerJoin('criterio.vacunacion', 'vacunacion')
            .where('vacunacion.vac_id = :vacu_est', {vacu_est : id})
            .getMany()
            if (!cri_vacu) throw new NotFoundException(new MessageDto('No Existe en la lista'))
            return cri_vacu
        }
}
