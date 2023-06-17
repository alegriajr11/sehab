import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CriterioVacunacionEntity } from '../criterio_vacunacion.entity';
import { VacunacionEntity } from '../vacunacion.entity';
import { CriterioVacunacionRepository } from '../criterio_vacunacion.repository';
import { VacunacionRepository } from '../vacunacion.repository';
import { MessageDto } from 'src/common/message.dto';
import { CriterioVacunacionDto } from 'src/resolucion/dtos/evaluacion_dtos/grupo_consulta_externa_dtos/vacunacion_dto/criterio_vacunacion.dto';

@Injectable()
export class CriteriosVacunacionService {

    constructor(
        @InjectRepository(CriterioVacunacionEntity)
        private readonly criterioVacunacionRepository: CriterioVacunacionRepository,
        @InjectRepository(VacunacionEntity)
        private readonly vacunacionRepository: VacunacionRepository,
    ) { }


    //LISTANDO CRITERIOS POR ESTANDAR
    async getCriterioForEstandar(id: number): Promise<CriterioVacunacionEntity[]> {
        const cri_vacu = await this.criterioVacunacionRepository.createQueryBuilder('criterio')
            .select(['criterio', 'vacunacion.vac_nombre_estandar'])
            .innerJoin('criterio.vacunacion', 'vacunacion')
            .where('vacunacion.vac_id = :vacu_est', { vacu_est: id })
            .getMany()
        if (!cri_vacu) throw new NotFoundException(new MessageDto('No Existe en la lista'))
        return cri_vacu
    }


    //CREAR CRITERIO
    async create(vac_id: number, dto: CriterioVacunacionDto): Promise<any> {
        const vacunacion = await this.vacunacionRepository.findOne({ where: { vac_id: vac_id } });
        if (!vacunacion) throw new InternalServerErrorException(new MessageDto('El Estandar no ha sido creado'))
        //CREAMOS EL DTO PARA TRANSFERIR LOS DATOS
        const criteriosvacunacion = this.criterioVacunacionRepository.create(dto)
        //ASIGNAMOS EL ESTANDAR AL CRITERIO
        criteriosvacunacion.vacunacion = vacunacion
        //GUARDAR LOS DATOS EN LA BD
        await this.criterioVacunacionRepository.save(criteriosvacunacion)
        return new MessageDto('El criterio ha sido Creado Correctamente');
    }

    //ENCONTRAR POR ID - CRITERIO VACUNACION  
    async findById(crivac_id: number): Promise<CriterioVacunacionEntity> {
        const criterio_vacunacion = await this.criterioVacunacionRepository.findOne({ where: { crivac_id } });
        if (!criterio_vacunacion) {
            throw new NotFoundException(new MessageDto('El Criterio No Existe'));
        }
        return criterio_vacunacion;
    }

    //ELIMINAR CRITERIO  VACUNACION
    async delete(id: number): Promise<any> {
        const criterio_vacunacion = await this.findById(id);
        await this.criterioVacunacionRepository.delete(criterio_vacunacion.crivac_id)
        return new MessageDto(`Criterio Eliminado`);
    }
}
