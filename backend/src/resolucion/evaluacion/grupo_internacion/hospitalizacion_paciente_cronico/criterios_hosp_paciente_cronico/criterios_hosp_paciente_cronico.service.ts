import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CriterioHospitCronicoEntity } from '../criterio_hosp_paciente_cron.entity';
import { HospitalizacionCronicoEntity } from '../hospi_paciente_cronico.entity';
import { CriterioHospitCronicoRepository } from '../criterio_hosp_paciente_cron.repository';
import { HospitalizacionCronicoRepository } from '../hospi_paciente_cronico.repository';
import { MessageDto } from 'src/common/message.dto';
import { CriterioHospitCronicoDto } from 'src/resolucion/dtos/evaluacion_dtos/grupo_internacion_dtos/hospitalizacion_paciente_cronico_dto/criterio_hosp_paciente_cron.dto';

@Injectable()
export class CriteriosHospPacienteCronicoService {

    constructor(
        @InjectRepository(CriterioHospitCronicoEntity)
        private readonly criterioHospitCronicoRepository: CriterioHospitCronicoRepository,
        @InjectRepository(HospitalizacionCronicoEntity)
        private readonly hospitalizacionCronicoRepository: HospitalizacionCronicoRepository,
    ) { }


    //LISTANDO CRITERIOS POR ESTANDAR
    async getCriterioForEstandar(id: number): Promise<CriterioHospitCronicoEntity[]> {
        const cri_hosp_cro = await this.criterioHospitCronicoRepository.createQueryBuilder('criterio')
            .select(['criterio', 'hospit_cronico.hosp_cron_nombre_estandar'])
            .innerJoin('criterio.hospit_cronico', 'hospit_cronico')
            .where('hospit_cronico.hosp_cron_id = :hosp_cro_est', { hosp_cro_est: id })
            .getMany()
        if (!cri_hosp_cro) throw new NotFoundException(new MessageDto('No Existe en la lista'))
        return cri_hosp_cro
    }

    async create(hosp_cron_id: number, dto: CriterioHospitCronicoDto): Promise<any> {
        const hospitacronica = await this.hospitalizacionCronicoRepository.findOne({ where: { hosp_cron_id: hosp_cron_id } });
        if (!hospitacronica) throw new InternalServerErrorException(new MessageDto('El Estandar no ha sido creado'))
        //CREAMOS EL DTO PARA TRANSFERIR LOS DATOS
        const criterioshospitahospitacronica = this.criterioHospitCronicoRepository.create(dto)
        //ASIGNAMOS EL ESTANDAR AL CRITERIO
        criterioshospitahospitacronica.hospit_cronico = hospitacronica
        //GUARDAR LOS DATOS EN LA BD
        await this.criterioHospitCronicoRepository.save(criterioshospitahospitacronica)
        return new MessageDto('El criterio ha sido Creado Correctamente');
    }

    //ENCONTRAR POR ID - CRITERIO HOSPITALIZACION PACIENTE CRONICO
    async findById(crihosp_cron_id: number): Promise<CriterioHospitCronicoEntity> {
        const criterio_hosp_cron = await this.criterioHospitCronicoRepository.findOne({ where: { crihosp_cron_id } });
        if (!criterio_hosp_cron) {
            throw new NotFoundException(new MessageDto('El Criterio No Existe'));
        }
        return criterio_hosp_cron;
    }

    //ELIMINAR CRITERIO  HOSPITALIZACION PACIENTE CRONICO
    async delete(id: number): Promise<any> {
        const criterio_hosp_cron = await this.findById(id);
        await this.criterioHospitCronicoRepository.delete(criterio_hosp_cron.crihosp_cron_id)
        return new MessageDto(`Criterio Eliminado`);
    }

    //ACTUALIZAR CRITERIOS CUIDADO  HOSPITALIZACION PACIENTE CRONIC
    async updatehospicron(id: number, dto: CriterioHospitCronicoDto): Promise<any> {
        const criterio_hosp_paciente_cron = await this.findById(id);
        if (!criterio_hosp_paciente_cron) {
            throw new NotFoundException(new MessageDto('El criterio no existe'))
        }
        dto.crihosp_cron_modalidad ? criterio_hosp_paciente_cron.crihosp_cron_modalidad = dto.crihosp_cron_modalidad : criterio_hosp_paciente_cron.crihosp_cron_modalidad = criterio_hosp_paciente_cron.crihosp_cron_modalidad;
        dto.crihosp_cron_complejidad ? criterio_hosp_paciente_cron.crihosp_cron_complejidad = dto.crihosp_cron_complejidad : criterio_hosp_paciente_cron.crihosp_cron_complejidad = criterio_hosp_paciente_cron.crihosp_cron_complejidad;
        criterio_hosp_paciente_cron.crihosp_cron_articulo = dto.crihosp_cron_articulo !== undefined ? dto.crihosp_cron_articulo : "";
        criterio_hosp_paciente_cron.crihosp_cron_seccion = dto.crihosp_cron_seccion !== undefined ? dto.crihosp_cron_seccion : "";
        criterio_hosp_paciente_cron.crihosp_cron_apartado = dto.crihosp_cron_apartado !== undefined ? dto.crihosp_cron_apartado : "";
        dto.crihosp_cron_nombre_criterio ? criterio_hosp_paciente_cron.crihosp_cron_nombre_criterio = dto.crihosp_cron_nombre_criterio : criterio_hosp_paciente_cron.crihosp_cron_nombre_criterio = criterio_hosp_paciente_cron.crihosp_cron_nombre_criterio;

        await this.criterioHospitCronicoRepository.save(criterio_hosp_paciente_cron);

        return new MessageDto(`El criterio ha sido Actualizado`);

    }
}
