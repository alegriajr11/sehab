import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageDto } from 'src/common/message.dto';
import { CriterioVerificacionDto } from 'src/usuario/dto/SpIps/criterioverificacion.dto';
import { CriterioVerifiRepository } from '../criterioverifi.repository';
import { CriterioVerificacionEntity } from '../criterioverificacion.entity';

@Injectable()
export class CriterioverifService {


    constructor(
        @InjectRepository(CriterioVerificacionEntity)
        private criterioVerificacionRepository: CriterioVerifiRepository
    ){}

    async findByEva(id: number): Promise<CriterioVerificacionEntity[]> {
        const criteriover = await this.criterioVerificacionRepository.createQueryBuilder('criteriover')
        .select(['criteriover.cri_ver_id','criteriover.cri_ver_nombre', 'criteriover.cri_ver_verificacion','cri_ver_eva.evips_nombre'])
        .innerJoin('criteriover.cri_ver_eva','cri_ver_eva')
        .where('cri_ver_eva.evips_id = :eva', {eva: id})
        .getMany()
        if(!criteriover.length) throw new NotFoundException(new MessageDto('No hay Criterios en la lista'))
        return criteriover;
    }

    async findByCri(cri_ver_id: number): Promise<CriterioVerificacionEntity> {
        const criterio = await this.criterioVerificacionRepository.findOne({ where: { cri_ver_id } })
        if (!criterio) {
            throw new NotFoundException(new MessageDto('El criterio No Existe'));
        }
        return criterio
    }

    async update(id: number, dto: CriterioVerificacionDto): Promise<any> {

        const criterio = await this.findByCri(id);
        if (!criterio)
            throw new NotFoundException(new MessageDto('El Criterio No Existe'));

        dto.cri_ver_nombre ? criterio.cri_ver_nombre = dto.cri_ver_nombre : criterio.cri_ver_nombre = criterio.cri_ver_nombre;
        dto.cri_ver_verificacion ? criterio.cri_ver_verificacion = dto.cri_ver_verificacion : criterio.cri_ver_verificacion = criterio.cri_ver_verificacion;

        await this.criterioVerificacionRepository.save(criterio);

        return new MessageDto(`El Criterio ha sido Actualizado`);
    }


    async delete(id: number): Promise<any> {
        const criterio = await this.findByCri(id);
        await this.criterioVerificacionRepository.delete(criterio.cri_ver_id)
        return new MessageDto(`Criterio Eliminado`);
    }

}
