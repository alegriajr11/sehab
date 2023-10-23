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
import { CumplimientoEstandarSicEntity } from '../cumplimientoestandar.entity';
import { CumplimientoEstandarSicRepository } from '../cumplimientoEstandar.repository';

@Injectable()
export class CumplimientosicService {

    constructor(
        @InjectRepository(CriteriosicEntity)
        private criterioSicRepository: CriterioSicRepository,
        @InjectRepository(EvaluacionSicEntity)
        private evaluacionsicRepository: EvaluacionsicRepository,
        @InjectRepository(CumplimientoSicEntity)
        private cumplimientoSicRepository: CumplimientoSicRepository,
        @InjectRepository(CumplimientoEstandarSicEntity)
        private cumplimientoEstandarSicRepository: CumplimientoEstandarSicRepository,
        @InjectRepository(IndicadorEntity)
        private indicadorRepository: IndicadorRepository,
    ) { }

    //ENCONTRAR POR ID - CUMPLIMIENTO SIC 
    async findById(cumpl_id: number): Promise<CumplimientoSicEntity> {
        const cumplimiento = await this.cumplimientoSicRepository.findOne({ where: { cumpl_id } });
        if (!cumplimiento) {
            throw new NotFoundException(new MessageDto('El Cumplimiento No Existe'));
        }
        return cumplimiento;
    }

    //CREAR CUMPLIMIENTO
    async create(eva_id: number, cri_id: number, ind_id: string, dto: CumplimientoSicDto): Promise<any> {
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
        const cumplimiento = await this.cumplimientoSicRepository.createQueryBuilder('cumplimiento')
            .select(['cumplimiento', 'criterio_sic.cri_id', 'criterio_sic.cri_nombre', 'eval_acta_sic.act_nombre_prestador',
                'eval_acta_sic.act_nombre_funcionario', 'eval_acta_sic.act_cargo_funcionario', 'eval_acta_sic.act_nombre_prestador',
                'indicadorsic.ind_id', 'indicadorsic.ind_nombre'])
            .innerJoin('cumplimiento.criterio_sic', 'criterio_sic')
            //.innerJoin('calificacion.cump_eva_sic', 'cump_eva_sic')
            .innerJoinAndSelect('cumplimiento.cump_eva_sic', 'cump_eva_sic')
            .innerJoinAndSelect('cump_eva_sic.eval_acta_sic', 'eval_acta_sic')
            .innerJoinAndSelect('cumplimiento.indicadorsic', 'indicadorsic')
            .where('cump_eva_sic.eva_id = :eva_id', { eva_id: id })
            .orderBy('criterio_sic.cri_id', 'ASC')
            .getMany()
        if (!cumplimiento) throw new NotFoundException(new MessageDto('No Existe en la lista'))
        return cumplimiento
    }

    //LISTANDO CRITERIOS Y CUMPLIMIENTO POR EVALUACION
    async getcumpliestandar(id: number): Promise<CumplimientoEstandarSicEntity[]> {
        const cumplimientoestandar = await this.cumplimientoEstandarSicRepository.createQueryBuilder('listado')
            .select(['listado', 'criterioestandar_sic.crie_id', 'criterioestandar_sic.crie_nombre'])
            .innerJoin('listado.criterioestandar_sic', 'criterioestandar_sic')
            .innerJoin('listado.cumplimiento_eva_sic', 'cumplimiento_eva_sic')
            .where('cumplimiento_eva_sic.eva_id = :eva_id', { eva_id: id })
            .getMany()
        if (!cumplimientoestandar) throw new NotFoundException(new MessageDto('No Existe en la lista'))
        return cumplimientoestandar
    }

    //EDITAR CUMPLIMIENTOS
    async edit(id: number, dto: CumplimientoSicDto): Promise<any> {
        try {
            const cumplimiento = await this.findById(id);
            if (!cumplimiento) {
                throw new NotFoundException(new MessageDto('El cumplimiento no existe'));
            }

            dto.cumpl_cumple ? cumplimiento.cumpl_cumple = dto.cumpl_cumple : cumplimiento.cumpl_cumple = cumplimiento.cumpl_cumple;
            dto.cumpl_observaciones ? cumplimiento.cumpl_observaciones = dto.cumpl_observaciones : cumplimiento.cumpl_observaciones = cumplimiento.cumpl_observaciones;

            await this.cumplimientoSicRepository.save(cumplimiento);


            return new MessageDto(`El cumplimiento ha sido Editado`);
        } catch (error) {
            // Aquí puedes manejar el error como desees, por ejemplo, registrarlo o lanzar una excepción personalizada.
            throw error;
        }
    }
}
