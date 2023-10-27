import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CalificacionVerificacionIpsEntity } from '../../calificacionips_verificacion.entity';
import { CalificacionIpsVerificacionRepository } from '../../calificacionips_verificacion.repository';
import { CriterioVerificacionEntity } from '../../criterioverificacion.entity';
import { CriterioVerifiRepository } from '../../criterioverifi.repository';
import { MessageDto } from 'src/common/message.dto';
import { CalificacionVerificacionDto } from 'src/usuario/dto/SpIps/calificaciones/calificacionverificacion.dto';

@Injectable()
export class CalificacionipsVerificacionService {

    constructor(
        @InjectRepository(CriterioVerificacionEntity)
        private criterioVerifiRepository: CriterioVerifiRepository,
        @InjectRepository(CalificacionVerificacionIpsEntity)
        private calificacionIpsVerificacionRepository: CalificacionIpsVerificacionRepository,
    ){}

    //buscar calificacion por id
    async findByCal(cal_id: number): Promise<CalificacionVerificacionIpsEntity> {
        const calificacion = await this.calificacionIpsVerificacionRepository.findOne({ where: { cal_id } })
        if (!calificacion) {
            throw new NotFoundException(new MessageDto('La calificacion No Existe'));
        }
        return calificacion
    }

    //buscar calificacion por criterio
    async findByCri(id: number): Promise<CalificacionVerificacionIpsEntity[]> {
        const criterio = await this.calificacionIpsVerificacionRepository.createQueryBuilder('calificacion')
        .select(['calificacion.cal_id','calificacion.cal_nota', 'calificacion.cal_observaciones','calificacionipsVerif.cri_ver_nombre'])
        .innerJoin('calificacion.calificacionipsVerif','calificacionipsVerif')
        .where('calificacionipsVerif.cri_ver_id = :cri', {cri: id})
        .getMany()
        if(!criterio.length) throw new NotFoundException(new MessageDto('No hay Calificaciones en la lista'))
        return criterio;
    }

    // creacion de criterio con su respectiva evaluacion
    async create(cri_ver_id: number, dto: CalificacionVerificacionDto): Promise<any> {
        const criterio = await this.criterioVerifiRepository.findOne({ where: { cri_ver_id: cri_ver_id } });
        if (!criterio) throw new NotFoundException(new MessageDto('El criterio no ha sido creado'))
        const calificacion = this.calificacionIpsVerificacionRepository.create(dto)
        //asigna la evaluacion al criterio
        calificacion.calificacionipsVerif = criterio
        await this.calificacionIpsVerificacionRepository.save(calificacion)
        return new MessageDto('La calificacion ha sido Creada');
    }

    async update(id: number, dto: CalificacionVerificacionDto): Promise<any> {

        const calificacion = await this.findByCal(id);
        if (!calificacion)
            throw new NotFoundException(new MessageDto('La calificacion No Existe'));

        dto.cal_nota ? calificacion.cal_nota = dto.cal_nota : calificacion.cal_nota = calificacion.cal_nota;
        dto.cal_observaciones ? calificacion.cal_observaciones = dto.cal_observaciones : calificacion.cal_observaciones = calificacion.cal_observaciones;

        await this.calificacionIpsVerificacionRepository.save(calificacion);

        return new MessageDto(`La calificacion  ha sido Actualizada`);
    }


    async delete(id: number): Promise<any> {
        const calificacion = await this.findByCal(id);
        await this.calificacionIpsVerificacionRepository.delete(calificacion.cal_id)
        return new MessageDto(`calificacion Eliminada`);
    }

    async getallCalCrixEva(evips_id:number): Promise<CalificacionVerificacionIpsEntity[]> {

        const criterio = await this.calificacionIpsVerificacionRepository.createQueryBuilder('calificacion')
            .select(['calificacion', 'calificacionipsVerif.cri_ver_id', 'calificacionipsVerif.cri_ver_nombre', 'calificacionipsVerif.cri_ver_verificacion', 'cri_ver_eva.evips_nombre'])
            .innerJoinAndSelect('calificacion.calificacionipsVerif', 'calificacionipsVerif')
            .innerJoinAndSelect('calificacionipsVerif.cri_ver_eva', 'cri_ver_eva')
            //.innerJoinAndSelect('cal_evaluacion_independientes.eval_acta_ind', 'eval_acta_ind')
            .where('cri_ver_eva.evips_id = :eva', {eva: evips_id })
            //.andWhere('cal_evaluacion_independientes.eva_id = :id_eva',{id_eva:eva_id})
            .getMany()

        return criterio
    }
}
