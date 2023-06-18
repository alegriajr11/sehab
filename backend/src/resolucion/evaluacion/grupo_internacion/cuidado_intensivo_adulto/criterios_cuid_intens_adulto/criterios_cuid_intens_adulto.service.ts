import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CriterioCuidIntensAdultoEntity } from '../criterio_cuid_intens_adulto.entity';
import { CuidIntAdultoEntity } from '../cuid_intens_adulto.entity';
import { CriterioCuidIntensAdultoRepository } from '../criterio_cuid_intens_adulto.repository';
import { CuidIntAdultoRepository } from '../cuid_intens_adulto.repository';
import { MessageDto } from 'src/common/message.dto';
import { CriterioCuidIntensAdultoDto } from 'src/resolucion/dtos/evaluacion_dtos/grupo_internacion_dtos/cuidado_intensivo_adulto_dto/criterio_cuid_intens_adulto.dto';

@Injectable()
export class CriteriosCuidIntensAdultoService {

    constructor(
        @InjectRepository(CriterioCuidIntensAdultoEntity)
        private readonly criterioCuidIntensAdultoRepository: CriterioCuidIntensAdultoRepository,
        @InjectRepository(CuidIntAdultoEntity)
        private readonly cuidIntAdultoRepository: CuidIntAdultoRepository,
    ) { }

    //LISTANDO CRITERIOS POR ESTANDAR
    async getCriterioForEstandar(id: number): Promise<CriterioCuidIntensAdultoEntity[]> {
        const cri_cui_ite_adu = await this.criterioCuidIntensAdultoRepository.createQueryBuilder('criterio')
            .select(['criterio', 'cuid_int_adulto.cuid_int_adult_nombre_estandar'])
            .innerJoin('criterio.cuid_int_adulto', 'cuid_int_adulto')
            .where('cuid_int_adulto.cuid_int_adult_id = :cui_int_adu_est', { cui_int_adu_est: id })
            .getMany()
        if (!cri_cui_ite_adu) throw new NotFoundException(new MessageDto('No Existe en la lista'))
        return cri_cui_ite_adu
    }

    async create(cuid_int_adult_id: number, dto: CriterioCuidIntensAdultoDto): Promise<any> {
        const cuiintensadul = await this.cuidIntAdultoRepository.findOne({ where: { cuid_int_adult_id: cuid_int_adult_id } });
        if (!cuiintensadul) throw new InternalServerErrorException(new MessageDto('El Estandar no ha sido creado'))
        //CREAMOS EL DTO PARA TRANSFERIR LOS DATOS
        const criterioscuiintensadul = this.criterioCuidIntensAdultoRepository.create(dto)
        //ASIGNAMOS EL ESTANDAR AL CRITERIO
        criterioscuiintensadul.cuid_int_adulto = cuiintensadul
        //GUARDAR LOS DATOS EN LA BD
        await this.criterioCuidIntensAdultoRepository.save(criterioscuiintensadul)
        return new MessageDto('El criterio ha sido Creado Correctamente');
    }

    //ENCONTRAR POR ID - CRITERIO CUIDADO INTENSIVO ADULTO  
    async findById(cri_int_adult_id: number): Promise<CriterioCuidIntensAdultoEntity> {
        const criterio_int_adult = await this.criterioCuidIntensAdultoRepository.findOne({ where: { cri_int_adult_id } });
        if (!criterio_int_adult) {
            throw new NotFoundException(new MessageDto('El Criterio No Existe'));
        }
        return criterio_int_adult;
    }

    //ELIMINAR CRITERIO  CUIDADO INTENSIVO ADULTO
    async delete(id: number): Promise<any> {
        const criterio_int_adult = await this.findById(id);
        await this.criterioCuidIntensAdultoRepository.delete(criterio_int_adult.cri_int_adult_id)
        return new MessageDto(`Criterio Eliminado`);
    }

    //ACTUALIZAR CRITERIOS CUIDADO INTENSIVO ADULTO
    async updateintenadult(id: number, dto: CriterioCuidIntensAdultoDto): Promise<any> {
        const criterio_cuid_intens_adulto = await this.findById(id);
        if (!criterio_cuid_intens_adulto) {
            throw new NotFoundException(new MessageDto('El criterio no existe'))
        }
        dto.cri_int_adult_modalidad ? criterio_cuid_intens_adulto.cri_int_adult_modalidad = dto.cri_int_adult_modalidad : criterio_cuid_intens_adulto.cri_int_adult_modalidad = criterio_cuid_intens_adulto.cri_int_adult_modalidad;
        dto.cri_int_adult_complejidad ? criterio_cuid_intens_adulto.cri_int_adult_complejidad = dto.cri_int_adult_complejidad : criterio_cuid_intens_adulto.cri_int_adult_complejidad = criterio_cuid_intens_adulto.cri_int_adult_complejidad;
        criterio_cuid_intens_adulto.cri_int_adult_articulo = dto.cri_int_adult_articulo !== undefined ? dto.cri_int_adult_articulo : "";
        criterio_cuid_intens_adulto.cri_int_adult_seccion = dto.cri_int_adult_seccion !== undefined ? dto.cri_int_adult_seccion : "";
        criterio_cuid_intens_adulto.cri_int_adult_apartado = dto.cri_int_adult_apartado !== undefined ? dto.cri_int_adult_apartado : "";
        dto.cri_int_adult_nombre_criterio ? criterio_cuid_intens_adulto.cri_int_adult_nombre_criterio = dto.cri_int_adult_nombre_criterio : criterio_cuid_intens_adulto.cri_int_adult_nombre_criterio = criterio_cuid_intens_adulto.cri_int_adult_nombre_criterio;

        await this.criterioCuidIntensAdultoRepository.save(criterio_cuid_intens_adulto);

        return new MessageDto(`El criterio ha sido Actualizado`);

    }
}
