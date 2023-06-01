import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CriterioImgRadIonizantesEntity } from '../criterio_img_rad_ionizantes.entity';
import { CriterioImgRadIonizanteRepository } from '../criterio_img_rad_ionizantes.repository';
import { ImgRadIonizantesEntity } from '../img_rad_ionizantes.entity';
import { ImgRadIonizantesRepository } from '../img_rad_ionizantes.repository';
import { MessageDto } from 'src/common/message.dto';

@Injectable()
export class CriterioImgRadIonizantesService {
    constructor(
        @InjectRepository(CriterioImgRadIonizantesEntity)
        private readonly criterioImgRadIonizanteRepository: CriterioImgRadIonizanteRepository,
        @InjectRepository(ImgRadIonizantesEntity)
        private readonly imgRadIonizantesRepository: ImgRadIonizantesRepository,
    ) { }

        //LISTANDO CRITERIOS POR ESTANDAR
async getCriterioForEstandar(id: number): Promise<CriterioImgRadIonizantesEntity[]> {
    const cri_img_rad_ion = await this.criterioImgRadIonizanteRepository.createQueryBuilder('criterio')
    .select(['criterio', 'imgrad_ionizante.imgradion_nombre_estandar'])
    .innerJoin('criterio.imgrad_ionizante', 'imgrad_ionizante')
    .where('imgrad_ionizante.imgradion_id = :ima_est', { ima_est : id})
    .getMany()
    if (!cri_img_rad_ion) throw new NotFoundException(new MessageDto('No Existe en la lista'))
    return cri_img_rad_ion
}
}


