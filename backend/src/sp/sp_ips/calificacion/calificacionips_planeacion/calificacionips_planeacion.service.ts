import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CalificacionPlaneacionIpsEntity } from '../../calificacionips_planeacion.entity';
import { CalificacionIpsPlaneacionRepository } from '../../calificacionips_planeacion.repository';
import { CriterioPlaneacionEntity } from '../../criterioplaneacion.entity';
import { CriterioPlaneacionRepository } from '../../criterioplaneac.repository';
import { MessageDto } from 'src/common/message.dto';
import { CalificacionPlaneacionDto } from 'src/usuario/dto/SpIps/calificaciones/calificacionplaneacion.dto';

@Injectable()
export class CalificacionipsPlaneacionService {

    constructor(
        @InjectRepository(CriterioPlaneacionEntity)
        private criterioPlaneacionRepository: CriterioPlaneacionRepository,
        @InjectRepository(CalificacionPlaneacionIpsEntity)
        private calificacionIpsPlaneacionRepository: CalificacionIpsPlaneacionRepository,
    ){}

    //buscar calificacion por id
    async findByCal(cal_id: number): Promise<CalificacionPlaneacionIpsEntity> {
        const calificacion = await this.calificacionIpsPlaneacionRepository.findOne({ where: { cal_id } })
        if (!calificacion) {
            throw new NotFoundException(new MessageDto('La calificacion No Existe'));
        }
        return calificacion
    }

    //buscar calificacion por criterio
    async findByCri(id: number): Promise<CalificacionPlaneacionIpsEntity[]> {
        const criterio = await this.calificacionIpsPlaneacionRepository.createQueryBuilder('calificacion')
        .select(['calificacion.cal_id','calificacion.cal_nota', 'calificacion.cal_observaciones','calificacionipsPlaneacion.cri_pla_nombre'])
        .innerJoin('calificacion.calificacionipsPlaneacion','calificacionipsPlaneacion')
        .where('calificacionipsPlaneacion.cri_pla_id = :cri', {cri: id})
        .getMany()
        if(!criterio.length) throw new NotFoundException(new MessageDto('No hay Calificaciones en la lista'))
        return criterio;
    }

    // creacion de criterio con su respectiva evaluacion
    async create(cri_pla_id: number, dto: CalificacionPlaneacionDto): Promise<any> {
        const criterio = await this.criterioPlaneacionRepository.findOne({ where: { cri_pla_id: cri_pla_id } });
        if (!criterio) throw new NotFoundException(new MessageDto('El criterio no ha sido creado'))
        const calificacion = this.calificacionIpsPlaneacionRepository.create(dto)
        //asigna la evaluacion al criterio
        calificacion.calificacionipsPlaneacion = criterio
        await this.calificacionIpsPlaneacionRepository.save(calificacion)
        return new MessageDto('La calificacion ha sido Creada');
    }

    async update(id: number, dto: CalificacionPlaneacionDto): Promise<any> {

        const calificacion = await this.findByCal(id);
        if (!calificacion)
            throw new NotFoundException(new MessageDto('La calificacion No Existe'));

        dto.cal_nota ? calificacion.cal_nota = dto.cal_nota : calificacion.cal_nota = calificacion.cal_nota;
        dto.cal_observaciones ? calificacion.cal_observaciones = dto.cal_observaciones : calificacion.cal_observaciones = calificacion.cal_observaciones;

        await this.calificacionIpsPlaneacionRepository.save(calificacion);

        return new MessageDto(`La calificacion  ha sido Actualizada`);
    }


    async delete(id: number): Promise<any> {
        const calificacion = await this.findByCal(id);
        await this.calificacionIpsPlaneacionRepository.delete(calificacion.cal_id)
        return new MessageDto(`calificacion Eliminada`);
    }

    async getallCalCrixEva(evips_id:number): Promise<CalificacionPlaneacionIpsEntity[]> {

        const criterio = await this.calificacionIpsPlaneacionRepository.createQueryBuilder('calificacion')
            .select(['calificacion', 'calificacionipsPlaneacion.cri_pla_id', 'calificacionipsPlaneacion.cri_pla_nombre', 'calificacionipsPlaneacion.cri_pla_verificacion', 'cri_pla_eva.evips_nombre'])
            .innerJoinAndSelect('calificacion.calificacionipsPlaneacion', 'calificacionipsPlaneacion')
            .innerJoinAndSelect('calificacionipsPlaneacion.cri_pla_eva', 'cri_pla_eva')
            //.innerJoinAndSelect('cal_evaluacion_independientes.eval_acta_ind', 'eval_acta_ind')
            .where('cri_pla_eva.evips_id = :eva', {eva: evips_id })
            //.andWhere('cal_evaluacion_independientes.eva_id = :id_eva',{id_eva:eva_id})
            .getMany()

        return criterio
    }
}
