import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CriterioIndEntity } from '../criterioind.entity';
import { CriterioIndRepository } from '../criterioind.repository';
import { CalificacionIndEntity } from '../calificacionind.entity';
import { CalificacionIndRepository } from '../calificacionind.repository';
import { EvaluacionIndependientesEntity } from '../evaluacion-independientes.entity';
import { EvaluacionIndependientesRepository } from '../evaluacion-independientes.repository';
import { calificacionindDto } from '../dto/calificacionind.dto';
import { MessageDto } from 'src/common/message.dto';
import { EtapaInd } from '../etapaind.entity';
import { EtapaIndRepository } from '../etapaind.repository';

@Injectable()
export class CalificacionindService {

    constructor(
        @InjectRepository(CriterioIndEntity)
        private criterioIndRepository: CriterioIndRepository,
        @InjectRepository(EvaluacionIndependientesEntity)
        private evaluacionIndependientesRepository: EvaluacionIndependientesRepository,
        @InjectRepository(CalificacionIndEntity)
        private calificacionIndRepository: CalificacionIndRepository,
        @InjectRepository(EtapaInd)
        private etapaindRepository: EtapaIndRepository,
    ) { }

    //ENCONTRAR POR ID - CALIFICACION IND
    async findById(cal_id: number): Promise<CalificacionIndEntity> {
        const calificacion = await this.calificacionIndRepository.findOne({ where: { cal_id } });
        if (!calificacion) {
            throw new NotFoundException(new MessageDto('La calificacion No Existe'));
        }
        return calificacion;
    }


    //CREAR CALIFICACION
    async create(eva_id: number, cri_id: number, dto: calificacionindDto): Promise<any> {
        const evaluacion = await this.evaluacionIndependientesRepository.findOne({ where: { eva_id: eva_id } });
        if (!evaluacion) throw new NotFoundException(new MessageDto('La evaluacion no ha sido creada'))
        const criterio = await this.criterioIndRepository.findOne({ where: { cri_id: cri_id } });
        if (!criterio) throw new NotFoundException(new MessageDto('El criterio no ha sido creada'))
        const calificacion = this.calificacionIndRepository.create(dto)
        //asigna la evaluacion a la calificacion
        calificacion.cal_evaluacion_independientes = evaluacion
        //asigna eñ criterio a la evaluacion
        calificacion.criterio_cal = criterio
        await this.calificacionIndRepository.save(calificacion)
        return new MessageDto('La calificacion ha sido Creada');
    }


    //criterio por titulo
    async getallcriterioetapa(eva_id:number): Promise<CalificacionIndEntity[]> {

        let titulo_uno
        titulo_uno = "COMPROMISO DEL PROFESIONAL INDEPENDIENTE CON LA ATENCION  SEGURA DEL PACIENTE"

        const criterio = await this.calificacionIndRepository.createQueryBuilder('calificacion')
            .select(['calificacion', 'criterio_cal.cri_id', 'criterio_cal.cri_nombre', 'criterio_cal.cri_verificacion', 'eta_item.eta_nombre','eval_acta_ind.act_nombre_prestador',
            'eval_acta_ind.act_nombre_funcionario','eval_acta_ind.act_cargo_funcionario','eval_acta_ind.act_nombre_prestador'])
            .innerJoin('calificacion.criterio_cal', 'criterio_cal')
            .innerJoinAndSelect('criterio_cal.eta_item', 'eta_item')
            .innerJoinAndSelect('calificacion.cal_evaluacion_independientes', 'cal_evaluacion_independientes')
            .innerJoinAndSelect('cal_evaluacion_independientes.eval_acta_ind', 'eval_acta_ind')
            .where('eta_item.eta_nombre LIKE :titulo', { titulo: titulo_uno })
            .andWhere('cal_evaluacion_independientes.eva_id = :id_eva',{id_eva:eva_id})
            .getMany()

        return criterio
    }

