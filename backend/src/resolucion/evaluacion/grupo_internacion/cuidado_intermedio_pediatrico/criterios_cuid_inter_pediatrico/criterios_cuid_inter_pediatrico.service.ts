import { Injectable,   InternalServerErrorException,   NotFoundException } from '@nestjs/common';
import { CriterioCuidIntermPediatricoEntity } from '../criterio_cuid_inter_pediatrico.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CuidIntermPediatricoEntity } from '../cuid_inter_pediatrico.entity';
import { CriterioCuidIntermPediatricoRepository } from '../criterio_cuid_inter_pediatrico.repository';
import { CuidIntermPediatricoRepository } from '../cuid_inter_pediatrico.repository';
import { MessageDto } from 'src/common/message.dto';
import { CriterioCuidIntermPediatricoDto } from 'src/resolucion/dtos/evaluacion_dtos/grupo_internacion_dtos/cuidado_intermedio_pediatrico_dto/criterio_cuid_inter_pediatrico.dto';




@Injectable()
export class CriteriosCuidInterPediatricoService {

    constructor(
        @InjectRepository(CriterioCuidIntermPediatricoEntity)
        private readonly criterioCuidIntermPediatricoRepository: CriterioCuidIntermPediatricoRepository,
        @InjectRepository(CuidIntermPediatricoEntity)
        private readonly cuidIntermPediatricoRepository: CuidIntermPediatricoRepository,
        ) {}


         //LISTANDO CRITERIOS POR ESTANDAR
        async getCriterioForEstandar(id: number): Promise<CriterioCuidIntermPediatricoEntity[]> {
            const cri_cuid_ped = await this.criterioCuidIntermPediatricoRepository.createQueryBuilder('criterio')
            .select(['criterio', 'cuid_inter_pediatrico.cuid_inter_pedi_nombre_estandar'])
            .innerJoin('criterio.cuid_inter_pediatrico', 'cuid_inter_pediatrico')
            .where('cuid_inter_pediatrico.cuid_inter_pedi_id = :cui_pedi_est', {cui_pedi_est : id})
            .getMany()
            if (!cri_cuid_ped) throw new NotFoundException(new MessageDto('No Existe en la lista'))
            return cri_cuid_ped
        }


            async create(cuid_inter_pedi_id:number,dto:CriterioCuidIntermPediatricoDto):Promise<any> {
            const cuidinterpedi =await this.cuidIntermPediatricoRepository.findOne({where:{cuid_inter_pedi_id:cuid_inter_pedi_id  } });
            if (!cuidinterpedi) throw new InternalServerErrorException(new MessageDto('El Estandar no ha sido creado'))
            //CREAMOS EL DTO PARA TRANSFERIR LOS DATOS
            const criterioscuidinterpedi= this.criterioCuidIntermPediatricoRepository.create(dto)
            //ASIGNAMOS EL ESTANDAR AL CRITERIO
            criterioscuidinterpedi.cuid_inter_pediatrico = cuidinterpedi
            //GUARDAR LOS DATOS EN LA BD
            await this.criterioCuidIntermPediatricoRepository.save(criterioscuidinterpedi)
            return new MessageDto('El criterio ha sido Creado Correctamente');
        }
}

