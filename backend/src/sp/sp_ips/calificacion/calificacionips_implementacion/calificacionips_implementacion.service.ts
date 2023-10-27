import { Injectable, NotFoundException } from '@nestjs/common';
import { CriterioImplementacionEntity } from '../../criterioimplementacion.entity';
import { CriterioImplemRepository } from '../../criterioimplement.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { CalificacionImplementacionIpsEntity } from '../../calificacionips_implementacion.entity';
import { MessageDto } from 'src/common/message.dto';
import { CalificacionImpleDto } from 'src/usuario/dto/SpIps/calificaciones/calificacionimplementacion.dto';
import { CalificacionIpsImplementacionRepository } from '../../calificacionips_implementacion.repository';

@Injectable()
export class CalificacionipsImplementacionService {

    constructor(
        @InjectRepository(CriterioImplementacionEntity)
        private criterioImplemRepository: CriterioImplemRepository,
        @InjectRepository(CalificacionImplementacionIpsEntity)
        private calificacionIpsImplementacionRepository: CalificacionIpsImplementacionRepository,
    ){}

    //buscar calificacion por id
    async findByCal(cal_id: number): Promise<CalificacionImplementacionIpsEntity> {
        const calificacion = await this.calificacionIpsImplementacionRepository.findOne({ where: { cal_id } })
        if (!calificacion) {
            throw new NotFoundException(new MessageDto('La calificacion No Existe'));
        }
        return calificacion
    }

    //buscar calificacion por criterio
    async findByCri(id: number): Promise<CalificacionImplementacionIpsEntity[]> {
        const criterio = await this.calificacionIpsImplementacionRepository.createQueryBuilder('calificacion')
        .select(['calificacion.cal_id','calificacion.cal_nota', 'calificacion.cal_observaciones','calificacionipsImpl.cri_imp_nombre'])
        .innerJoin('calificacion.calificacionipsImpl','calificacionipsImpl')
        .where('calificacionipsImpl.cri_imp_id = :cri', {cri: id})
        .getMany()
        if(!criterio.length) throw new NotFoundException(new MessageDto('No hay Calificaciones en la lista'))
        return criterio;
    }

    // creacion de criterio con su respectiva evaluacion
    async create(cri_imp_id: number, dto: CalificacionImpleDto): Promise<any> {
        const criterio = await this.criterioImplemRepository.findOne({ where: { cri_imp_id: cri_imp_id } });
        if (!criterio) throw new NotFoundException(new MessageDto('El criterio no ha sido creado'))
        const calificacion = this.calificacionIpsImplementacionRepository.create(dto)
        //asigna la evaluacion al criterio
        calificacion.calificacionipsImpl = criterio
        await this.calificacionIpsImplementacionRepository.save(calificacion)
        return new MessageDto('La calificacion ha sido Creada');
    }

    async update(id: number, dto: CalificacionImpleDto): Promise<any> {

        const calificacion = await this.findByCal(id);
        if (!calificacion)
            throw new NotFoundException(new MessageDto('La calificacion No Existe'));

        dto.cal_nota ? calificacion.cal_nota = dto.cal_nota : calificacion.cal_nota = calificacion.cal_nota;
        dto.cal_observaciones ? calificacion.cal_observaciones = dto.cal_observaciones : calificacion.cal_observaciones = calificacion.cal_observaciones;

        await this.calificacionIpsImplementacionRepository.save(calificacion);

        return new MessageDto(`La calificacion  ha sido Actualizada`);
    }


    async delete(id: number): Promise<any> {
        const calificacion = await this.findByCal(id);
        await this.calificacionIpsImplementacionRepository.delete(calificacion.cal_id)
        return new MessageDto(`calificacion Eliminada`);
    }

    async getallCalCrixEva(evips_id:number): Promise<CalificacionImplementacionIpsEntity[]> {

        const criterio = await this.calificacionIpsImplementacionRepository.createQueryBuilder('calificacion')
            .select(['calificacion', 'calificacionipsImpl.cri_imp_id', 'calificacionipsImpl.cri_imp_nombre', 'calificacionipsImpl.cri_imp_verificacion', 'cri_imp_eva.evips_nombre'])
            .innerJoinAndSelect('calificacion.calificacionipsImpl', 'calificacionipsImpl')
            .innerJoinAndSelect('calificacionipsImpl.cri_imp_eva', 'cri_imp_eva')
            //.innerJoinAndSelect('cal_evaluacion_independientes.eval_acta_ind', 'eval_acta_ind')
            .where('cri_imp_eva.evips_id = :eva', {eva: evips_id })
            //.andWhere('cal_evaluacion_independientes.eva_id = :id_eva',{id_eva:eva_id})
            .getMany()

        return criterio
    }
}
