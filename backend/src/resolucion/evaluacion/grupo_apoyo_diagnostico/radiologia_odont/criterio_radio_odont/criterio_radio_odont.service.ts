import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageDto } from 'src/common/message.dto';
import { CriterioRadiologiaOdontoEntity } from '../criterio_radio_odont.entity';
import { RadiologiaOdontoEntity } from '../radiologia_odont.entity';
import { CriterioRadiologiaOdontoRepository } from '../criterio_radio_odont.repository';
import { RadiologiaOdontoRepository } from '../radiologia_odont.repository';

@Injectable()
export class CriterioRadioOdontService {

    constructor(
        @InjectRepository(CriterioRadiologiaOdontoEntity)
        private readonly criterioRadiologiaOdontoRepository: CriterioRadiologiaOdontoRepository,
        @InjectRepository(RadiologiaOdontoEntity)
        private readonly radiologiaOdontoRepository: RadiologiaOdontoRepository,
        ) {}


         //LISTANDO CRITERIOS POR ESTANDAR
        async getCriterioForEstandar(id: number): Promise<CriterioRadiologiaOdontoEntity[]> {
            const cri_rad_odon = await this.criterioRadiologiaOdontoRepository.createQueryBuilder('criterio')
            .select(['criterio', 'rad_odontologica.rad_odont_nombre_estandar'])
            .innerJoin('criterio.rad_odontologica', 'rad_odontologica')
            .where('rad_odontologica.rad_odont_id = :odon_est', { odon_est : id})
            .getMany()
            if (!cri_rad_odon) throw new NotFoundException(new MessageDto('No Existe en la lista'))
            return cri_rad_odon
        }
}
