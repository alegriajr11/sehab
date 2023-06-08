import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CriterioPatologiaEntity } from '../criterio_patologia.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CriterioPatologiaRepository } from '../criterio_patologia.repository';
import { PatologiaEntity } from '../patologia.entity';
import { PatologiaRepository } from '../patologia.repository';
import { MessageDto } from 'src/common/message.dto';
import { CriterioPatologiaDto } from 'src/resolucion/dtos/evaluacion_dtos/grupo_apoyo_diagnostico_dtos/patologia_dto/criterio_patologia.dto';

@Injectable()
export class CriteriosPatologiaService {

    constructor(
        @InjectRepository(CriterioPatologiaEntity)
        private readonly criterioPatologiaRepository: CriterioPatologiaRepository,
        @InjectRepository(PatologiaEntity)
        private readonly patologiaRepository: PatologiaRepository,
    ) { }


    //LISTANDO CRITERIOS POR ESTANDAR
    async getCriterioForEstandar(id: number): Promise<CriterioPatologiaEntity[]> {
        const cri_pato = await this.criterioPatologiaRepository.createQueryBuilder('criterio')
            .select(['criterio', 'patologia.pato_nombre_estandar'])
            .innerJoin('criterio.patologia', 'patologia')
            .where('patologia.pato_id = :pato_est', { pato_est: id })
            .getMany()
        if (!cri_pato) throw new NotFoundException(new MessageDto('No Existe en la lista'))
        return cri_pato
    }

    //CREAR CRITERIOS
    async create(pato_id: number, dto: CriterioPatologiaDto): Promise<any> {
        const patologia = await this.patologiaRepository.findOne({ where: { pato_id: pato_id } });
        if (!patologia) throw new InternalServerErrorException(new MessageDto('El Estandar no ha sido creado'))
        //CREAMOS EL DTO PARA TRANSFERIR LOS DATOS
        const criteriopatologia = this.criterioPatologiaRepository.create(dto)
        //ASIGNAMOS EL ESTANDAR AL CRITERIO
        criteriopatologia.patologia = patologia
        //GUARDAR LOS DATOS EN LA BD
        await this.criterioPatologiaRepository.save(criteriopatologia)
        return new MessageDto('El criterio ha sido Creado Correctamente');
    }
}
