import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CriterioDialisisEntity } from '../criterio_dialisis.entity';
import { CriterioDialisisRepository } from '../criterio_dialisis.repository';
import { MessageDto } from 'src/common/message.dto';
import { DialisisEntity } from '../dialisis.entity';
import { DialisisRepository } from '../dialisis.repository';

@Injectable()
export class CriteriosDialisisService {

    constructor(
        @InjectRepository(CriterioDialisisEntity)
        private readonly criterioDialisisRepository: CriterioDialisisRepository,
        @InjectRepository(DialisisEntity)
        private readonly dialisisRepository: DialisisRepository,
    ) { }


    async getCriterioForEstandar(id: number): Promise<CriterioDialisisEntity[]> {
        const cri_dialisis = await this.criterioDialisisRepository.createQueryBuilder('criterio')
        .select(['criterio', 'dialisis.dial_nombre_estandar'])
        .innerJoin('criterio.dialisis', 'dialisis')
        .where('dialisis.dial_id = :dial_est', { dial_est : id})
        .getMany()
        if (!cri_dialisis) throw new NotFoundException(new MessageDto('No Existe en la lista'))
        return cri_dialisis

    }

    // async findByEta(id: number): Promise<CriterioIndEntity[]> {
    //     const etapas = await this.criterioIndRepository.createQueryBuilder('criterio')
    //         .select(['criterio', 'eta_item.eta_nombre'])
    //         .innerJoin('criterio.eta_item', 'eta_item')
    //         .where('eta_item.eta_id = :eta', { eta: id })
    //         .getMany()
    //     if (!etapas) throw new NotFoundException(new MessageDto('No Existe en la lista'))
    //     return etapas;
    // }

    // constructor(
    //     @InjectRepository(CriterioDialisisEntity)
    //     private readonly criterioDialisisRepository: CriterioDialisisRepository,
    // ){}

    // //OBTENER TODOS LOS CRITERIOS DIALISIS
    // async getall(): Promise<CriterioDialisisEntity[]> {
    //     const criDialisis = await this.criterioDialisisRepository.find()
    //     if (!criDialisis) throw new NotFoundException(new MessageDto('No hay Criterios en la lista'))
    //     return criDialisis;
    // }


}
