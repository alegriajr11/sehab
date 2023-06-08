import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CriterioUrgenciasEntity } from '../criterio_urgencias.entity';
import { UrgenciasEntity } from '../urgencias.entity';
import { UrgenciasRepository } from '../urgencias.repository';
import { CriterioUrgenciasRepository } from '../criterio_urgencias.repository';
import { MessageDto } from 'src/common/message.dto';
import { CriterioUrgenciasDto } from 'src/resolucion/dtos/evaluacion_dtos/grupo_atencion_inmediata_dtos/urgencias_dto/criterio_urgencias.dto';

@Injectable()
export class CriteriosUrgenciasService {

    constructor(
        @InjectRepository(CriterioUrgenciasEntity)
        private readonly criterioUrgenciasRepository: CriterioUrgenciasRepository,
        @InjectRepository(UrgenciasEntity)
        private readonly urgenciasRepository: UrgenciasRepository ,
        ) {}


         //LISTANDO CRITERIOS POR ESTANDAR
        async getCriterioForEstandar(id: number): Promise<CriterioUrgenciasEntity[]> {
            const cri_urge = await this.criterioUrgenciasRepository.createQueryBuilder('criterio')
            .select(['criterio', 'urgencias.urg_nombre_estandar'])
            .innerJoin('criterio.urgencias', 'urgencias')
            .where('urgencias.urg_id = :urge_est', {urge_est : id})
            .getMany()
            if (!cri_urge) throw new NotFoundException(new MessageDto('No Existe en la lista'))
            return cri_urge
        }

        //CREAR CRITERIO
        async create(urg_id    : number, dto: CriterioUrgenciasDto): Promise<any> {
            const urgencias = await this.urgenciasRepository.findOne({ where: { urg_id   : urg_id   } });
            if (!urgencias) throw new InternalServerErrorException(new MessageDto('El Estandar no ha sido creado'))
            //CREAMOS EL DTO PARA TRANSFERIR LOS DATOS
            const criteriourgencias= this.criterioUrgenciasRepository.create(dto)
            //ASIGNAMOS EL ESTANDAR AL CRITERIO
            criteriourgencias.urgencias = urgencias
            //GUARDAR LOS DATOS EN LA BD
            await this.criterioUrgenciasRepository.save(criteriourgencias)
            return new MessageDto('El criterio ha sido Creado Correctamente');
        }
}
