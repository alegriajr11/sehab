import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CriterioPartoEntity } from '../criterio_parto.entity';
import { PartoEntity } from '../parto.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { PartoRepository } from '../parto.repository';
import { CriterioPartoRepository } from '../criterio_parto.repository';
import { MessageDto } from 'src/common/message.dto';
import { CriterioPartoDto } from 'src/resolucion/dtos/evaluacion_dtos/grupo_atencion_inmediata_dtos/parto_dto/criterio_parto.dto';

@Injectable()
export class CriteriosPartoService {

    constructor(
        @InjectRepository(CriterioPartoEntity)
        private readonly criterioPartoRepository: CriterioPartoRepository,
        @InjectRepository(PartoEntity)
        private readonly partoRepository: PartoRepository,
    ) { }


    //LISTANDO CRITERIOS POR ESTANDAR
    async getCriterioForEstandar(id: number): Promise<CriterioPartoEntity[]> {
        const cri_parto = await this.criterioPartoRepository.createQueryBuilder('criterio')
            .select(['criterio', 'parto.parto_nombre_estandar'])
            .innerJoin('criterio.parto', 'parto')
            .where('parto.parto_id = :part_est', { part_est: id })
            .getMany()
        if (!cri_parto) throw new NotFoundException(new MessageDto('No Existe en la lista'))
        return cri_parto
    }

    async create(parto_id: number, dto: CriterioPartoDto): Promise<any> {
        const parto = await this.partoRepository.findOne({ where: { parto_id: parto_id } });
        if (!parto) throw new InternalServerErrorException(new MessageDto('El Estandar no ha sido creado'))
        //CREAMOS EL DTO PARA TRANSFERIR LOS DATOS
        const criterioparto = this.criterioPartoRepository.create(dto)
        //ASIGNAMOS EL ESTANDAR AL CRITERIO
        criterioparto.parto = parto
        //GUARDAR LOS DATOS EN LA BD
        await this.criterioPartoRepository.save(criterioparto)
        return new MessageDto('El criterio ha sido Creado Correctamente');
    }

    //ENCONTRAR POR ID - CRITERIO PARTO  
    async findById(criparto_id: number): Promise<CriterioPartoEntity> {
        const criterio_parto = await this.criterioPartoRepository.findOne({ where: { criparto_id } });
        if (!criterio_parto) {
            throw new NotFoundException(new MessageDto('El Criterio No Existe'));
        }
        return criterio_parto;
    }

    //ELIMINAR CRITERIO PARTO
    async delete(id: number): Promise<any> {
        const criterio_parto = await this.findById(id);
        await this.criterioPartoRepository.delete(criterio_parto.criparto_id)
        return new MessageDto(`Criterio Eliminado`);
    }

    //ACTUALIZAR CRITERIOS PARTO
    async updateParto(id: number, dto: CriterioPartoDto): Promise<any> {
        const criterio_parto = await this.findById(id);
        if (!criterio_parto) {
            throw new NotFoundException(new MessageDto('El criterio no existe'))
        }
        dto.criparto_modalidad ? criterio_parto.criparto_modalidad = dto.criparto_modalidad : criterio_parto.criparto_modalidad = criterio_parto.criparto_modalidad;
        dto.criparto_complejidad ? criterio_parto.criparto_complejidad = dto.criparto_complejidad : criterio_parto.criparto_complejidad = criterio_parto.criparto_complejidad;
        criterio_parto.criparto_articulo = dto.criparto_articulo !== undefined ? dto.criparto_articulo : "";
        criterio_parto.criparto_seccion = dto.criparto_seccion !== undefined ? dto.criparto_seccion : "";
        criterio_parto.criparto_apartado = dto.criparto_apartado !== undefined ? dto.criparto_apartado : "";
        dto.criparto_nombre_criterio ? criterio_parto.criparto_nombre_criterio = dto.criparto_nombre_criterio : criterio_parto.criparto_nombre_criterio = criterio_parto.criparto_nombre_criterio;

        await this.criterioPartoRepository.save(criterio_parto);

        return new MessageDto(`El criterio ha sido Actualizado`);

    }
}
