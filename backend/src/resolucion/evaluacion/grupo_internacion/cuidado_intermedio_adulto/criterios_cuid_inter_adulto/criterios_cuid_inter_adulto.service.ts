import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CriterioCuidIntermAdultoEntity } from '../criterio_cuid_inter_adulto.entity';
import { CuidIntermAdultoEntity } from '../cuid_inter_adulto.entity';
import { CriterioCuidIntermAdultoRepository } from '../criterio_cuid_inter_adulto.repository';
import { CuidIntermAdultoRepository } from '../cuid_inter_adulto.repository';
import { MessageDto } from 'src/common/message.dto';
import { CriterioCuidIntermAdultoDto } from 'src/resolucion/dtos/evaluacion_dtos/grupo_internacion_dtos/cuidado_intermedio_adulto_dto/criterio_cuid_inter_adulto.dto';

@Injectable()
export class CriteriosCuidInterAdultoService {

    constructor(
        @InjectRepository(CriterioCuidIntermAdultoEntity)
        private readonly criterioCuidIntermAdultoRepository: CriterioCuidIntermAdultoRepository,
        @InjectRepository(CuidIntermAdultoEntity)
        private readonly cuidIntermAdultoRepository: CuidIntermAdultoRepository,
        ) {}


         //LISTANDO CRITERIOS POR ESTANDAR
        async getCriterioForEstandar(id: number): Promise<CriterioCuidIntermAdultoEntity[]> {
            const cri_cuid_inter = await this.criterioCuidIntermAdultoRepository.createQueryBuilder('criterio')
            .select(['criterio', 'cuid_inter_adulto.cuid_inter_adult_nombre_estandar'])
            .innerJoin('criterio.cuid_inter_adulto', 'cuid_inter_adulto')
            .where('cuid_inter_adulto.cuid_inter_adult_id = :inter_adul_est', {inter_adul_est : id})
            .getMany()
            if (!cri_cuid_inter) throw new NotFoundException(new MessageDto('No Existe en la lista'))
            return cri_cuid_inter
        }

        async create(cuid_inter_adult_id    : number, dto: CriterioCuidIntermAdultoDto): Promise<any> {
            const cuiinteradul= await this.cuidIntermAdultoRepository.findOne({ where: { cuid_inter_adult_id : cuid_inter_adult_id   } });
            if (!cuiinteradul) throw new InternalServerErrorException(new MessageDto('El Estandar no ha sido creado'))
            //CREAMOS EL DTO PARA TRANSFERIR LOS DATOS
            const criterioscuiinteradul= this.criterioCuidIntermAdultoRepository.create(dto)
            //ASIGNAMOS EL ESTANDAR AL CRITERIO
            criterioscuiinteradul.cuid_inter_adulto = cuiinteradul
            //GUARDAR LOS DATOS EN LA BD
            await this.criterioCuidIntermAdultoRepository.save(criterioscuiinteradul)
            return new MessageDto('El criterio ha sido Creado Correctamente');
        }

        //ENCONTRAR POR ID - CRITERIO CUIDADO  INTERMEDIO ADULTO
    async findById(cri_inter_adult_id: number): Promise<CriterioCuidIntermAdultoEntity> {
        const criterio_inter_adult = await this.criterioCuidIntermAdultoRepository.findOne({ where: { cri_inter_adult_id } });
        if (!criterio_inter_adult) {
            throw new NotFoundException(new MessageDto('El Criterio No Existe'));
        }
        return criterio_inter_adult;
    }

    //ELIMINAR CRITERIO  CUIDADO  INTERMEDIO ADULTO
    async delete(id: number): Promise<any> {
        const criterio_inter_adult = await this.findById(id);
        await this.criterioCuidIntermAdultoRepository.delete(criterio_inter_adult.cri_inter_adult_id)
        return new MessageDto(`Criterio Eliminado`);
    }
}
