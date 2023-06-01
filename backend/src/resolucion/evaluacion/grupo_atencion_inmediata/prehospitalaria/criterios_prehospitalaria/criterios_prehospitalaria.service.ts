import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CriterioPrehospitalariaEntity } from '../criterio_prehospitalaria.entity';
import { PrehospitalariaEntity } from '../prehospitalaria.entity';
import { PrehospitalariaRepository } from '../prehospitalaria.repository';
import { CriterioPrehospitalariaRepository } from '../criterio_prehospitalaria.repository';
import { MessageDto } from 'src/common/message.dto';

@Injectable()
export class CriteriosPrehospitalariaService {

    constructor(
        @InjectRepository(CriterioPrehospitalariaEntity)
        private readonly criterioPrehospitalariaRepository: CriterioPrehospitalariaRepository,
        @InjectRepository(PrehospitalariaEntity)
        private readonly prehospitalariaRepository: PrehospitalariaRepository ,
        ) {}


         //LISTANDO CRITERIOS POR ESTANDAR
        async getCriterioForEstandar(id: number): Promise<CriterioPrehospitalariaEntity[]> {
            const cri_prehos = await this.criterioPrehospitalariaRepository.createQueryBuilder('criterio')
            .select(['criterio', 'prehospitalaria.parto_nombre_estandar'])
            .innerJoin('criterio.prehospitalaria', 'prehospitalaria')
            .where('prehospitalaria.parto_id = :prehos_est', { prehos_est : id})
            .getMany()
            if (!cri_prehos) throw new NotFoundException(new MessageDto('No Existe en la lista'))
            return cri_prehos
        }
}
