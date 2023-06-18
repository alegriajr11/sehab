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
            .where('imgrad_noionizante.imgrad_noion_id = :noima_est', { noima_est: id })
            .getMany()
        if (!cri_img_noionizantes) throw new NotFoundException(new MessageDto('No Existe en la lista'))
        return cri_img_noionizantes
    }

    //METODO AGREGAR CRITERIO-HEMODINamia
    async create(imgrad_noion_id: number, dto: CriterioImgRadNoIonizantesDto): Promise<any> {
        const imanoioni = await this.imgRadNoIonizantesRepository.findOne({ where: { imgrad_noion_id: imgrad_noion_id } });
        if (!imanoioni) throw new InternalServerErrorException(new MessageDto('El Estandar no ha sido creado'))
        //CREAMOS EL DTO PARA TRANSFERIR LOS DATOS
        const criterioimanoioni = this.criterioImgRadNoIonizanteRepository.create(dto)
        //ASIGNAMOS EL ESTANDAR AL CRITERIO
        criterioimanoioni.imgrad_noionizante = imanoioni
        //GUARDAR LOS DATOS EN LA BD
        await this.criterioImgRadNoIonizanteRepository.save(criterioimanoioni)
        return new MessageDto('El criterio ha sido Creado Correctamente');
    }

    //ENCONTRAR POR ID - CRITERIO IMAGENES DIAGNOSTICAS RAD NO IONIZANTES
    async findById(cri_img_noioni_id: number): Promise<CriterioImgRadNoIonizantesEntity> {
        const cri_ima_noioni = await this.criterioImgRadNoIonizanteRepository.findOne({ where: { cri_img_noioni_id } });
        if (!cri_ima_noioni) {
            throw new NotFoundException(new MessageDto('El Criterio No Existe'));
        }
        return cri_ima_noioni;
    }

    //ELIMINAR CRITERIO IMAGENES DIAGNOSTICAS RAD NO IONIZANTES
    async delete(id: number): Promise<any> {
        const cri_ima_noioni = await this.findById(id);
        await this.criterioImgRadNoIonizanteRepository.delete(cri_ima_noioni.cri_img_noioni_id)
        return new MessageDto(`Criterio Eliminado`);
    }

    //ACTUALIZAR CRITERIOS IMAGENES DIAGNOSTICAS RAD NO IONIZANTES
    async updateIma_Rad_Noio(id: number, dto: CriterioImgRadNoIonizantesDto): Promise<any> {
        const criterio_img_rad_noionizantes = await this.findById(id);
        if (!criterio_img_rad_noionizantes) {
            throw new NotFoundException(new MessageDto('El criterio no existe'))
        }
        dto.cri_img_noioni_modalidad ? criterio_img_rad_noionizantes.cri_img_noioni_modalidad = dto.cri_img_noioni_modalidad : criterio_img_rad_noionizantes.cri_img_noioni_modalidad = criterio_img_rad_noionizantes.cri_img_noioni_modalidad;
        dto.cri_img_noioni_complejidad ? criterio_img_rad_noionizantes.cri_img_noioni_complejidad = dto.cri_img_noioni_complejidad : criterio_img_rad_noionizantes.cri_img_noioni_complejidad = criterio_img_rad_noionizantes.cri_img_noioni_complejidad;
        criterio_img_rad_noionizantes.cri_img_noioni_articulo = dto.cri_img_noioni_articulo !== undefined ? dto.cri_img_noioni_articulo : "";
        criterio_img_rad_noionizantes.cri_img_noioni_seccion = dto.cri_img_noioni_seccion !== undefined ? dto.cri_img_noioni_seccion : "";
        criterio_img_rad_noionizantes.cri_img_noioni_apartado = dto.cri_img_noioni_apartado !== undefined ? dto.cri_img_noioni_apartado : "";
        dto.cri_img_noioni_nombre_criterio ? criterio_img_rad_noionizantes.cri_img_noioni_nombre_criterio = dto.cri_img_noioni_nombre_criterio : criterio_img_rad_noionizantes.cri_img_noioni_nombre_criterio = criterio_img_rad_noionizantes.cri_img_noioni_nombre_criterio;

        await this.criterioImgRadNoIonizanteRepository.save(criterio_img_rad_noionizantes);

        return new MessageDto(`El criterio ha sido Actualizado`);

    }
}