    async getallcriterioxtitulodos(eva_id:number): Promise<CalificacionIndEntity[]> {

        let titulo_dos
        titulo_dos = "CONOCIMIENTOS BÁSICOS DE LA SEGURIDAD DEL PACIENTE"

        const criterio = await this.calificacionIndRepository.createQueryBuilder('calificacion')
        .select(['calificacion', 'criterio_cal.cri_id', 'criterio_cal.cri_nombre', 'criterio_cal.cri_verificacion', 'eta_item.eta_nombre'])
        .innerJoin('calificacion.criterio_cal', 'criterio_cal')
        .innerJoinAndSelect('criterio_cal.eta_item', 'eta_item')
        .innerJoinAndSelect('calificacion.cal_evaluacion_independientes', 'cal_evaluacion_independientes')
        .where('eta_item.eta_nombre LIKE :titulo', { titulo: titulo_dos })
        .andWhere('cal_evaluacion_independientes.eva_id = :id_eva',{id_eva:eva_id})
        .getMany()

        return criterio
    }

    async getallcriterioxtitulotres(eva_id:number): Promise<CalificacionIndEntity[]> {

        let titulo_tres
        titulo_tres = "REGISTRO DE FALLAS EN LA ATENCIÓN EN SALUD y PLAN DE MEJORAMIENTO"

        const criterio = await this.calificacionIndRepository.createQueryBuilder('calificacion')
        .select(['calificacion', 'criterio_cal.cri_id', 'criterio_cal.cri_nombre', 'criterio_cal.cri_verificacion', 'eta_item.eta_nombre'])
        .innerJoin('calificacion.criterio_cal', 'criterio_cal')
        .innerJoinAndSelect('criterio_cal.eta_item', 'eta_item')
        .innerJoinAndSelect('calificacion.cal_evaluacion_independientes', 'cal_evaluacion_independientes')
        .where('eta_item.eta_nombre LIKE :titulo', { titulo: titulo_tres })
        .andWhere('cal_evaluacion_independientes.eva_id = :id_eva',{id_eva:eva_id})
        .getMany()

        return criterio
    }

    async getallcriterioxtitulocuatro(eva_id:number): Promise<CalificacionIndEntity[]> {

        let titulo_cuatro
        titulo_cuatro = "DETECCIÓN, PREVENCIÓN Y CONTROL DE INFECCIONES ASOCIADAS AL CUIDADO"

        const criterio = await this.calificacionIndRepository.createQueryBuilder('calificacion')
        .select(['calificacion', 'criterio_cal.cri_id', 'criterio_cal.cri_nombre', 'criterio_cal.cri_verificacion', 'eta_item.eta_nombre'])
        .innerJoin('calificacion.criterio_cal', 'criterio_cal')
        .innerJoinAndSelect('criterio_cal.eta_item', 'eta_item')
        .innerJoinAndSelect('calificacion.cal_evaluacion_independientes', 'cal_evaluacion_independientes')
        .where('eta_item.eta_nombre LIKE :titulo', { titulo: titulo_cuatro })
        .andWhere('cal_evaluacion_independientes.eva_id = :id_eva',{id_eva:eva_id})
        .getMany()

        return criterio
    }

    //EDITAR CALIFICACION
    async edit(id: number,  dto: calificacionindDto): Promise<any> {
        try {
            const calificacion= await this.findById(id);
            if (!calificacion) {
                throw new NotFoundException(new MessageDto('El cumplimiento no existe'));
            }

            dto.cal_nota ? calificacion.cal_nota = dto.cal_nota : calificacion.cal_nota = calificacion.cal_nota;
            dto.cal_observaciones ? calificacion.cal_observaciones = dto.cal_observaciones : calificacion.cal_observaciones = calificacion.cal_observaciones;

            await this.calificacionIndRepository.save(calificacion);


            return new MessageDto(`La calificacion ha sido editada`);
        } catch (error) {
            // Aquí puedes manejar el error como desees, por ejemplo, registrarlo o lanzar una excepción personalizada.
            throw error;
        }
    }
}
