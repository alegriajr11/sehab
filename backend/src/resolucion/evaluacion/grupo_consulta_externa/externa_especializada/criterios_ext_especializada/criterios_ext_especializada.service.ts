import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CriterioEspecializadaEntity } from '../criterio_especializada.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ExternaEspecializadaEntity } from '../especializada.entity';
import { ExternaEspecializadaRepository } from '../especializada.repository';
import { CriterioEspecializadaRepository } from '../criterio_especializada.repository';
import { MessageDto } from 'src/common/message.dto';
import { CriterioEspecializadaDto } from 'src/resolucion/dtos/evaluacion_dtos/grupo_consulta_externa_dtos/externa_especializada_dto/criterio_especializada.dto';

@Injectable()
export class CriteriosExtEspecializadaService {

    constructor(
        @InjectRepository(CriterioEspecializadaEntity)
        private readonly criterioEspecializadaRepository: CriterioEspecializadaRepository,
        @InjectRepository(ExternaEspecializadaEntity)
        private readonly externaEspecializadaRepository: ExternaEspecializadaRepository,
    ) { }


    //LISTANDO CRITERIOS POR ESTANDAR
    async getCriterioForEstandar(id: number): Promise<CriterioEspecializadaEntity[]> {
        const cri_espe = await this.criterioEspecializadaRepository.createQueryBuilder('criterio')
            .select(['criterio', 'externa_especializada.exte_nombre_estandar'])
            .innerJoin('criterio.externa_especializada', 'externa_especializada')
            .where('externa_especializada.exte_id = :espe_est', { espe_est: id })
            .getMany()
        if (!cri_espe) throw new NotFoundException(new MessageDto('No Existe en la lista'))
        return cri_espe
    }

    //CREAR CRITERIO
    async create(exte_id: number, dto: CriterioEspecializadaDto): Promise<any> {
        const externaespec = await this.externaEspecializadaRepository.findOne({ where: { exte_id: exte_id } });
        if (!externaespec) throw new InternalServerErrorException(new MessageDto('El Estandar no ha sido creado'))
        //CREAMOS EL DTO PARA TRANSFERIR LOS DATOS
        const criterioexternaespec = this.criterioEspecializadaRepository.create(dto)
        //ASIGNAMOS EL ESTANDAR AL CRITERIO
        criterioexternaespec.externa_especializada = externaespec
        //GUARDAR LOS DATOS EN LA BD
        await this.criterioEspecializadaRepository.save(criterioexternaespec)
        return new MessageDto('El criterio ha sido Creado Correctamente');
    }

    //ENCONTRAR POR ID - CRITERIO TRANSPORTE EXTERNA ESPECIALIZADA   
    async findById(criextg_id: number): Promise<CriterioEspecializadaEntity> {
        const criterio_ext_esp = await this.criterioEspecializadaRepository.findOne({ where: { criextg_id } });
        if (!criterio_ext_esp) {
            throw new NotFoundException(new MessageDto('El Criterio No Existe'));
        }
        return criterio_ext_esp;
    }

    //ELIMINAR CRITERIO TRANSPORTE EXTERNA ESPECIALIZADA 
    async delete(id: number): Promise<any> {
        const criterio_ext_esp = await this.findById(id);
        await this.criterioEspecializadaRepository.delete(criterio_ext_esp.criextg_id)
        return new MessageDto(`Criterio Eliminado`);
    }
}
