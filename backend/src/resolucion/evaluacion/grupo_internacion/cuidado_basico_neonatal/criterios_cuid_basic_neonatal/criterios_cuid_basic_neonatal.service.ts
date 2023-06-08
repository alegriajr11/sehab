import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CriterioCuidBasNeonatalEntity } from '../criterio_cuid_basic_neonatal.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CuidBasNeonatalEntity } from '../cuid_basic_neonatal.entity';
import { CriterioCuidBasNeonatalRepository } from '../criterio_cuid_basic_neonatal.repository';
import { CuidBasNeonatalRepository } from '../cuid_basic_neonatal.repository';
import { MessageDto } from 'src/common/message.dto';
import { CriterioCuidBasNeonatalDto } from 'src/resolucion/dtos/evaluacion_dtos/grupo_internacion_dtos/cuidado_basico_neonatal_dto/criterio_cuid_basic_neonatal.dto';

@Injectable()
export class CriteriosCuidBasicNeonatalService {

    constructor(
        @InjectRepository(CriterioCuidBasNeonatalEntity)
        private readonly criterioCuidBasNeonatalRepository: CriterioCuidBasNeonatalRepository,
        @InjectRepository(CuidBasNeonatalEntity)
        private readonly cuidBasNeonatalRepository: CuidBasNeonatalRepository ,
        ) {}


         //LISTANDO CRITERIOS POR ESTANDAR
        async getCriterioForEstandar(id: number): Promise<CriterioCuidBasNeonatalEntity[]> {
            const cri_cui_neo = await this.criterioCuidBasNeonatalRepository.createQueryBuilder('criterio')
            .select(['criterio', 'cuid_bas_neonatal.cuid_neona_nombre_estandar'])
            .innerJoin('criterio.cuid_bas_neonatal', 'cuid_bas_neonatal')
            .where('cuid_bas_neonatal.cuid_neona_id = :neo_est', {neo_est : id})
            .getMany()
            if (!cri_cui_neo) throw new NotFoundException(new MessageDto('No Existe en la lista'))
            return cri_cui_neo
        }

        //CREAR CRITERIOS 
        async create(cuid_neona_id    : number, dto: CriterioCuidBasNeonatalDto): Promise<any> {
            const cuidadoneona= await this.cuidBasNeonatalRepository.findOne({ where: { cuid_neona_id   : cuid_neona_id   } });
            if (!cuidadoneona) throw new InternalServerErrorException(new MessageDto('El Estandar no ha sido creado'))
            //CREAMOS EL DTO PARA TRANSFERIR LOS DATOS
            const criterioscuidadoneona= this.criterioCuidBasNeonatalRepository.create(dto)
            //ASIGNAMOS EL ESTANDAR AL CRITERIO
            criterioscuidadoneona.cuid_bas_neonatal = cuidadoneona
            //GUARDAR LOS DATOS EN LA BD
            await this.criterioCuidBasNeonatalRepository.save(criterioscuidadoneona)
            return new MessageDto('El criterio ha sido Creado Correctamente');
        }
}
