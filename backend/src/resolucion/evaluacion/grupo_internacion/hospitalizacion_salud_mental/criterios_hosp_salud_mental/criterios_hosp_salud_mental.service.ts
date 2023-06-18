import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CriterioHospitalizacionMentalEntity } from '../criterio_hosp_salud_mental.entity';
import { HospitalizacionMentalEntity } from '../hosp_salud_mental.entity';
import { CriterioHospitalizacionMentalRepository } from '../criterio_hosp_salud_mental.repository';
import { HospitalizacionMentalRepository } from '../hosp_salud_mental.repository';
import { MessageDto } from 'src/common/message.dto';
import { CriterioHospitalizacionMentalDto } from 'src/resolucion/dtos/evaluacion_dtos/grupo_internacion_dtos/hospitalizacion_salud_mental_dto/criterio_hosp_salud_mental.dto';

@Injectable()
export class CriteriosHospSaludMentalService {

    constructor(
        @InjectRepository(CriterioHospitalizacionMentalEntity)
        private readonly criterioHospitalizacionMentalRepository: CriterioHospitalizacionMentalRepository,
        @InjectRepository(HospitalizacionMentalEntity)
        private readonly hospitalizacionMentalRepository: HospitalizacionMentalRepository,
    ) { }


    //LISTANDO CRITERIOS POR ESTANDAR
    async getCriterioForEstandar(id: number): Promise<CriterioHospitalizacionMentalEntity[]> {
        const cri_hosp_ment = await this.criterioHospitalizacionMentalRepository.createQueryBuilder('criterio')
            .select(['criterio', 'hospitalizacion_mental.hosp_mental_nombre_estandar'])
            .innerJoin('criterio.hospitalizacion_mental', 'hospitalizacion_mental')
            .where('hospitalizacion_mental.hosp_mental_id = :hosp_ment_est', { hosp_ment_est: id })
            .getMany()
        if (!cri_hosp_ment) throw new NotFoundException(new MessageDto('No Existe en la lista'))
        return cri_hosp_ment
    }

    async create(hosp_mental_id: number, dto: CriterioHospitalizacionMentalDto): Promise<any> {
        const hospitamental = await this.hospitalizacionMentalRepository.findOne({ where: { hosp_mental_id: hosp_mental_id } });
        if (!hospitamental) throw new InternalServerErrorException(new MessageDto('El Estandar no ha sido creado'))
        //CREAMOS EL DTO PARA TRANSFERIR LOS DATOS
        const criterioshospitamental = this.criterioHospitalizacionMentalRepository.create(dto)
        //ASIGNAMOS EL ESTANDAR AL CRITERIO
        criterioshospitamental.hospitalizacion_mental = hospitamental
        //GUARDAR LOS DATOS EN LA BD
        await this.criterioHospitalizacionMentalRepository.save(criterioshospitamental)
        return new MessageDto('El criterio ha sido Creado Correctamente');
    }

    //ENCONTRAR POR ID - CRITERIO HOSPITALIZACION MENTAL
    async findById(crihosp_ment_id: number): Promise<CriterioHospitalizacionMentalEntity> {
        const criterio_hosp_ment = await this.criterioHospitalizacionMentalRepository.findOne({ where: { crihosp_ment_id } });
        if (!criterio_hosp_ment) {
            throw new NotFoundException(new MessageDto('El Criterio No Existe'));
        }
        return criterio_hosp_ment;
    }

    //ELIMINAR CRITERIO  HOSPITALIZACION MENTAL
    async delete(id: number): Promise<any> {
        const criterio_hosp_ment = await this.findById(id);
        await this.criterioHospitalizacionMentalRepository.delete(criterio_hosp_ment.crihosp_ment_id)
        return new MessageDto(`Criterio Eliminado`);
    }

    //ACTUALIZAR CRITERIOS CUIDADO  HOSPITALIZACION MENTAL
    async updatehospiment(id: number, dto: CriterioHospitalizacionMentalDto): Promise<any> {
        const criterio_hosp_ment = await this.findById(id);
        if (!criterio_hosp_ment) {
            throw new NotFoundException(new MessageDto('El criterio no existe'))
        }
        dto.crihosp_ment_modalidad ? criterio_hosp_ment.crihosp_ment_modalidad = dto.crihosp_ment_modalidad : criterio_hosp_ment.crihosp_ment_modalidad = criterio_hosp_ment.crihosp_ment_modalidad;
        dto.crihosp_ment_complejidad ? criterio_hosp_ment.crihosp_ment_complejidad = dto.crihosp_ment_complejidad : criterio_hosp_ment.crihosp_ment_complejidad = criterio_hosp_ment.crihosp_ment_complejidad;
        criterio_hosp_ment.crihosp_ment_articulo = dto.crihosp_ment_articulo !== undefined ? dto.crihosp_ment_articulo : "";
        criterio_hosp_ment.crihosp_ment_seccion = dto.crihosp_ment_seccion !== undefined ? dto.crihosp_ment_seccion : "";
        criterio_hosp_ment.crihosp_ment_apartado = dto.crihosp_ment_apartado !== undefined ? dto.crihosp_ment_apartado : "";
        dto.crihosp_ment_nombre_criterio ? criterio_hosp_ment.crihosp_ment_nombre_criterio = dto.crihosp_ment_nombre_criterio : criterio_hosp_ment.crihosp_ment_nombre_criterio = criterio_hosp_ment.crihosp_ment_nombre_criterio;

        await this.criterioHospitalizacionMentalRepository.save(criterio_hosp_ment);

        return new MessageDto(`El criterio ha sido Actualizado`);

    }
}
