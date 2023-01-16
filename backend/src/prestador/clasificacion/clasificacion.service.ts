/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageDto } from 'src/common/message.dto';
import { ClasificacionEntity } from './clasificacion.entity';
import { ClasificacionRepository } from './clasificacion.repository';

@Injectable()
export class ClasificacionService {
    constructor(
        @InjectRepository(ClasificacionEntity)
        private readonly clasificacionRepository: ClasificacionRepository
    ){}

    async getall(): Promise<ClasificacionEntity[]>{
        const clasificacion = await this.clasificacionRepository.find()
        if(!clasificacion.length) throw new NotFoundException(new MessageDto('No hay Clasificacion'))
        return clasificacion
    }
}
