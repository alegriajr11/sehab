import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CriterioImgRadIonizantesEntity } from '../criterio_img_rad_ionizantes.entity';
import { CriterioImgRadIonizanteRepository } from '../criterio_img_rad_ionizantes.repository';
import { ImgRadIonizantesEntity } from '../img_rad_ionizantes.entity';
import { ImgRadIonizantesRepository } from '../img_rad_ionizantes.repository';
import { MessageDto } from 'src/common/message.dto';
import { CriterioImgRadIonizantesDto } from 'src/resolucion/dtos/evaluacion_dtos/grupo_apoyo_diagnostico_dtos/imagenes_diagnosticas_rad_ionizantes_dto/criterio_img_rad_ionizantes.dto';

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

//METODO AGREGAR CRITERIO-HEMODINamia
async create(imgradion_id: number, dto: CriterioImgRadIonizantesDto): Promise<any> {
    const imaioni = await this.imgRadIonizantesRepository.findOne({ where: { imgradion_id: imgradion_id} });
    if (!imaioni) throw new InternalServerErrorException(new MessageDto('El Estandar no ha sido creado'))
    //CREAMOS EL DTO PARA TRANSFERIR LOS DATOS
    const criterioimaioni = this.criterioImgRadIonizanteRepository.create(dto)
    //ASIGNAMOS EL ESTANDAR AL CRITERIO
    criterioimaioni.imgrad_ionizante = imaioni
    //GUARDAR LOS DATOS EN LA BD
    await this.criterioImgRadIonizanteRepository.save(criterioimaioni)
    return new MessageDto('El criterio ha sido Creado Correctamente');
}

//ENCONTRAR POR ID - CRITERIO IMAGENES DIAGNOSTICAS RAD IONIZANTES
async findById(cri_imgioni_id: number): Promise<CriterioImgRadIonizantesEntity> {
    const cri_ima_ioni = await this.criterioImgRadIonizanteRepository.findOne({ where: { cri_imgioni_id } });
    if (!cri_ima_ioni) {
        throw new NotFoundException(new MessageDto('El Criterio No Existe'));
    }
    return cri_ima_ioni;
}

//ELIMINAR CRITERIO IMAGENES DIAGNOSTICAS RAD IONIZANTES
async delete(id: number): Promise<any> {
    const cri_ima_ioni = await this.findById(id);
    await this.criterioImgRadIonizanteRepository.delete(cri_ima_ioni.cri_imgioni_id)
    return new MessageDto(`Criterio Eliminado`);
}
}


