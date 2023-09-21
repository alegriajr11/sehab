import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageDto } from 'src/common/message.dto';
import { EvaluacionipsEntity } from '../evaluacionips.entity';
import { EvaluacionIpsRepository } from '../evaluacionips.repository';

@Injectable()
export class EvaluacionipsService {

    constructor(
        @InjectRepository(EvaluacionipsEntity)
        private readonly evaluacionipsRepository: EvaluacionIpsRepository
    ){}

    async findById(evips_id: number): Promise<EvaluacionipsEntity> {
        const evaluacionips = await this.evaluacionipsRepository.findOne({where: {evips_id}});
        if(!evaluacionips){
            throw new NotFoundException(new MessageDto('No Existe'));
        }
        return evaluacionips;
    }

    async getall(): Promise<EvaluacionipsEntity[]>{
        const dom = await this.evaluacionipsRepository.find()
        if(!dom) throw new NotFoundException(new MessageDto('No hay Evaluaciones en la lista'))
        return dom;
    }

    
}
