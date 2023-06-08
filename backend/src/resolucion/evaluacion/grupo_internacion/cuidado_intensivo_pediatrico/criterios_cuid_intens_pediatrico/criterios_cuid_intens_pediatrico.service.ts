import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CriterioCuidIntePediatricoEntity } from '../criterio_cuid_intens_pediatrico.entity';
import { CuidIntePediatricoEntity } from '../cuid_intens_pediatrico.entity';
import { CriterioCuidIntePediatricoRepository } from '../criterio_cuid_intens_pediatrico.repository';
import { CuidIntePediatricoRepository } from '../cuid_intens_pediatrico.repository';
import { MessageDto } from 'src/common/message.dto';
import { CriterioCuidIntePediatricoDto } from 'src/resolucion/dtos/evaluacion_dtos/grupo_internacion_dtos/cuidado_intensivo_pediatrico_dto/criterio_cuid_intens_pediatrico.dto';

@Injectable()
export class CriteriosCuidIntensPediatricoService {

    constructor(
        @InjectRepository(CriterioCuidIntePediatricoEntity)
        private readonly criterioCuidIntePediatricoRepository: CriterioCuidIntePediatricoRepository,
        @InjectRepository(CuidIntePediatricoEntity)
        private readonly cuidIntePediatricoRepository: CuidIntePediatricoRepository,
        ) {}


         //LISTANDO CRITERIOS POR ESTANDAR
        async getCriterioForEstandar(id: number): Promise<CriterioCuidIntePediatricoEntity[]> {
            const cri_cuid_pedi = await this.criterioCuidIntePediatricoRepository.createQueryBuilder('criterio')
            .select(['criterio', 'cuid_int_pediatrico.cuid_int_pedi_nombre_estandar'])
            .innerJoin('criterio.cuid_int_pediatrico', 'cuid_int_pediatrico')
            .where('cuid_int_pediatrico.cuid_int_pedi_id = :pedia_est', {pedia_est : id})
            .getMany()
            if (!cri_cuid_pedi) throw new NotFoundException(new MessageDto('No Existe en la lista'))
            return cri_cuid_pedi
        }

        async create(cuid_int_pedi_id    : number, dto: CriterioCuidIntePediatricoDto): Promise<any> {
            const cuiintensnpedia= await this.cuidIntePediatricoRepository.findOne({ where: { cuid_int_pedi_id : cuid_int_pedi_id   } });
            if (!cuiintensnpedia) throw new InternalServerErrorException(new MessageDto('El Estandar no ha sido creado'))
            //CREAMOS EL DTO PARA TRANSFERIR LOS DATOS
            const criterioscuiintensnpedia= this.criterioCuidIntePediatricoRepository.create(dto)
            //ASIGNAMOS EL ESTANDAR AL CRITERIO
            criterioscuiintensnpedia.cuid_int_pediatrico = cuiintensnpedia
            //GUARDAR LOS DATOS EN LA BD
            await this.criterioCuidIntePediatricoRepository.save(criterioscuiintensnpedia)
            return new MessageDto('El criterio ha sido Creado Correctamente');
        }
}
