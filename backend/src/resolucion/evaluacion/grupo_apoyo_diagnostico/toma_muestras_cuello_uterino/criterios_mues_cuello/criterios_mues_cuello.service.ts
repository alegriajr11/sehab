import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CriterioCuelloUterinoEntity } from '../criterio_tom_muest_cuello.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CuelloUterinoEntity } from '../tom_muestras_cuello_uter.entity';
import { CriterioCuelloUterinoRepository } from '../criterio_tom_muest_cuello.repository';
import { CuelloUterinoRepository } from '../tom_muestras_cuello_uter.repository';
import { MessageDto } from 'src/common/message.dto';
import { CriterioCuelloUterinoDto } from 'src/resolucion/dtos/evaluacion_dtos/grupo_apoyo_diagnostico_dtos/toma_muestras_cuello_uterino_dto/criterio_tom_muest_cuello.dto';

@Injectable()
export class CriteriosMuesCuelloService {

    constructor(
        @InjectRepository(CriterioCuelloUterinoEntity)
        private readonly criterioCuelloUterinoRepository: CriterioCuelloUterinoRepository,
        @InjectRepository(CuelloUterinoEntity)
        private readonly cuelloUterinoRepository: CuelloUterinoRepository,
    ) { }


    //LISTANDO CRITERIOS POR ESTANDAR
    async getCriterioForEstandar(id: number): Promise<CriterioCuelloUterinoEntity[]> {
        const cri_cuello = await this.criterioCuelloUterinoRepository.createQueryBuilder('criterio')
            .select(['criterio', 'cue_uterino.cuel_ute_nombre_estandar'])
            .innerJoin('criterio.cue_uterino', 'cue_uterino')
            .where('cue_uterino.cuel_ute_id = :uteri_est', { uteri_est: id })
            .getMany()
        if (!cri_cuello) throw new NotFoundException(new MessageDto('No Existe en la lista'))
        return cri_cuello
    }

    async create(cuel_ute_id: number, dto: CriterioCuelloUterinoDto): Promise<any> {
        const cuellouterino = await this.cuelloUterinoRepository.findOne({ where: { cuel_ute_id: cuel_ute_id } });
        if (!cuellouterino) throw new InternalServerErrorException(new MessageDto('El Estandar no ha sido creado'))
        //CREAMOS EL DTO PARA TRANSFERIR LOS DATOS
        const criteriocuellouterino = this.criterioCuelloUterinoRepository.create(dto)
        //ASIGNAMOS EL ESTANDAR AL CRITERIO
        criteriocuellouterino.cue_uterino = cuellouterino
        //GUARDAR LOS DATOS EN LA BD
        await this.criterioCuelloUterinoRepository.save(criteriocuellouterino)
        return new MessageDto('El criterio ha sido Creado Correctamente');
    }

    //ENCONTRAR POR ID - CRITERIO CUELLO UTERINO
    async findById(cri_cuel_ute_id: number): Promise<CriterioCuelloUterinoEntity> {
        const criterio_mue_cuello_ute = await this.criterioCuelloUterinoRepository.findOne({ where: { cri_cuel_ute_id } });
        if (!criterio_mue_cuello_ute) {
            throw new NotFoundException(new MessageDto('El Criterio No Existe'));
        }
        return criterio_mue_cuello_ute;
    }

    //ELIMINAR CRITERIO CUELLO UTERINO
    async delete(id: number): Promise<any> {
        const criterio_mue_cuello_ute = await this.findById(id);
        await this.criterioCuelloUterinoRepository.delete(criterio_mue_cuello_ute.cri_cuel_ute_id)
        return new MessageDto(`Criterio Eliminado`);
    }
}
