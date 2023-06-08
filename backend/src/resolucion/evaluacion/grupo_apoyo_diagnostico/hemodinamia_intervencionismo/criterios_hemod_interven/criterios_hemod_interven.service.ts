import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CriterioHermoIntervenEntity } from '../criterio_hemo_inter.entity';
import { CriterioHermoIntervenRepository } from '../criterio_hemo_inter.repository';
import { HermodIntervenEntity } from '../hemod_interven.entity';
import { HermodIntervenRepository } from '../hemod_interven.repository';
import { MessageDto } from 'src/common/message.dto';
import { CriterioHermodinamiaIntervenDto } from 'src/resolucion/dtos/evaluacion_dtos/grupo_apoyo_diagnostico_dtos/hemodinamia_intervencionismo_dto/criterio_hemo_inter.dto';

@Injectable()
export class CriteriosHemodIntervenService {

    constructor(
        @InjectRepository(CriterioHermoIntervenEntity)
        private readonly criterioHermoIntervenRepository: CriterioHermoIntervenRepository,
        @InjectRepository(HermodIntervenEntity)
        private readonly hermodIntervenRepository: HermodIntervenRepository,
    ) { }

        //LISTANDO CRITERIOS POR ESTANDAR
    async getCriterioForEstandar(id: number): Promise<CriterioHermoIntervenEntity[]> {
    const cri_hemo_inter = await this.criterioHermoIntervenRepository.createQueryBuilder('criterio')
    .select(['criterio', 'hermod_interven.hermointer_nombre_estandar'])
    .innerJoin('criterio.hermod_interven', 'hermod_interven')
    .where('hermod_interven.hermointer_id = :dial_est', { dial_est : id})
    .getMany()
    if (!cri_hemo_inter) throw new NotFoundException(new MessageDto('No Existe en la lista'))
    return cri_hemo_inter
}

//METODO AGREGAR CRITERIO-HEMODINamia
async create(hermointer_id: number, dto: CriterioHermodinamiaIntervenDto): Promise<any> {
    const hermodinamia = await this.hermodIntervenRepository.findOne({ where: { hermointer_id: hermointer_id} });
    if (!hermodinamia) throw new InternalServerErrorException(new MessageDto('El Estandar no ha sido creado'))
    //CREAMOS EL DTO PARA TRANSFERIR LOS DATOS
    const criteriohermodinamia = this.criterioHermoIntervenRepository.create(dto)
    //ASIGNAMOS EL ESTANDAR AL CRITERIO
    criteriohermodinamia.hermod_interven = hermodinamia
    //GUARDAR LOS DATOS EN LA BD
    await this.criterioHermoIntervenRepository.save(criteriohermodinamia)
    return new MessageDto('El criterio ha sido Creado Correctamente');
}
}
