import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Criterio_servicios } from '../servicios/criterio_servicios.entity';
import { TodoServiciosEntity } from '../servicios/todos_servicios.entity';
import { CriterioServiciosRepository } from '../servicios/criterio_servicios.repository';
import { TodoServiciosRepository } from '../servicios/todos_servicios.repository';
import { MessageDto } from 'src/common/message.dto';
import { CriterioServiciosDto } from 'src/resolucion/dtos/evaluacion_dtos/todos_servicios_dto/servicios_dto/criterio_servicios.dto';

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

        async create(tod_id   : number, dto: CriterioServiciosDto): Promise<any> {
            const servicios= await this.todoServiciosRepository.findOne({ where: { tod_id  : tod_id  } });
            if (!servicios) throw new InternalServerErrorException(new MessageDto('El Estandar no ha sido creado'))
            //CREAMOS EL DTO PARA TRANSFERIR LOS DATOS
            const criteriosserviciosa= this.criterioServiciosRepository.create(dto)
            //ASIGNAMOS EL ESTANDAR AL CRITERIO
            criteriosserviciosa.todos_servicios = servicios
            //GUARDAR LOS DATOS EN LA BD
            await this.criterioServiciosRepository.save(criteriosserviciosa)
            return new MessageDto('El criterio ha sido Creado Correctamente');
        }

        //ENCONTRAR POR ID - CRITERIO TODOS LOS SERVICIOS
    async findById(cris_id: number): Promise<Criterio_servicios> {
        const criterio_servicios = await this.criterioServiciosRepository.findOne({ where: { cris_id } });
        if (!criterio_servicios) {
            throw new NotFoundException(new MessageDto('El Criterio No Existe'));
        }
        return criterio_servicios;
    }

    //ELIMINAR CRITERIO  TODOS LOS SERVICIOS
    async delete(id: number): Promise<any> {
        const criterio_servicios = await this.findById(id);
        await this.criterioServiciosRepository.delete(criterio_servicios.cris_id)
        return new MessageDto(`Criterio Eliminado`);
    }
}
