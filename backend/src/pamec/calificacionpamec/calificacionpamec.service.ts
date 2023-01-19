import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CalificacionpamEntity } from '../calificacionpam.entity';
import { CalificacionPamRepository } from '../calificacionpam.repository';

@Injectable()
export class CalificacionpamecService {

    // constructor( 
    //     @InjectRepository(CalificacionpamEntity)
    //     private readonly calificacionpamRepository: CalificacionPamRepository,
    // ){}


}
