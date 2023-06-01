import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageDto } from 'src/common/message.dto';
import { CriterioSerFarmaceuticoEntity } from '../criterios_s_farmaceutico.entity';
import { ServFarmaceuticoEntity } from '../servicio_farmaceutico.entity';
import { CriterioSerFarmaceuticoRepository } from '../criterios_s_farmaceutico.repository';
import { ServFarmaceuticoRepository } from '../servicio_farmaceutico.repository';

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
}
