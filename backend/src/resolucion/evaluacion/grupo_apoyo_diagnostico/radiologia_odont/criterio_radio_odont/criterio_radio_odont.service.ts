import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageDto } from 'src/common/message.dto';
import { CriterioRadiologiaOdontoEntity } from '../criterio_radio_odont.entity';
import { RadiologiaOdontoEntity } from '../radiologia_odont.entity';
import { CriterioRadiologiaOdontoRepository } from '../criterio_radio_odont.repository';
import { RadiologiaOdontoRepository } from '../radiologia_odont.repository';
import { CriterioRadiologiaOdontoDto } from 'src/resolucion/dtos/evaluacion_dtos/grupo_apoyo_diagnostico_dtos/radiologia_odont_dto/criterio_radio_odont.dto';

@Injectable()
export class CriterioRadioOdontService {

    constructor(
        @InjectRepository(CriterioRadiologiaOdontoEntity)
        private readonly criterioRadiologiaOdontoRepository: CriterioRadiologiaOdontoRepository,
        @InjectRepository(RadiologiaOdontoEntity)
        private readonly radiologiaOdontoRepository: RadiologiaOdontoRepository,
        ) {}


         //LISTANDO CRITERIOS POR ESTANDAR
        async getCriterioForEstandar(id: number): Promise<CriterioRadiologiaOdontoEntity[]> {
            const cri_rad_odon = await this.criterioRadiologiaOdontoRepository.createQueryBuilder('criterio')
            .select(['criterio', 'rad_odontologica.rad_odont_nombre_estandar'])
            .innerJoin('criterio.rad_odontologica', 'rad_odontologica')
            .where('rad_odontologica.rad_odont_id = :odon_est', { odon_est : id})
            .getMany()
            if (!cri_rad_odon) throw new NotFoundException(new MessageDto('No Existe en la lista'))
            return cri_rad_odon
        }

        //CREAR CRITERIO
        async create(rad_odont_id: number, dto: CriterioRadiologiaOdontoDto): Promise<any> {
            const radioodonto = await this.radiologiaOdontoRepository.findOne({ where: { rad_odont_id: rad_odont_id} });
            if (!radioodonto) throw new InternalServerErrorException(new MessageDto('El Estandar no ha sido creado'))
            //CREAMOS EL DTO PARA TRANSFERIR LOS DATOS
            const criterioradioodonto= this.criterioRadiologiaOdontoRepository.create(dto)
            //ASIGNAMOS EL ESTANDAR AL CRITERIO
            criterioradioodonto.rad_odontologica = radioodonto
            //GUARDAR LOS DATOS EN LA BD
            await this.criterioRadiologiaOdontoRepository.save(criterioradioodonto)
            return new MessageDto('El criterio ha sido Creado Correctamente');
        }
}
