import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CriterioMedicinaNuclearEntity } from '../criterio_medicina_nuclear.entity';
import { CriterioMedicinaNuclearRepository } from '../criterio_medicina_nuclear.repository';
import { MedNuclearEntity } from '../medicina_nuclear.entity';
import { MedNuclearRepository } from '../medicina_nuclear.repository';
import { MessageDto } from 'src/common/message.dto';
import { CriterioMedicinaNuclearDto } from 'src/resolucion/dtos/evaluacion_dtos/grupo_apoyo_diagnostico_dtos/medicina_nuclear_dto/criterio_medicina_nuclear.dto';

@Injectable()
export class CriterioMedicinaNuclearService {

    constructor(
        @InjectRepository(CriterioMedicinaNuclearEntity)
        private readonly criterioMedicinaNuclearRepository: CriterioMedicinaNuclearRepository,
        @InjectRepository(MedNuclearEntity)
        private readonly medNuclearRepository: MedNuclearRepository,
    ) { }


    //LISTANDO CRITERIOS POR ESTANDAR
    async getCriterioForEstandar(id: number): Promise<CriterioMedicinaNuclearEntity[]> {
        const cri_med_nuc = await this.criterioMedicinaNuclearRepository.createQueryBuilder('criterio')
            .select(['criterio', 'med_nuclear.med_nucl_nombre_estandar'])
            .innerJoin('criterio.med_nuclear', 'med_nuclear')
            .where('med_nuclear.med_nucl_id = :nuc_est', { nuc_est: id })
            .getMany()
        if (!cri_med_nuc) throw new NotFoundException(new MessageDto('No Existe en la lista'))
        return cri_med_nuc
    }


    //METODO AGREGAR CRITERIO-HEMODINamia
    async create(med_nucl_id: number, dto: CriterioMedicinaNuclearDto): Promise<any> {
        const mednuclear = await this.medNuclearRepository.findOne({ where: { med_nucl_id: med_nucl_id } });
        if (!mednuclear) throw new InternalServerErrorException(new MessageDto('El Estandar no ha sido creado'))
        //CREAMOS EL DTO PARA TRANSFERIR LOS DATOS
        const criteriomednuclear = this.criterioMedicinaNuclearRepository.create(dto)
        //ASIGNAMOS EL ESTANDAR AL CRITERIO
        criteriomednuclear.med_nuclear = mednuclear
        //GUARDAR LOS DATOS EN LA BD
        await this.criterioMedicinaNuclearRepository.save(criteriomednuclear)
        return new MessageDto('El criterio ha sido Creado Correctamente');
    }
}
