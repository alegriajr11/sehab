import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CriterioAjusteEntity } from '../../criterioajuste.entity';
import { CriterioAjusteRepository } from '../../criterioajuste.repository';
import { CalificacionAjusteIpsEntity } from '../../calificacionips_ajuste.entity';
import { CalificacionIpsAjusteRepository } from '../../calificacionips_ajuste.repository';
import { MessageDto } from 'src/common/message.dto';
import { CalificacionAjusteDto } from 'src/usuario/dto/SpIps/calificaciones/calificacionajuste.dto';

@Injectable()
export class CalificacionipsAjusteService {

    constructor(
        @InjectRepository(CriterioAjusteEntity)
        private criterioAjusteRepository: CriterioAjusteRepository,
        @InjectRepository(CalificacionAjusteIpsEntity)
        private calificacionIpsAjusteRepository: CalificacionIpsAjusteRepository,
    ){}

    //buscar calificacion por id
    async findByCal(cal_id: number): Promise<CalificacionAjusteIpsEntity> {
        const criterio = await this.calificacionIpsAjusteRepository.findOne({ where: { cal_id } })
        if (!criterio) {
            throw new NotFoundException(new MessageDto('La calificacion No Existe'));
        }
        return criterio
    }

    async findByCri(id: number): Promise<CalificacionAjusteIpsEntity[]> {
        const calificacion = await this.calificacionIpsAjusteRepository.createQueryBuilder('calificacion')
        .select(['calificacion.cal_id','calificacion.cal_nota', 'calificacion.cal_observaciones','calificacionipsAjuste.cri_aju_nombre'])
        .innerJoin('calificacion.calificacionipsAjuste','calificacionipsAjuste')
        .where('calificacionipsAjuste.cri_aju_id = :cri', {cri: id})
        .getMany()
        if(!calificacion.length) throw new NotFoundException(new MessageDto('No hay Calificaciones en la lista'))
        return calificacion;
    }

    // creacion de criterio con su respectiva evaluacion
    async create(cri_aju_id: number, dto: CalificacionAjusteDto): Promise<any> {
        const criterio = await this.criterioAjusteRepository.findOne({ where: { cri_aju_id: cri_aju_id } });
        if (!criterio) throw new NotFoundException(new MessageDto('El criterio no ha sido o'))
        const calificacion = this.calificacionIpsAjusteRepository.create(dto)
        //asigna la evaluacion al criterio
        calificacion.calificacionipsAjuste = criterio
        await this.calificacionIpsAjusteRepository.save(calificacion)
        return new MessageDto('La calificacion ha sido Creada');
    }

    async update(id: number, dto: CalificacionAjusteDto): Promise<any> {

        const calificacion = await this.findByCal(id);
        if (!calificacion)
            throw new NotFoundException(new MessageDto('La calificacion No Existe'));

        dto.cal_nota ? calificacion.cal_nota = dto.cal_nota : calificacion.cal_nota = calificacion.cal_nota;
        dto.cal_observaciones ? calificacion.cal_observaciones = dto.cal_observaciones : calificacion.cal_observaciones = calificacion.cal_observaciones;

        await this.calificacionIpsAjusteRepository.save(calificacion);

        return new MessageDto(`La calificacion  ha sido Actualizada`);
    }


    async delete(id: number): Promise<any> {
        const calificacion = await this.findByCal(id);
        await this.calificacionIpsAjusteRepository.delete(calificacion.cal_id)
        return new MessageDto(`calificacion Eliminada`);
    }

    async getallCalCrixEva(evips_id:number): Promise<CalificacionAjusteIpsEntity[]> {

        const criterio = await this.calificacionIpsAjusteRepository.createQueryBuilder('calificacion')
            .select(['calificacion', 'calificacionipsAjuste.cri_aju_id', 'calificacionipsAjuste.cri_aju_nombre', 
            'calificacionipsAjuste.cri_aju_verificacion', 'cri_aju_eva.evips_nombre','actas_ips.act_nombre_prestador',
            'actas_ips.act_nombre_funcionario','actas_ips.act_cargo_funcionario','actas_ips.act_nombre_prestador'])
            .innerJoinAndSelect('calificacion.calificacionipsAjuste', 'calificacionipsAjuste')
            .innerJoinAndSelect('calificacionipsAjuste.cri_aju_eva', 'cri_aju_eva')
            .innerJoinAndSelect('cri_aju_eva.actas_ips', 'actas_ips')
            //.innerJoinAndSelect('cal_evaluacion_independientes.eval_acta_ind', 'eval_acta_ind')
            .where('cri_aju_eva.evips_id = :eva', {eva: evips_id })
            //.andWhere('cal_evaluacion_independientes.eva_id = :id_eva',{id_eva:eva_id})
            .getMany()

        return criterio
    }
}
