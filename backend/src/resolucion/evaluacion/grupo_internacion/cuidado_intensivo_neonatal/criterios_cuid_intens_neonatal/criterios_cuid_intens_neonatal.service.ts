import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CriterioCuidInteNeonatalEntity } from '../criterio_cuid_intens_neonatal.entity';
import { CuidInteNeonatalEntity } from '../cuid_intens_neonatal.entity';
import { CriterioCuidInteNeonatalRepository } from '../criterio_cuid_intens_neonatal.repository';
import { CuidInteNeonatalRepository } from '../cuid_intens_neonatal.repository';
import { MessageDto } from 'src/common/message.dto';
import { CriterioCuidInteNeonatalDto } from 'src/resolucion/dtos/evaluacion_dtos/grupo_internacion_dtos/cuidado_intensivo_neonatal_dto/criterio_cuid_intens_neonatal.dto';

@Injectable()
export class CriteriosCuidIntensNeonatalService {

    constructor(
        @InjectRepository(CriterioCuidInteNeonatalEntity)
        private readonly criterioCuidInteNeonatalRepository: CriterioCuidInteNeonatalRepository,
        @InjectRepository(CuidInteNeonatalEntity)
        private readonly cuidInteNeonatalRepository: CuidInteNeonatalRepository,
        ) {}


         //LISTANDO CRITERIOS POR ESTANDAR
        async getCriterioForEstandar(id: number): Promise<CriterioCuidInteNeonatalEntity[]> {
            const cri_itens_neo = await this.criterioCuidInteNeonatalRepository.createQueryBuilder('criterio')
            .select(['criterio', 'cuid_int_neonatal.cuid_int_neona_nombre_estandar'])
            .innerJoin('criterio.cuid_int_neonatal', 'cuid_int_neonatal')
            .where('cuid_int_neonatal.cuid_int_neona_id = :intes_neo_est', {intes_neo_est: id})
            .getMany()
            if (!cri_itens_neo) throw new NotFoundException(new MessageDto('No Existe en la lista'))
            return cri_itens_neo
        }

        async create(cuid_int_neona_id    : number, dto: CriterioCuidInteNeonatalDto): Promise<any> {
            const cuiintensneo= await this.cuidInteNeonatalRepository.findOne({ where: { cuid_int_neona_id   : cuid_int_neona_id   } });
            if (!cuiintensneo) throw new InternalServerErrorException(new MessageDto('El Estandar no ha sido creado'))
            //CREAMOS EL DTO PARA TRANSFERIR LOS DATOS
            const criterioscuiintensneo= this.criterioCuidInteNeonatalRepository.create(dto)
            //ASIGNAMOS EL ESTANDAR AL CRITERIO
            criterioscuiintensneo.cuid_int_neonatal = cuiintensneo
            //GUARDAR LOS DATOS EN LA BD
            await this.criterioCuidInteNeonatalRepository.save(criterioscuiintensneo)
            return new MessageDto('El criterio ha sido Creado Correctamente');
        }
}

