import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageDto } from 'src/common/message.dto';
import { CriterioIndEntity } from './criterioind.entity';
import { CriterioIndRepository } from './criterioind.repository';
import { EtapaInd } from './etapaind.entity';
import { EtapaIndRepository } from './etapaind.repository';
import { Repository } from 'typeorm';

@Injectable()
export class SpIndService {

    constructor(
        @InjectRepository(EtapaInd)
        private etapaIndRepository: EtapaIndRepository
    ) { }

    //LISTAR ETAPAS DE IND
    async getall(): Promise<EtapaInd[]> {
        const criterios = await this.etapaIndRepository.find();
        if (!criterios.length) throw new NotFoundException(new MessageDto('No hay etapas en la lista'))
        return criterios;
    }

    async findById(eta_id: number): Promise<EtapaInd> {
        const eta = await this.etapaIndRepository.findOne({ where: { eta_id } });
        if (!eta) {
            throw new NotFoundException(new MessageDto('No Existe'));
        }
        return eta;
    }
}
