import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CriterioCuidIntePediatricoEntity } from '../criterio_cuid_intens_pediatrico.entity';
import { CuidIntePediatricoEntity } from '../cuid_intens_pediatrico.entity';
import { CriterioCuidIntePediatricoRepository } from '../criterio_cuid_intens_pediatrico.repository';
import { CuidIntePediatricoRepository } from '../cuid_intens_pediatrico.repository';
import { MessageDto } from 'src/common/message.dto';
import { CriterioCuidIntePediatricoDto } from 'src/resolucion/dtos/evaluacion_dtos/grupo_internacion_dtos/cuidado_intensivo_pediatrico_dto/criterio_cuid_intens_pediatrico.dto';

@Injectable()
export class CriteriosCuidIntensPediatricoService {

    constructor(
        @InjectRepository(CriterioCuidIntePediatricoEntity)
        private readonly criterioCuidIntePediatricoRepository: CriterioCuidIntePediatricoRepository,
        @InjectRepository(CuidIntePediatricoEntity)
        private readonly cuidIntePediatricoRepository: CuidIntePediatricoRepository,
    ) { }


    //LISTANDO CRITERIOS POR ESTANDAR
    async getCriterioForEstandar(id: number): Promise<CriterioCuidIntePediatricoEntity[]> {
        const cri_cuid_pedi = await this.criterioCuidIntePediatricoRepository.createQueryBuilder('criterio')
            .select(['criterio', 'cuid_int_pediatrico.cuid_int_pedi_nombre_estandar'])
            .innerJoin('criterio.cuid_int_pediatrico', 'cuid_int_pediatrico')
            .where('cuid_int_pediatrico.cuid_int_pedi_id = :pedia_est', { pedia_est: id })
            .getMany()
        if (!cri_cuid_pedi) throw new NotFoundException(new MessageDto('No Existe en la lista'))
        return cri_cuid_pedi
    }

    async create(cuid_int_pedi_id: number, dto: CriterioCuidIntePediatricoDto): Promise<any> {
        const cuiintensnpedia = await this.cuidIntePediatricoRepository.findOne({ where: { cuid_int_pedi_id: cuid_int_pedi_id } });
        if (!cuiintensnpedia) throw new InternalServerErrorException(new MessageDto('El Estandar no ha sido creado'))
        //CREAMOS EL DTO PARA TRANSFERIR LOS DATOS
        const criterioscuiintensnpedia = this.criterioCuidIntePediatricoRepository.create(dto)
        //ASIGNAMOS EL ESTANDAR AL CRITERIO
        criterioscuiintensnpedia.cuid_int_pediatrico = cuiintensnpedia
        //GUARDAR LOS DATOS EN LA BD
        await this.criterioCuidIntePediatricoRepository.save(criterioscuiintensnpedia)
        return new MessageDto('El criterio ha sido Creado Correctamente');
    }

    //ENCONTRAR POR ID - CRITERIO CUIDADO INTENSIVO PEDIATRICO  
    async findById(cri_int_ped_id: number): Promise<CriterioCuidIntePediatricoEntity> {
        const criterio_int_ped = await this.criterioCuidIntePediatricoRepository.findOne({ where: { cri_int_ped_id } });
        if (!criterio_int_ped) {
            throw new NotFoundException(new MessageDto('El Criterio No Existe'));
        }
        return criterio_int_ped;
    }

    //ELIMINAR CRITERIO  CUIDADO INTENSIVO PEDIATRICO
    async delete(id: number): Promise<any> {
        const criterio_int_ped = await this.findById(id);
        await this.criterioCuidIntePediatricoRepository.delete(criterio_int_ped.cri_int_ped_id)
        return new MessageDto(`Criterio Eliminado`);
    }

    //ACTUALIZAR CRITERIOS CUIDADO INTENSIVO PEDIATRICO
    async updateintenspedi(id: number, dto: CriterioCuidIntePediatricoDto): Promise<any> {
        const criterio_cuid_intens_pedi = await this.findById(id);
        if (!criterio_cuid_intens_pedi) {
            throw new NotFoundException(new MessageDto('El criterio no existe'))
        }
        dto.cri_int_ped_modalidad ? criterio_cuid_intens_pedi.cri_int_ped_modalidad = dto.cri_int_ped_modalidad : criterio_cuid_intens_pedi.cri_int_ped_modalidad = criterio_cuid_intens_pedi.cri_int_ped_modalidad;
        dto.cri_int_ped_complejidad ? criterio_cuid_intens_pedi.cri_int_ped_complejidad = dto.cri_int_ped_complejidad : criterio_cuid_intens_pedi.cri_int_ped_complejidad = criterio_cuid_intens_pedi.cri_int_ped_complejidad;
        criterio_cuid_intens_pedi.cri_int_ped_articulo = dto.cri_int_ped_articulo !== undefined ? dto.cri_int_ped_articulo : "";
        criterio_cuid_intens_pedi.cri_int_ped_seccion = dto.cri_int_ped_seccion !== undefined ? dto.cri_int_ped_seccion : "";
        criterio_cuid_intens_pedi.cri_int_ped_apartado = dto.cri_int_ped_apartado !== undefined ? dto.cri_int_ped_apartado : "";
        dto.cri_int_ped_nombre_criterio ? criterio_cuid_intens_pedi.cri_int_ped_nombre_criterio = dto.cri_int_ped_nombre_criterio : criterio_cuid_intens_pedi.cri_int_ped_nombre_criterio = criterio_cuid_intens_pedi.cri_int_ped_nombre_criterio;

        await this.criterioCuidIntePediatricoRepository.save(criterio_cuid_intens_pedi);

        return new MessageDto(`El criterio ha sido Actualizado`);

    }
}
