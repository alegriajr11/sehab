import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageDto } from 'src/common/message.dto';
import { CriterioSerFarmaceuticoEntity } from '../criterios_s_farmaceutico.entity';
import { ServFarmaceuticoEntity } from '../servicio_farmaceutico.entity';
import { CriterioSerFarmaceuticoRepository } from '../criterios_s_farmaceutico.repository';
import { ServFarmaceuticoRepository } from '../servicio_farmaceutico.repository';
import { CriterioSerFarmaceuticoDto } from 'src/resolucion/dtos/evaluacion_dtos/grupo_apoyo_diagnostico_dtos/servicio_farmaceutico_dto/criterios_s_farmaceutico.dto';

@Injectable()
export class CriterioSFarmaceuticoService {


    constructor(
        @InjectRepository(CriterioSerFarmaceuticoEntity)
        private readonly criterioSerFarmaceuticoRepository: CriterioSerFarmaceuticoRepository,
        @InjectRepository(ServFarmaceuticoEntity)
        private readonly servFarmaceuticoRepository: ServFarmaceuticoRepository ,
        ) {}


         //LISTANDO CRITERIOS POR ESTANDAR
        async getCriterioForEstandar(id: number): Promise<CriterioSerFarmaceuticoEntity[]> {
            const cri_farma = await this.criterioSerFarmaceuticoRepository.createQueryBuilder('criterio')
            .select(['criterio', 'ser_farmaceutico.ser_farma_nombre_estandar'])
            .innerJoin('criterio.ser_farmaceutico', 'ser_farmaceutico')
            .where('ser_farmaceutico.ser_farma_id = :farm_est', { farm_est : id})
            .getMany()
            if (!cri_farma) throw new NotFoundException(new MessageDto('No Existe en la lista'))
            return cri_farma
        }

        //CREAR CRITERIO
        async create(ser_farma_id : number, dto: CriterioSerFarmaceuticoDto): Promise<any> {
            const servifarma = await this.servFarmaceuticoRepository.findOne({ where: { ser_farma_id: ser_farma_id} });
            if (!servifarma) throw new InternalServerErrorException(new MessageDto('El Estandar no ha sido creado'))
            //CREAMOS EL DTO PARA TRANSFERIR LOS DATOS
            const criterioservifarma= this.criterioSerFarmaceuticoRepository.create(dto)
            //ASIGNAMOS EL ESTANDAR AL CRITERIO
            criterioservifarma.ser_farmaceutico = servifarma
            //GUARDAR LOS DATOS EN LA BD
            await this.criterioSerFarmaceuticoRepository.save(criterioservifarma)
            return new MessageDto('El criterio ha sido Creado Correctamente');
        }
}
