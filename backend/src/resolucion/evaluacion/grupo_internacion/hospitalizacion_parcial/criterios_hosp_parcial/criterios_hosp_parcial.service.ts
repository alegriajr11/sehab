import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CriterioHospitalizacionParcialEntity } from '../criterio_hosp_parcial.entity';
import { HospitalizacionParcialEntity } from '../hospitalizacion_parcial.entity';
import { CriterioHospitalizacionParcialRepository } from '../criterio_hosp_parcial.repository';
import { HospitalizacionParcialRepository } from '../hospitalizacion_parcial.repository';
import { MessageDto } from 'src/common/message.dto';
import { CriterioHospitalizacionParcialDto } from 'src/resolucion/dtos/evaluacion_dtos/grupo_internacion_dtos/hospitalizacion_parcial_dto/criterio_hosp_parcial.dto';

@Injectable()
export class CriteriosHospParcialService {

    constructor(
        @InjectRepository(CriterioHospitalizacionParcialEntity)
        private readonly criterioHospitalizacionParcialRepository: CriterioHospitalizacionParcialRepository,
        @InjectRepository(HospitalizacionParcialEntity)
        private readonly hospitalizacionParcialRepository: HospitalizacionParcialRepository,
    ) { }


    //LISTANDO CRITERIOS POR ESTANDAR
    async getCriterioForEstandar(id: number): Promise<CriterioHospitalizacionParcialEntity[]> {
        const cri_hos_par = await this.criterioHospitalizacionParcialRepository.createQueryBuilder('criterio')
            .select(['criterio', 'hospitalizacion_parcial.hosp_parc_nombre_estandar'])
            .innerJoin('criterio.hospitalizacion_parcial', 'hospitalizacion_parcial')
            .where('hospitalizacion_parcial.hosp_parc__id = :hos_par_est', { hos_par_est: id })
            .getMany()
        if (!cri_hos_par) throw new NotFoundException(new MessageDto('No Existe en la lista'))
        return cri_hos_par
    }

    async create(hosp_parc__id: number, dto: CriterioHospitalizacionParcialDto): Promise<any> {
        const hospitaparcial = await this.hospitalizacionParcialRepository.findOne({ where: { hosp_parc__id: hosp_parc__id } });
        if (!hospitaparcial) throw new InternalServerErrorException(new MessageDto('El Estandar no ha sido creado'))
        //CREAMOS EL DTO PARA TRANSFERIR LOS DATOS
        const criterioshospitahospitaparcial = this.criterioHospitalizacionParcialRepository.create(dto)
        //ASIGNAMOS EL ESTANDAR AL CRITERIO
        criterioshospitahospitaparcial.hospitalizacion_parcial = hospitaparcial
        //GUARDAR LOS DATOS EN LA BD
        await this.criterioHospitalizacionParcialRepository.save(criterioshospitahospitaparcial)
        return new MessageDto('El criterio ha sido Creado Correctamente');
    }

    //ENCONTRAR POR ID - CRITERIO HOSPITALIZACION PARCIAL
    async findById(crihosp_parc_id: number): Promise<CriterioHospitalizacionParcialEntity> {
        const criterio_hosp_parc = await this.criterioHospitalizacionParcialRepository.findOne({ where: { crihosp_parc_id } });
        if (!criterio_hosp_parc) {
            throw new NotFoundException(new MessageDto('El Criterio No Existe'));
        }
        return criterio_hosp_parc;
    }

    //ELIMINAR CRITERIO  HOSPITALIZACION PARCIAL
    async delete(id: number): Promise<any> {
        const criterio_hosp_parc = await this.findById(id);
        await this.criterioHospitalizacionParcialRepository.delete(criterio_hosp_parc.crihosp_parc_id)
        return new MessageDto(`Criterio Eliminado`);
    }

    //ACTUALIZAR CRITERIOS CUIDADO  HOSPITALIZACION PARCIAL
    async updatehospipar(id: number, dto: CriterioHospitalizacionParcialDto): Promise<any> {
        const criterio_hosp_parc = await this.findById(id);
        if (!criterio_hosp_parc) {
            throw new NotFoundException(new MessageDto('El criterio no existe'))
        }
        dto.crihosp_parc_modalidad ? criterio_hosp_parc.crihosp_parc_modalidad = dto.crihosp_parc_modalidad : criterio_hosp_parc.crihosp_parc_modalidad = criterio_hosp_parc.crihosp_parc_modalidad;
        dto.crihosp_parc_complejidad ? criterio_hosp_parc.crihosp_parc_complejidad = dto.crihosp_parc_complejidad : criterio_hosp_parc.crihosp_parc_complejidad = criterio_hosp_parc.crihosp_parc_complejidad;
        criterio_hosp_parc.crihosp_parc_articulo = dto.crihosp_parc_articulo !== undefined ? dto.crihosp_parc_articulo : "";
        criterio_hosp_parc.crihosp_parc_seccion = dto.crihosp_parc_seccion !== undefined ? dto.crihosp_parc_seccion : "";
        criterio_hosp_parc.crihosp_parc_apartado = dto.crihosp_parc_apartado !== undefined ? dto.crihosp_parc_apartado : "";
        dto.crihosp_parc_nombre_criterio ? criterio_hosp_parc.crihosp_parc_nombre_criterio = dto.crihosp_parc_nombre_criterio : criterio_hosp_parc.crihosp_parc_nombre_criterio = criterio_hosp_parc.crihosp_parc_nombre_criterio;

        await this.criterioHospitalizacionParcialRepository.save(criterio_hosp_parc);

        return new MessageDto(`El criterio ha sido Actualizado`);

    }
}
