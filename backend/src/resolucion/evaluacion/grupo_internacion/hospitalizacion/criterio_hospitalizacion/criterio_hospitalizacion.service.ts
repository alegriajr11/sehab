import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CriterioHospitalizacionEntity } from '../criterio_hospitalizacion.entity';
import { HospitalizacionEntity } from '../hospitalizacion.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CriterioHospitalizacionRepository } from '../criterio_hospitalizacion.repository';
import { HospitalizacionRepository } from '../hospitalizacion.repository';
import { MessageDto } from 'src/common/message.dto';
import { CriterioHospitalizacionDto } from 'src/resolucion/dtos/evaluacion_dtos/grupo_internacion_dtos/hospitalizacion_dto/criterio_hospitalizacion.dto';

@Injectable()
export class CriterioHospitalizacionService {

    constructor(
        @InjectRepository(CriterioHospitalizacionEntity)
        private readonly criterioHospitalizacionRepository: CriterioHospitalizacionRepository,
        @InjectRepository(HospitalizacionEntity)
        private readonly hospitalizacionRepository: HospitalizacionRepository,
    ) { }


    //LISTANDO CRITERIOS POR ESTANDAR
    async getCriterioForEstandar(id: number): Promise<CriterioHospitalizacionEntity[]> {
        const cri_hosp = await this.criterioHospitalizacionRepository.createQueryBuilder('criterio')
            .select(['criterio', 'hospitalizacion.hosp_nombre_estandar'])
            .innerJoin('criterio.hospitalizacion', 'hospitalizacion')
            .where('hospitalizacion.hosp_id = :hosp_est', { hosp_est: id })
            .getMany()
        if (!cri_hosp) throw new NotFoundException(new MessageDto('No Existe en la lista'))
        return cri_hosp
    }

    async create(hosp_id: number, dto: CriterioHospitalizacionDto): Promise<any> {
        const hospitalizacion = await this.hospitalizacionRepository.findOne({ where: { hosp_id: hosp_id } });
        if (!hospitalizacion) throw new InternalServerErrorException(new MessageDto('El Estandar no ha sido creado'))
        //CREAMOS EL DTO PARA TRANSFERIR LOS DATOS
        const criterioshospitalizacionl = this.criterioHospitalizacionRepository.create(dto)
        //ASIGNAMOS EL ESTANDAR AL CRITERIO
        criterioshospitalizacionl.hospitalizacion = hospitalizacion
        //GUARDAR LOS DATOS EN LA BD
        await this.criterioHospitalizacionRepository.save(criterioshospitalizacionl)
        return new MessageDto('El criterio ha sido Creado Correctamente');
    }

    //ENCONTRAR POR ID - CRITERIO HOSPITALIZACION
    async findById(crihosp_id: number): Promise<CriterioHospitalizacionEntity> {
        const criterio_hospitalizacion = await this.criterioHospitalizacionRepository.findOne({ where: { crihosp_id } });
        if (!criterio_hospitalizacion) {
            throw new NotFoundException(new MessageDto('El Criterio No Existe'));
        }
        return criterio_hospitalizacion;
    }

    //ELIMINAR CRITERIO  HOSPITALIZACION
    async delete(id: number): Promise<any> {
        const criterio_hospitalizacion = await this.findById(id);
        await this.criterioHospitalizacionRepository.delete(criterio_hospitalizacion.crihosp_id)
        return new MessageDto(`Criterio Eliminado`);
    }

    //ACTUALIZAR CRITERIOS HOSPITALIZACION
    async updatehospi(id: number, dto: CriterioHospitalizacionDto): Promise<any> {
        const criterio_hospitalizacion = await this.findById(id);
        if (!criterio_hospitalizacion) {
            throw new NotFoundException(new MessageDto('El criterio no existe'))
        }
        dto.crihosp_modalidad ? criterio_hospitalizacion.crihosp_modalidad = dto.crihosp_modalidad : criterio_hospitalizacion.crihosp_modalidad = criterio_hospitalizacion.crihosp_modalidad;
        dto.crihosp_complejidad ? criterio_hospitalizacion.crihosp_complejidad = dto.crihosp_complejidad : criterio_hospitalizacion.crihosp_complejidad = criterio_hospitalizacion.crihosp_complejidad;
        criterio_hospitalizacion.crihosp_articulo = dto.crihosp_articulo !== undefined ? dto.crihosp_articulo : "";
        criterio_hospitalizacion.crihosp_seccion = dto.crihosp_seccion !== undefined ? dto.crihosp_seccion : "";
        criterio_hospitalizacion.crihosp_apartado = dto.crihosp_apartado !== undefined ? dto.crihosp_apartado : "";
        dto.crihosp_nombre_criterio ? criterio_hospitalizacion.crihosp_nombre_criterio = dto.crihosp_nombre_criterio : criterio_hospitalizacion.crihosp_nombre_criterio = criterio_hospitalizacion.crihosp_nombre_criterio;

        await this.criterioHospitalizacionRepository.save(criterio_hospitalizacion);

        return new MessageDto(`El criterio ha sido Actualizado`);

    }
}

