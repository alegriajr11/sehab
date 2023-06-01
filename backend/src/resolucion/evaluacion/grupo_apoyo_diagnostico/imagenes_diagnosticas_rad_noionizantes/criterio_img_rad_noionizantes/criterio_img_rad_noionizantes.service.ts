import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CriterioImgRadNoIonizantesEntity } from '../criterio_img_rad_noionizantes.entity';
import { CriterioImgRadNoIonizanteRepository } from '../criterio_img_rad_noionizantes.repository';
import { ImgRadNoIonizantesRepository } from '../img_rad_noionizantes.repository';
import { ImgRadNoIonizantesEntity } from '../img_rad_noionizantes.entity';
import { MessageDto } from 'src/common/message.dto';

@Injectable()
export class CriterioImgRadNoionizantesService {

    constructor(
        @InjectRepository(CriterioImgRadNoIonizantesEntity)
        private readonly criterioImgRadNoIonizanteRepository: CriterioImgRadNoIonizanteRepository,
        @InjectRepository(ImgRadNoIonizantesEntity)
        private readonly imgRadNoIonizantesRepository: ImgRadNoIonizantesRepository,
    ) { }

    //LISTANDO CRITERIOS POR ESTANDAR
async getCriterioForEstandar(id: number): Promise<CriterioImgRadNoIonizantesEntity[]> {
    const cri_img_noionizantes = await this.criterioImgRadNoIonizanteRepository.createQueryBuilder('criterio')
    .select(['criterio', 'imgrad_noionizante.imgrad_noion_nombre_estandar'])
    .innerJoin('criterio.imgrad_noionizante', 'imgrad_noionizante')
    .where('imgrad_noionizante.imgrad_noion_id = :noima_est', { noima_est : id})
    .getMany()
    if (!cri_img_noionizantes) throw new NotFoundException(new MessageDto('No Existe en la lista'))
    return cri_img_noionizantes
}
}
