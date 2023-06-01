import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Criterio_servicios } from '../servicios/criterio_servicios.entity';
import { TodoServiciosEntity } from '../servicios/todos_servicios.entity';
import { CriterioServiciosRepository } from '../servicios/criterio_servicios.repository';
import { TodoServiciosRepository } from '../servicios/todos_servicios.repository';
import { MessageDto } from 'src/common/message.dto';

@Injectable()
export class CriterioServiciosService {

    constructor(
        @InjectRepository(Criterio_servicios)
        private readonly criterioServiciosRepository: CriterioServiciosRepository,
        @InjectRepository(TodoServiciosEntity)
        private readonly todoServiciosRepository: TodoServiciosRepository,
        ) {}


         //LISTANDO CRITERIOS POR ESTANDAR
        async getCriterioForEstandar(id: number): Promise<Criterio_servicios[]> {
            const cri_serv = await this.criterioServiciosRepository.createQueryBuilder('criterio')
            .select(['criterio', 'todos_servicios.tod_nombre_estandar'])
            .innerJoin('criterio.todos_servicios', 'todos_servicios')
            .where('todos_servicios.tod_id = :tod_ser_est', {tod_ser_est : id})
            .getMany()
            if (!cri_serv) throw new NotFoundException(new MessageDto('No Existe en la lista'))
            return cri_serv
        }
}
