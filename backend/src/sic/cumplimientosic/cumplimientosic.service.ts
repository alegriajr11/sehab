import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CriteriosicEntity } from '../criteriosic.entity';
import { CriterioSicRepository } from '../criteriosic.repository';
import { EvaluacionSicEntity } from '../evaluacionsic.entity';
import { EvaluacionsicRepository } from '../evaluacionsic.repository';
import { CumplimientoSicEntity } from '../cumplimientosic.entity';
import { CumplimientoSicRepository } from '../cumplimientosic.repository';
import { CumplimientoSicDto } from 'src/usuario/dto/Sic/cumplimientosic.dto';
import { MessageDto } from 'src/common/message.dto';
import { IndicadorEntity } from '../indicador.entity';
import { IndicadorRepository } from '../indicador.repository';

@Injectable()
export class CumplimientosicService {

    constructor(
        @InjectRepository(CriteriosicEntity)
        private criterioSicRepository: CriterioSicRepository,
        @InjectRepository(EvaluacionSicEntity)
        private evaluacionsicRepository: EvaluacionsicRepository,
        @InjectRepository(CumplimientoSicEntity)
        private cumplimientoSicRepository: CumplimientoSicRepository,
        @InjectRepository(IndicadorEntity)
        private indicadorRepository: IndicadorRepository,
    ) { }

    //CREAR CUMPLIMIENTO
    async create(eva_id: number,cri_id: number,ind_id:string, dto: CumplimientoSicDto ): Promise<any> {
        const evaluacion = await this.evaluacionsicRepository.findOne({ where: { eva_id: eva_id } });
        if (!evaluacion) throw new NotFoundException(new MessageDto('La evaluacion no ha sido creada'))
        const criterio = await this.criterioSicRepository.findOne({ where: { cri_id: cri_id } });
        if (!criterio) throw new NotFoundException(new MessageDto('El criterio no ha sido creada'))
        const indicador = await this.indicadorRepository.findOne({ where: { ind_id: ind_id } });
        if (!indicador) throw new NotFoundException(new MessageDto('El indicador no ha sido creada'))
        const cumplimiento = this.cumplimientoSicRepository.create(dto)
        //asigna la evaluacion a la calificacion
        cumplimiento.cump_eva_sic = evaluacion
        //asigna eñ criterio a la evaluacion
        cumplimiento.criterio_sic = criterio
        //asigna el indicador
        cumplimiento.indicadorsic = indicador
       
        await this.cumplimientoSicRepository.save(cumplimiento)
        return new MessageDto('El cumplimiento ha sido Creado');
    }

    //LISTANDO CRITERIOS Y CUMPLIMIENTO POR EVALUACION
    async getCriCalIdeva(id: number): Promise<CumplimientoSicEntity[]> {
        const cumplimiento = await this.cumplimientoSicRepository.createQueryBuilder('listado')
            .select(['listado', 'criterio_sic.cri_nombre'])
            .innerJoin('listado.criterio_sic', 'criterio_sic')
            .innerJoin('listado.cump_eva_sic', 'cump_eva_sic')
            .where('cump_eva_sic.eva_id = :eva_id', { eva_id: id })
            .getMany()
        if (!cumplimiento) throw new NotFoundException(new MessageDto('No Existe en la lista'))
        return cumplimiento
    }
}
