import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CriterioTranspAsistencialEntity } from '../criterio_trans_asistencial.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TranspAsistencialEntity } from '../transporte_asistencial.entity';
import { TranspAsistencialRepository } from '../transporte_asistencial.repository';
import { CriterioTranspAsistencialRepository } from '../criterio_trans_asistencial.repository';
import { MessageDto } from 'src/common/message.dto';
import { CriterioTranspAsistencialDto } from 'src/resolucion/dtos/evaluacion_dtos/grupo_atencion_inmediata_dtos/transporte_asistencial_dto/criterio_trans_asistencial.dto';

@Injectable()
export class CriteriosTransAsistencialService {

    constructor(
        @InjectRepository(CriterioTranspAsistencialEntity)
        private readonly criterioTranspAsistencialRepository: CriterioTranspAsistencialRepository,
        @InjectRepository(TranspAsistencialEntity)
        private readonly transpAsistencialRepository: TranspAsistencialRepository,
    ) { }


    //LISTANDO CRITERIOS POR ESTANDAR
    async getCriterioForEstandar(id: number): Promise<CriterioTranspAsistencialEntity[]> {
        const cri_trans_asis = await this.criterioTranspAsistencialRepository.createQueryBuilder('criterio')
            .select(['criterio', 'transp_asistencial.trans_asis_nombre_estandar'])
            .innerJoin('criterio.transp_asistencial', 'transp_asistencial')
            .where('transp_asistencial.trans_asis_id = :asis_est', { asis_est: id })
            .getMany()
        if (!cri_trans_asis) throw new NotFoundException(new MessageDto('No Existe en la lista'))
        return cri_trans_asis
    }

    //CREAR CRITERIO
    async create(trans_asis_id: number, dto: CriterioTranspAsistencialDto): Promise<any> {
        const transasis = await this.transpAsistencialRepository.findOne({ where: { trans_asis_id: trans_asis_id } });
        if (!transasis) throw new InternalServerErrorException(new MessageDto('El Estandar no ha sido creado'))
        //CREAMOS EL DTO PARA TRANSFERIR LOS DATOS
        const criteriotransasis = this.criterioTranspAsistencialRepository.create(dto)
        //ASIGNAMOS EL ESTANDAR AL CRITERIO
        criteriotransasis.transp_asistencial = transasis
        //GUARDAR LOS DATOS EN LA BD
        await this.criterioTranspAsistencialRepository.save(criteriotransasis)
        return new MessageDto('El criterio ha sido Creado Correctamente');
    }


    //ENCONTRAR POR ID - CRITERIO TRANSPORTE ASISTENCIAL   
    async findById(cri_trans_asis_id: number): Promise<CriterioTranspAsistencialEntity> {
        const criterio_trans_asist = await this.criterioTranspAsistencialRepository.findOne({ where: { cri_trans_asis_id } });
        if (!criterio_trans_asist) {
            throw new NotFoundException(new MessageDto('El Criterio No Existe'));
        }
        return criterio_trans_asist;
    }

    //ELIMINAR CRITERIO TRANSPORTE ASISTENCIAL 
    async delete(id: number): Promise<any> {
        const criterio_trans_asist = await this.findById(id);
        await this.criterioTranspAsistencialRepository.delete(criterio_trans_asist.cri_trans_asis_id)
        return new MessageDto(`Criterio Eliminado`);
    }
}
