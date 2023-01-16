import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageDto } from 'src/common/message.dto';
import { CriterioAjusteDto } from 'src/usuario/dto/SpIps/criterioajuste.dto';
import { CriterioPlaneacionDto } from 'src/usuario/dto/SpIps/criterioplaneacion.dto';
import { CriterioAjusteEntity } from '../criterioajuste.entity';
import { CriterioAjusteRepository } from '../criterioajuste.repository';

@Injectable()
export class CriterioajusteService {

    constructor(
        @InjectRepository(CriterioAjusteEntity)
        private criterioAjusteRepository: CriterioAjusteRepository
    ){}

    async findByEva(id: number): Promise<CriterioAjusteEntity[]> {
        const criteriosaj = await this.criterioAjusteRepository.createQueryBuilder('criterioaj')
        .select(['criterioaj.cri_aju_id','criterioaj.cri_aju_nombre', 'criterioaj.cri_aju_verificacion','cri_aju_eva.evips_nombre'])
        .innerJoin('criterioaj.cri_aju_eva','cri_aju_eva')
        .where('cri_aju_eva.evips_id = :eva', {eva: id})
        .getMany()
        if(!criteriosaj.length){
            throw new NotFoundException(new MessageDto('No hay Criterios en la lista'))
        } 
        
        return criteriosaj;
    }

    async findByCri(cri_aju_id: number): Promise<CriterioAjusteEntity> {
        const criterio = await this.criterioAjusteRepository.findOne({ where: { cri_aju_id } })
        if (!criterio) {
            throw new NotFoundException(new MessageDto('El criterio No Existe'));
        }
        return criterio
    }

    async findCri(cri_aju_id: number): Promise<CriterioAjusteEntity>{
        const criterio = await this.criterioAjusteRepository.findOne({where: {cri_aju_id}})
        if(!criterio) throw new NotFoundException(new MessageDto('No Existe el criterio'))
        return criterio
    }


    async update(id: number, dto: CriterioAjusteDto): Promise<any> {

        const criterio = await this.findCri(id);
        if (!criterio)
            throw new NotFoundException(new MessageDto('El Criterio No Existe'));

        dto.cri_aju_nombre ? criterio.cri_aju_nombre = dto.cri_aju_nombre : criterio.cri_aju_nombre = criterio.cri_aju_nombre;
        dto.cri_aju_verificacion ? criterio.cri_aju_verificacion = dto.cri_aju_verificacion : criterio.cri_aju_verificacion = criterio.cri_aju_verificacion;

        await this.criterioAjusteRepository.save(criterio);

        return new MessageDto(`El Criterio ha sido Actualizado`);
    }

    async delete(id: number): Promise<any> {
        const criterio = await this.findByCri(id);
        await this.criterioAjusteRepository.delete(criterio.cri_aju_id)
        return new MessageDto(`Criterio Eliminado`);
    }

}