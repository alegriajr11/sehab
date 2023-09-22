import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageDto } from 'src/common/message.dto';
import { CriterioIndEntity } from './criterioind.entity';
import { CriterioIndRepository } from './criterioind.repository';
import { EtapaInd } from './etapaind.entity';
import { EtapaIndRepository } from './etapaind.repository';
import { calificacionindDto } from './dto/calificacionind.dto';
import { CalificacionIndEntity } from './calificacionind.entity';
import { CalificacionIndRepository } from './calificacionind.repository';
import { TokenDto } from 'src/auth/dto/token.dto';
import { PayloadInterface } from 'src/auth/payload.interface';
import { JwtService } from '@nestjs/jwt';
import { AuditoriaRegistroService } from 'src/auditoria/auditoria_registro/auditoria_registro.service';
import { EvaluacionIndependientesEntity } from './evaluacion-independientes.entity';
import { EvaluacionIndependientesRepository } from './evaluacion-independientes.repository';


@Injectable()
export class SpIndService {

    constructor(
        @InjectRepository(EtapaInd)

        private etapaIndRepository: EtapaIndRepository,
        @InjectRepository(CriterioIndEntity)
        private criterioIndRepository: CriterioIndRepository,
        private readonly jwtService: JwtService,
        @InjectRepository(CalificacionIndEntity)
        private calificacionIndRepository: CalificacionIndRepository,
        @InjectRepository(EvaluacionIndependientesEntity)
        private evaluacionIndependientesRepository: EvaluacionIndependientesRepository,
        private readonly auditoria_registro_services: AuditoriaRegistroService

    ) { }

    //LISTAR ETAPAS DE IND
    async getall(): Promise<EtapaInd[]> {
        const criterios = await this.etapaIndRepository.find();
        if (!criterios.length) throw new NotFoundException(new MessageDto('No hay etapas en la lista'))
        return criterios;
    }

    async findByIdcalificacion(cal_id: number): Promise<CalificacionIndEntity> {
        const calificacion = await this.calificacionIndRepository.findOne({ where: { cal_id } });
        if (!calificacion) {
            throw new NotFoundException(new MessageDto('No Existe'));
        }
        return calificacion;
    }
    

    // 

    //ACTUALIZACION CALIFICACION SP INDEPENDIENTES
    async update(id: number, dto: calificacionindDto): Promise<any> {

        try {
            const calificacion = await this.findByIdcalificacion(id);
            if (!calificacion)
                throw new NotFoundException(new MessageDto('El Criterio No Existe'));

            dto.cal_nota ? calificacion.cal_nota = dto.cal_nota : calificacion.cal_nota = calificacion.cal_nota;
            dto.cal_observaciones ? calificacion.cal_observaciones = dto.cal_observaciones : calificacion.cal_observaciones = calificacion.cal_observaciones;


            await this.calificacionIndRepository.save(calificacion);

            return new MessageDto(`La calificacion ha sido Actualizada`);

        } catch (error) {
            throw new InternalServerErrorException(new MessageDto(error.message));
        }
    }
}
