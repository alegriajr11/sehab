import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CriterioPrehospitalariaEntity } from '../criterio_prehospitalaria.entity';
import { PrehospitalariaEntity } from '../prehospitalaria.entity';
import { PrehospitalariaRepository } from '../prehospitalaria.repository';
import { CriterioPrehospitalariaRepository } from '../criterio_prehospitalaria.repository';
import { MessageDto } from 'src/common/message.dto';
import { CriterioPrehospitalariaDto } from 'src/resolucion/dtos/evaluacion_dtos/grupo_atencion_inmediata_dtos/prehospitalaria_dto/criterio_prehospitalaria.dto';

@Injectable()
export class CriteriosPrehospitalariaService {

    constructor(
        @InjectRepository(CriterioPrehospitalariaEntity)
        private readonly criterioPrehospitalariaRepository: CriterioPrehospitalariaRepository,
        @InjectRepository(PrehospitalariaEntity)
        private readonly prehospitalariaRepository: PrehospitalariaRepository,
    ) { }


    //LISTANDO CRITERIOS POR ESTANDAR
    async getCriterioForEstandar(id: number): Promise<CriterioPrehospitalariaEntity[]> {
        const cri_prehos = await this.criterioPrehospitalariaRepository.createQueryBuilder('criterio')
            .select(['criterio', 'prehospitalaria.parto_nombre_estandar'])
            .innerJoin('criterio.prehospitalaria', 'prehospitalaria')
            .where('prehospitalaria.parto_id = :prehos_est', { prehos_est: id })
            .getMany()
        if (!cri_prehos) throw new NotFoundException(new MessageDto('No Existe en la lista'))
        return cri_prehos
    }

    //CREAR CRITERIO
    async create(parto_id: number, dto: CriterioPrehospitalariaDto): Promise<any> {
        const prehospita = await this.prehospitalariaRepository.findOne({ where: { parto_id: parto_id } });
        if (!prehospita) throw new InternalServerErrorException(new MessageDto('El Estandar no ha sido creado'))
        //CREAMOS EL DTO PARA TRANSFERIR LOS DATOS
        const criterioprehospita = this.criterioPrehospitalariaRepository.create(dto)
        //ASIGNAMOS EL ESTANDAR AL CRITERIO
        criterioprehospita.prehospitalaria = prehospita
        //GUARDAR LOS DATOS EN LA BD
        await this.criterioPrehospitalariaRepository.save(criterioprehospita)
        return new MessageDto('El criterio ha sido Creado Correctamente');
    }

    //ENCONTRAR POR ID - CRITERIO PREHOSPITALARIA   
    async findById(cripreh_id: number): Promise<CriterioPrehospitalariaEntity> {
        const criterio_prehospi = await this.criterioPrehospitalariaRepository.findOne({ where: { cripreh_id } });
        if (!criterio_prehospi) {
            throw new NotFoundException(new MessageDto('El Criterio No Existe'));
        }
        return criterio_prehospi;
    }

    //ELIMINAR CRITERIO PREHOSPITALARIA 
    async delete(id: number): Promise<any> {
        const criterio_prehospi = await this.findById(id);
        await this.criterioPrehospitalariaRepository.delete(criterio_prehospi.cripreh_id)
        return new MessageDto(`Criterio Eliminado`);
    }
}
