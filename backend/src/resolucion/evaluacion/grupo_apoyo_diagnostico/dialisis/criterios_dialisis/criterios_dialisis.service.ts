import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CriterioDialisisEntity } from '../criterio_dialisis.entity';
import { CriterioDialisisRepository } from '../criterio_dialisis.repository';
import { MessageDto } from 'src/common/message.dto';
import { DialisisEntity } from '../dialisis.entity';
import { DialisisRepository } from '../dialisis.repository';
import { CriterioDialisisDto } from 'src/resolucion/dtos/evaluacion_dtos/grupo_apoyo_diagnostico_dtos/dialisis_dto/criterio_dialisis.dto';

@Injectable()
export class CriteriosDialisisService {

    constructor(
        @InjectRepository(CriterioDialisisEntity)
        private readonly criterioDialisisRepository: CriterioDialisisRepository,
        @InjectRepository(DialisisEntity)
        private readonly dialisisRepository: DialisisRepository,
    ) { }


    //LISTANDO CRITERIOS POR ESTANDAR
    async getCriterioForEstandar(id: number): Promise<CriterioDialisisEntity[]> {
        const cri_dialisis = await this.criterioDialisisRepository.createQueryBuilder('criterio')
            .select(['criterio', 'dialisis.dial_nombre_estandar'])
            .innerJoin('criterio.dialisis', 'dialisis')
            .where('dialisis.dial_id = :dial_est', { dial_est: id })
            .getMany()
        if (!cri_dialisis) throw new NotFoundException(new MessageDto('No Existe en la lista'))
        return cri_dialisis

    }

    //METODO AGREGAR CRITERIO-DIALISIS
    async create(dial_id: number, dto: CriterioDialisisDto): Promise<any> {
        const dialisis = await this.dialisisRepository.findOne({ where: { dial_id: dial_id} });
        if (!dialisis) throw new InternalServerErrorException(new MessageDto('El Estandar no ha sido creado'))
        //CREAMOS EL DTO PARA TRANSFERIR LOS DATOS
        const criterio_dialisis = this.criterioDialisisRepository.create(dto)
        //ASIGNAMOS EL ESTANDAR AL CRITERIO
        criterio_dialisis.dialisis = dialisis
        //GUARDAR LOS DATOS EN LA BD
        await this.criterioDialisisRepository.save(criterio_dialisis)
        return new MessageDto('El criterio ha sido Creado Correctamente');
    }


}
