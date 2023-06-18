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
        private readonly externaGeneralRepository: ExternaGeneralRepository,
    ) { }


    //LISTANDO CRITERIOS POR ESTANDAR
    async getCriterioForEstandar(id: number): Promise<CriterioExternaGeneralEntity[]> {
        const cri_ext_gen = await this.criterioExternaGeneralRepository.createQueryBuilder('criterio')
            .select(['criterio', 'externa_general.extg_nombre_estandar'])
            .innerJoin('criterio.externa_general', 'externa_general')
            .where('externa_general.extg_id = :exte_est', { exte_est: id })
            .getMany()
        if (!cri_ext_gen) throw new NotFoundException(new MessageDto('No Existe en la lista'))
        return cri_ext_gen
    }

    //CREAR CRITERIO
    async create(extg_id: number, dto: CriterioExternaGeneralDto): Promise<any> {
        const externagene = await this.externaGeneralRepository.findOne({ where: { extg_id: extg_id } });
        if (!externagene) throw new InternalServerErrorException(new MessageDto('El Estandar no ha sido creado'))
        //CREAMOS EL DTO PARA TRANSFERIR LOS DATOS
        const criterioexternagene = this.criterioExternaGeneralRepository.create(dto)
        //ASIGNAMOS EL ESTANDAR AL CRITERIO
        criterioexternagene.externa_general = externagene
        //GUARDAR LOS DATOS EN LA BD
        await this.criterioExternaGeneralRepository.save(criterioexternagene)
        return new MessageDto('El criterio ha sido Creado Correctamente');
    }

    //ENCONTRAR POR ID - CRITERIO EXTERNA GENERAL  
    async findById(criextg_id: number): Promise<CriterioExternaGeneralEntity> {
        const criterio_ext_gene = await this.criterioExternaGeneralRepository.findOne({ where: { criextg_id } });
        if (!criterio_ext_gene) {
            throw new NotFoundException(new MessageDto('El Criterio No Existe'));
        }
        return criterio_ext_gene;
    }

    //ELIMINAR CRITERIO  EXTERNA GENERAL 
    async delete(id: number): Promise<any> {
        const criterio_ext_gene = await this.findById(id);
        await this.criterioExternaGeneralRepository.delete(criterio_ext_gene.criextg_id)
        return new MessageDto(`Criterio Eliminado`);
    }

    //ACTUALIZAR CRITERIOS EXTERNA GENERAL 
    async updateConsulGene(id: number, dto: CriterioExternaGeneralDto): Promise<any> {
        const criterio_ext_gene = await this.findById(id);
        if (!criterio_ext_gene) {
            throw new NotFoundException(new MessageDto('El criterio no existe'))
        }
        dto.criextg_modalidad ? criterio_ext_gene.criextg_modalidad = dto.criextg_modalidad : criterio_ext_gene.criextg_modalidad = criterio_ext_gene.criextg_modalidad;
        dto.criextg_complejidad ? criterio_ext_gene.criextg_complejidad = dto.criextg_complejidad : criterio_ext_gene.criextg_complejidad = criterio_ext_gene.criextg_complejidad;
        criterio_ext_gene.criextg_articulo = dto.criextg_articulo !== undefined ? dto.criextg_articulo : "";
        criterio_ext_gene.criextg_seccion = dto.criextg_seccion !== undefined ? dto.criextg_seccion : "";
        criterio_ext_gene.criextg_apartado = dto.criextg_apartado !== undefined ? dto.criextg_apartado : "";
        dto.criextg_nombre_criterio ? criterio_ext_gene.criextg_nombre_criterio = dto.criextg_nombre_criterio : criterio_ext_gene.criextg_nombre_criterio = criterio_ext_gene.criextg_nombre_criterio;

        await this.criterioExternaGeneralRepository.save(criterio_ext_gene);

        return new MessageDto(`El criterio ha sido Actualizado`);

    }
}
