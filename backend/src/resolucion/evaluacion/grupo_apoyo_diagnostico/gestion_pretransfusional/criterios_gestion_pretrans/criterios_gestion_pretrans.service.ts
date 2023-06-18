import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CriterioGestionPretransfusionalEntity } from '../criterio_gestion_pretrans.entity';
import { CriterioGestionPretransfusionalRepository } from '../criterio_gestion_pretrans.repository';
import { GestionPretransfusionalEntity } from '../gestion_pretrans.entity';
import { GestionPretransfusionalRepository } from '../gestion_pretrans.repository';
import { MessageDto } from 'src/common/message.dto';
import { CriterioGestionPretransfusionalDto } from 'src/resolucion/dtos/evaluacion_dtos/grupo_apoyo_diagnostico_dtos/gestion_pretransfusional_dto/criterio_gestion_pretrans.dto';

@Injectable()
export class CriteriosGestionPretransService {
    constructor(
        @InjectRepository(CriterioGestionPretransfusionalEntity)
        private readonly criterioGestionPretransfusionalRepository: CriterioGestionPretransfusionalRepository,
        @InjectRepository(GestionPretransfusionalEntity)
        private readonly gestionPretransfusionalRepository: GestionPretransfusionalRepository,
    ) { }

    //LISTANDO CRITERIOS POR ESTANDAR
    async getCriterioForEstandar(id: number): Promise<CriterioGestionPretransfusionalEntity[]> {
        const cri_gest_pretrasn = await this.criterioGestionPretransfusionalRepository.createQueryBuilder('criterio')
            .select(['criterio', 'gestion_pretransfusional.gestp_nombre_estandar'])
            .innerJoin('criterio.gestion_pretransfusional', 'gestion_pretransfusional')
            .where('gestion_pretransfusional.gestp_id = :dial_est', { dial_est: id })
            .getMany()
        if (!cri_gest_pretrasn) throw new NotFoundException(new MessageDto('No Existe en la lista'))
        return cri_gest_pretrasn
    }


    //METODO AGREGAR CRITERIO-GESTION PRETRANS
    async create(gestp_id: number, dto: CriterioGestionPretransfusionalDto): Promise<any> {
        const gestionpretans = await this.gestionPretransfusionalRepository.findOne({ where: { gestp_id: gestp_id } });
        if (!gestionpretans) throw new InternalServerErrorException(new MessageDto('El Estandar no ha sido creado'))
        //CREAMOS EL DTO PARA TRANSFERIR LOS DATOS
        const criteriogestionpretans = this.criterioGestionPretransfusionalRepository.create(dto)
        //ASIGNAMOS EL ESTANDAR AL CRITERIO
        criteriogestionpretans.gestion_pretransfusional = gestionpretans
        //GUARDAR LOS DATOS EN LA BD
        await this.criterioGestionPretransfusionalRepository.save(criteriogestionpretans)
        return new MessageDto('El criterio ha sido Creado Correctamente');
    }

    //ENCONTRAR POR ID - CRITERIO PRETANSFUNCIONAL
    async findById(crigestpre_id: number): Promise<CriterioGestionPretransfusionalEntity> {
        const cri_pre_trans = await this.criterioGestionPretransfusionalRepository.findOne({ where: { crigestpre_id } });
        if (!cri_pre_trans) {
            throw new NotFoundException(new MessageDto('El Criterio No Existe'));
        }
        return cri_pre_trans;
    }

    //ELIMINAR CRITERIO PRETANSFUNCIONAL
    async delete(id: number): Promise<any> {
        const cri_pretrans = await this.findById(id);
        await this.criterioGestionPretransfusionalRepository.delete(cri_pretrans.crigestpre_id)
        return new MessageDto(`Criterio Eliminado`);
    }

    //ACTUALIZAR CRITERIOS PRETRANSFUNSIONAL
    async updateGestion(id: number, dto: CriterioGestionPretransfusionalDto): Promise<any> {
        const criterio_gestion_pretrans = await this.findById(id);
        if (!criterio_gestion_pretrans) {
            throw new NotFoundException(new MessageDto('El criterio no existe'))
        }
        dto.crigestpre_modalidad ? criterio_gestion_pretrans.crigestpre_modalidad = dto.crigestpre_modalidad : criterio_gestion_pretrans.crigestpre_modalidad = criterio_gestion_pretrans.crigestpre_modalidad;
        dto.crigestpre_complejidad ? criterio_gestion_pretrans.crigestpre_complejidad = dto.crigestpre_complejidad : criterio_gestion_pretrans.crigestpre_complejidad = criterio_gestion_pretrans.crigestpre_complejidad;
        criterio_gestion_pretrans.crigestpre_articulo = dto.crigestpre_articulo !== undefined ? dto.crigestpre_articulo : "";
        criterio_gestion_pretrans.crigestpre_seccion = dto.crigestpre_seccion !== undefined ? dto.crigestpre_seccion : "";
        criterio_gestion_pretrans.crigestpre_apartado = dto.crigestpre_apartado !== undefined ? dto.crigestpre_apartado : "";
        dto.crigestpre_nombre_criterio ? criterio_gestion_pretrans.crigestpre_nombre_criterio = dto.crigestpre_nombre_criterio : criterio_gestion_pretrans.crigestpre_nombre_criterio = criterio_gestion_pretrans.crigestpre_nombre_criterio;

        await this.criterioGestionPretransfusionalRepository.save(criterio_gestion_pretrans);

        return new MessageDto(`El criterio ha sido Actualizado`);

    }
}
