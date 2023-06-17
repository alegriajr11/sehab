import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CriterioConsumoPsicoactivasEntity } from '../criterio_cuid_cons_psicoact.entity';
import { ConsumoPsicoactivasEntity } from '../cuid_consumo_psicoactivas.entity';
import { CriterioConsumoPsicoactivasRepository } from '../criterio_cuid_cons_psicoact.repository';
import { ConsumoPsicoactivasRepository } from '../cuid_consumo_psicoactivas.repository';
import { MessageDto } from 'src/common/message.dto';
import { CriterioConsumoPsicoactivasDto } from 'src/resolucion/dtos/evaluacion_dtos/grupo_internacion_dtos/cuidado_basico_consumo_psicoactivas_dto/criterio_cuid_cons_psicoact.dto';

@Injectable()
export class CriteriosConsPsicoactivasService {

    constructor(
        @InjectRepository(CriterioConsumoPsicoactivasEntity)
        private readonly criterioConsumoPsicoactivasRepository: CriterioConsumoPsicoactivasRepository,
        @InjectRepository(ConsumoPsicoactivasEntity)
        private readonly consumoPsicoactivasRepository: ConsumoPsicoactivasRepository,
    ) { }


    //LISTANDO CRITERIOS POR ESTANDAR
    async getCriterioForEstandar(id: number): Promise<CriterioConsumoPsicoactivasEntity[]> {
        const cri_psico = await this.criterioConsumoPsicoactivasRepository.createQueryBuilder('criterio')
            .select(['criterio', 'cons_psicoactivas.cons_psi_nombre_estandar'])
            .innerJoin('criterio.cons_psicoactivas', 'cons_psicoactivas')
            .where('cons_psicoactivas.cons_psi_id = :psico_est', { psico_est: id })
            .getMany()
        if (!cri_psico) throw new NotFoundException(new MessageDto('No Existe en la lista'))
        return cri_psico
    }

    //CREAR CRITERIO
    async create(cons_psi_id: number, dto: CriterioConsumoPsicoactivasDto): Promise<any> {
        const conspsico = await this.consumoPsicoactivasRepository.findOne({ where: { cons_psi_id: cons_psi_id } });
        if (!conspsico) throw new InternalServerErrorException(new MessageDto('El Estandar no ha sido creado'))
        //CREAMOS EL DTO PARA TRANSFERIR LOS DATOS
        const criteriosconspsico = this.criterioConsumoPsicoactivasRepository.create(dto)
        //ASIGNAMOS EL ESTANDAR AL CRITERIO
        criteriosconspsico.cons_psicoactivas = conspsico
        //GUARDAR LOS DATOS EN LA BD
        await this.criterioConsumoPsicoactivasRepository.save(criteriosconspsico)
        return new MessageDto('El criterio ha sido Creado Correctamente');
    }

    //ENCONTRAR POR ID - CRITERIO CUIDADO BASICO PSICOACTIVAS  
    async findById(cri_cons_psic_id: number): Promise<CriterioConsumoPsicoactivasEntity> {
        const criterio_cons_psic = await this.criterioConsumoPsicoactivasRepository.findOne({ where: { cri_cons_psic_id } });
        if (!criterio_cons_psic) {
            throw new NotFoundException(new MessageDto('El Criterio No Existe'));
        }
        return criterio_cons_psic;
    }

    //ELIMINAR CRITERIO  CUIDADO BASICO PSICOACTIVAS
    async delete(id: number): Promise<any> {
        const criterio_cons_psic = await this.findById(id);
        await this.criterioConsumoPsicoactivasRepository.delete(criterio_cons_psic.cri_cons_psic_id)
        return new MessageDto(`Criterio Eliminado`);
    }
}
