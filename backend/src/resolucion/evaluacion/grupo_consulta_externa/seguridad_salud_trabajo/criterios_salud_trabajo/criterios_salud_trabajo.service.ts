import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CriterioSaludTrabajoEntity } from '../criterios_salud_trabajo.entity';
import { CriterioSaludTrabajoRepository } from '../criterios_salud_trabajo.repository';
import { SaludTrabajoRepository } from '../salud_trabajo.repository';
import { SaludTrabajoEntity } from '../salud_trabajo.entity';
import { MessageDto } from 'src/common/message.dto';

@Injectable()
export class CriteriosSaludTrabajoService {

    constructor(
        @InjectRepository(CriterioSaludTrabajoEntity)
        private readonly criterioSaludTrabajoRepository: CriterioSaludTrabajoRepository,
        @InjectRepository(SaludTrabajoEntity)
        private readonly saludTrabajoRepository: SaludTrabajoRepository ,
        ) {}


         //LISTANDO CRITERIOS POR ESTANDAR
        async getCriterioForEstandar(id: number): Promise<CriterioSaludTrabajoEntity[]> {
            const cri_sal_tra = await this.criterioSaludTrabajoRepository.createQueryBuilder('criterio')
            .select(['criterio', 'salud_trabajo.saltra_nombre_estandar'])
            .innerJoin('criterio.salud_trabajo', 'salud_trabajo')
            .where('salud_trabajo.saltra_id = :sal_tra_est', {sal_tra_est : id})
            .getMany()
            if (!cri_sal_tra) throw new NotFoundException(new MessageDto('No Existe en la lista'))
            return cri_sal_tra
        }
}
