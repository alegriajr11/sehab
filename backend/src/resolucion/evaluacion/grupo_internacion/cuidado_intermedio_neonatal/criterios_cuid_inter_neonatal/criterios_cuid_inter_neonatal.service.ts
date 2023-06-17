import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CriterioCuidIntermNeonatalEntity } from '../criterio_cuid_inter_neonatal.entity';
import { CuidIntermNeonatalEntity } from '../cuid_inter_neonatal.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CriterioCuidIntermNeonatalRepository } from '../criterio_cuid_inter_neonatal.repository';
import { CuidIntermNeonatalRepository } from '../cuid_inter_neonatal.repository';
import { MessageDto } from 'src/common/message.dto';
import { CriterioCuidIntermNeonatalDto } from 'src/resolucion/dtos/evaluacion_dtos/grupo_internacion_dtos/cuidado_intermedio_neonatal_dto/criterio_cuid_inter_neonatal.dto';

@Injectable()
export class CriteriosCuidInterNeonatalService {

    constructor(
        @InjectRepository(CriterioCuidIntermNeonatalEntity)
        private readonly criterioCuidIntermNeonatalRepository: CriterioCuidIntermNeonatalRepository,
        @InjectRepository(CuidIntermNeonatalEntity)
        private readonly cuidIntermNeonatalRepository: CuidIntermNeonatalRepository,
        ) {}


         //LISTANDO CRITERIOS POR ESTANDAR
        async getCriterioForEstandar(id: number): Promise<CriterioCuidIntermNeonatalEntity[]> {
            const cri_cuid_neo = await this.criterioCuidIntermNeonatalRepository.createQueryBuilder('criterio')
            .select(['criterio', 'cuid_inter_neonatal.cuid_inter_adult_nombre_estandar'])
            .innerJoin('criterio.cuid_inter_neonatal', 'cuid_inter_neonatal')
            .where('cuid_inter_neonatal.cuid_inter_adult_id = :cuid_neo_est', {cuid_neo_est : id})
            .getMany()
            if (!cri_cuid_neo) throw new NotFoundException(new MessageDto('No Existe en la lista'))
            return cri_cuid_neo
        }

        async create(cuid_inter_adult_id : number, dto: CriterioCuidIntermNeonatalDto): Promise<any> {
            const cuiinteradul= await this.cuidIntermNeonatalRepository.findOne({ where: { cuid_inter_adult_id  : cuid_inter_adult_id   } });
            if (!cuiinteradul) throw new InternalServerErrorException(new MessageDto('El Estandar no ha sido creado'))
            //CREAMOS EL DTO PARA TRANSFERIR LOS DATOS
            const criterioscuiinteradul= this.criterioCuidIntermNeonatalRepository.create(dto)
            //ASIGNAMOS EL ESTANDAR AL CRITERIO
            criterioscuiinteradul.cuid_inter_neonatal = cuiinteradul
            //GUARDAR LOS DATOS EN LA BD
            await this.criterioCuidIntermNeonatalRepository.save(criterioscuiinteradul)
            return new MessageDto('El criterio ha sido Creado Correctamente');
        }

        
        //ENCONTRAR POR ID - CRITERIO CUIDADO  INTERMEDIO NEONATAL
    async findById(cri_inter_neon_id: number): Promise<CriterioCuidIntermNeonatalEntity> {
        const criterio_inter_neon = await this.criterioCuidIntermNeonatalRepository.findOne({ where: { cri_inter_neon_id } });
        if (!criterio_inter_neon) {
            throw new NotFoundException(new MessageDto('El Criterio No Existe'));
        }
        return criterio_inter_neon;
    }

    //ELIMINAR CRITERIO  CUIDADO  INTERMEDIO NEONATAL
    async delete(id: number): Promise<any> {
        const criterio_inter_neon = await this.findById(id);
        await this.criterioCuidIntermNeonatalRepository.delete(criterio_inter_neon.cri_inter_neon_id)
        return new MessageDto(`Criterio Eliminado`);
    }
}
