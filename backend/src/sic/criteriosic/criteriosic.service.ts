import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageDto } from 'src/common/message.dto';
import { Like } from 'typeorm';
import { CriteriosicEntity } from '../criteriosic.entity';
import { CriterioSicRepository } from '../criteriosic.repository';
import { DominioEntity } from '../dominio.entity';
import { DominioRepository } from '../dominio.repository';
import { IndicadorEntity } from '../indicador.entity';
import { IndicadorRepository } from '../indicador.repository';

@Injectable()
export class CriteriosicService {


    constructor(
        @InjectRepository(DominioEntity)
        private readonly dominioRepository: DominioRepository,
        @InjectRepository(IndicadorEntity)
        private readonly indicadorRepository: IndicadorRepository,
        @InjectRepository(CriteriosicEntity)
        private readonly criterioSicRepository: CriterioSicRepository,
        
    ) { }

    async findById(dom_id: number): Promise<DominioEntity> {
        const dom = await this.dominioRepository.findOne({ where: { dom_id } });
        if (!dom) {
            throw new NotFoundException(new MessageDto('No Existe'));
        }
        return dom;
    }

    async findByIdCri(cri_id: number): Promise<CriteriosicEntity> {
        const cri = await this.criterioSicRepository.createQueryBuilder('criterio')
            .select(['criterio'])
            .where('criterio.cri_id = :cri', { cri: cri_id })
            .getOne()
        if (!cri) {
            throw new NotFoundException(new MessageDto('No Existe'));
        }
        return cri;
    }


    async getall(): Promise<DominioEntity[]> {
        const dom = await this.dominioRepository.find()
        if (!dom) throw new NotFoundException(new MessageDto('No hay Criterios en la lista'))
        return dom;
    }

    async delete(id: number): Promise<any> {
        const criterio = await this.findByIdCri(id);
        await this.criterioSicRepository.createQueryBuilder('criterio')
            .innerJoin('criterio.indicadores.ind_id', '')
            .delete()
            .where("")
        return new MessageDto('Criterio Eliminado');
    }

    async removeCriterioFromIndicador(criId: number, indId: string) {
        const criterio = await this.criterioSicRepository.findOne({ where: { cri_id: criId }, relations: ['indicadores'] });
        const indicador = await this.indicadorRepository.findOne({ where: { ind_id: indId } });
        criterio.indicadores = criterio.indicadores.filter(g => g.ind_id !== indicador.ind_id);
        await this.criterioSicRepository.save(criterio);
        return new MessageDto('Criterio Eliminado');
    }
}
