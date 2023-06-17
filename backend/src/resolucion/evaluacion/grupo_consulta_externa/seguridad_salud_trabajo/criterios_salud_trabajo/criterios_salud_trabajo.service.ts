import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CriterioSaludTrabajoEntity } from '../criterios_salud_trabajo.entity';
import { CriterioSaludTrabajoRepository } from '../criterios_salud_trabajo.repository';
import { SaludTrabajoRepository } from '../salud_trabajo.repository';
import { SaludTrabajoEntity } from '../salud_trabajo.entity';
import { MessageDto } from 'src/common/message.dto';
import { CriterioSaludTrabajoDto } from 'src/resolucion/dtos/evaluacion_dtos/grupo_consulta_externa_dtos/seguridad_salud_trabajo_dto/criterios_salud_trabajo.dto';

@Injectable()
export class CriteriosSaludTrabajoService {

    constructor(
        @InjectRepository(CriterioSaludTrabajoEntity)
        private readonly criterioSaludTrabajoRepository: CriterioSaludTrabajoRepository,
        @InjectRepository(SaludTrabajoEntity)
        private readonly saludTrabajoRepository: SaludTrabajoRepository,
    ) { }


    //LISTANDO CRITERIOS POR ESTANDAR
    async getCriterioForEstandar(id: number): Promise<CriterioSaludTrabajoEntity[]> {
        const cri_sal_tra = await this.criterioSaludTrabajoRepository.createQueryBuilder('criterio')
            .select(['criterio', 'salud_trabajo.saltra_nombre_estandar'])
            .innerJoin('criterio.salud_trabajo', 'salud_trabajo')
            .where('salud_trabajo.saltra_id = :sal_tra_est', { sal_tra_est: id })
            .getMany()
        if (!cri_sal_tra) throw new NotFoundException(new MessageDto('No Existe en la lista'))
        return cri_sal_tra
    }

    //CREAR CRITERIO
    async create(saltra_id: number, dto: CriterioSaludTrabajoDto): Promise<any> {
        const saludtraba = await this.saludTrabajoRepository.findOne({ where: { saltra_id: saltra_id } });
        if (!saludtraba) throw new InternalServerErrorException(new MessageDto('El Estandar no ha sido creado'))
        //CREAMOS EL DTO PARA TRANSFERIR LOS DATOS
        const criteriosaludtrabae = this.criterioSaludTrabajoRepository.create(dto)
        //ASIGNAMOS EL ESTANDAR AL CRITERIO
        criteriosaludtrabae.salud_trabajo = saludtraba
        //GUARDAR LOS DATOS EN LA BD
        await this.criterioSaludTrabajoRepository.save(criteriosaludtrabae)
        return new MessageDto('El criterio ha sido Creado Correctamente');
    }

    //ENCONTRAR POR ID - CRITERIO SALUD TRABAJO  
    async findById(crisaltra_id: number): Promise<CriterioSaludTrabajoEntity> {
        const criterio_salud_trabajo = await this.criterioSaludTrabajoRepository.findOne({ where: { crisaltra_id } });
        if (!criterio_salud_trabajo) {
            throw new NotFoundException(new MessageDto('El Criterio No Existe'));
        }
        return criterio_salud_trabajo;
    }

    //ELIMINAR CRITERIO  SALUD TRABAJO 
    async delete(id: number): Promise<any> {
        const criterio_salud_trabajo = await this.findById(id);
        await this.criterioSaludTrabajoRepository.delete(criterio_salud_trabajo.crisaltra_id)
        return new MessageDto(`Criterio Eliminado`);
    }
}
