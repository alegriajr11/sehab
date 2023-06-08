import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CriterioImgRadNoIonizantesEntity } from '../criterio_img_rad_noionizantes.entity';
import { CriterioImgRadNoIonizanteRepository } from '../criterio_img_rad_noionizantes.repository';
import { ImgRadNoIonizantesRepository } from '../img_rad_noionizantes.repository';
import { ImgRadNoIonizantesEntity } from '../img_rad_noionizantes.entity';
import { MessageDto } from 'src/common/message.dto';
import { CriterioImgRadNoIonizantesDto } from 'src/resolucion/dtos/evaluacion_dtos/grupo_apoyo_diagnostico_dtos/imagenes_diagnosticas_rad_noionizantes_dto/criterio_img_rad_noionizantes.dto';

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

//METODO AGREGAR CRITERIO-HEMODINamia
async create(imgrad_noion_id: number, dto: CriterioImgRadNoIonizantesDto): Promise<any> {
    const imanoioni = await this.imgRadNoIonizantesRepository.findOne({ where: { imgrad_noion_id: imgrad_noion_id} });
    if (!imanoioni) throw new InternalServerErrorException(new MessageDto('El Estandar no ha sido creado'))
    //CREAMOS EL DTO PARA TRANSFERIR LOS DATOS
    const criterioimanoioni = this.criterioImgRadNoIonizanteRepository.create(dto)
    //ASIGNAMOS EL ESTANDAR AL CRITERIO
    criterioimanoioni.imgrad_noionizante = imanoioni
    //GUARDAR LOS DATOS EN LA BD
    await this.criterioImgRadNoIonizanteRepository.save(criterioimanoioni)
    return new MessageDto('El criterio ha sido Creado Correctamente');
}
}
