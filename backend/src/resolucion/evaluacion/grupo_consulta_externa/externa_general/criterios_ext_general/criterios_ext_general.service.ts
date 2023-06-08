import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CriterioExternaGeneralEntity } from '../criterio_ext_general.entity';
import { CriterioExternaGeneralRepository } from '../criterio_ext_general.repository';
import { ExternaGeneralEntity } from '../general.entity';
import { ExternaGeneralRepository } from '../general.repository';
import { MessageDto } from 'src/common/message.dto';
import { CriterioExternaGeneralDto } from 'src/resolucion/dtos/evaluacion_dtos/grupo_consulta_externa_dtos/externa_general_dto/criterio_ext_general.dto';

@Injectable()
export class CriteriosExtGeneralService {


    constructor(
        @InjectRepository(CriterioExternaGeneralEntity)
        private readonly criterioExternaGeneralRepository: CriterioExternaGeneralRepository,
        @InjectRepository(ExternaGeneralEntity)
        private readonly externaGeneralRepository: ExternaGeneralRepository ,
        ) {}


         //LISTANDO CRITERIOS POR ESTANDAR
        async getCriterioForEstandar(id: number): Promise<CriterioExternaGeneralEntity[]> {
            const cri_ext_gen = await this.criterioExternaGeneralRepository.createQueryBuilder('criterio')
            .select(['criterio', 'externa_general.extg_nombre_estandar'])
            .innerJoin('criterio.externa_general', 'externa_general')
            .where('externa_general.extg_id = :exte_est', {exte_est : id})
            .getMany()
            if (!cri_ext_gen) throw new NotFoundException(new MessageDto('No Existe en la lista'))
            return cri_ext_gen
        }

        //CREAR CRITERIO
        async create(extg_id    : number, dto: CriterioExternaGeneralDto): Promise<any> {
            const externagene= await this.externaGeneralRepository.findOne({ where: { extg_id   : extg_id   } });
            if (!externagene) throw new InternalServerErrorException(new MessageDto('El Estandar no ha sido creado'))
            //CREAMOS EL DTO PARA TRANSFERIR LOS DATOS
            const criterioexternagene= this.criterioExternaGeneralRepository.create(dto)
            //ASIGNAMOS EL ESTANDAR AL CRITERIO
            criterioexternagene.externa_general = externagene
            //GUARDAR LOS DATOS EN LA BD
            await this.criterioExternaGeneralRepository.save(criterioexternagene)
            return new MessageDto('El criterio ha sido Creado Correctamente');
        }
}
