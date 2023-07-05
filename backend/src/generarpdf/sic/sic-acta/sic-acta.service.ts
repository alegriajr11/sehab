import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageDto } from 'src/common/message.dto';
import { ActaSicPdfEntity } from './sic-acta-pdf.entity';
import { ActaSicPdfRepository } from './sic-acta-pdf.repository';
import { ActaSicPdfDto } from '../dto/sic-acta-pdf.dto';
import { LessThan } from 'typeorm';

@Injectable()
export class SicActaService {

    constructor(
        @InjectRepository(ActaSicPdfEntity)
        private readonly acta_sic_pdfRepository: ActaSicPdfRepository,
    ) { }

    //LISTAR TODAS LAS ACTAS SIC
    async getallActas(): Promise<ActaSicPdfEntity[]> {
        const acta = await this.acta_sic_pdfRepository.createQueryBuilder('acta')
            .select(['acta'])
            .getMany()
        if (acta.length === 0) throw new NotFoundException(new MessageDto('No hay Evaluaciones Realiazadas SIC en la lista'))
        return acta;
    }

    //ENCONTRAR POR ACTA
    async findByActa(id: number): Promise<ActaSicPdfEntity> {
        const acta = await this.acta_sic_pdfRepository.findOne({ where: { id } });
        if (!acta) {
            throw new NotFoundException(new MessageDto('No Existe'));
        }
        return acta;
    }

    //ÚLTIMA ACTA REGISTRADA
    async getLastestActa(): Promise<ActaSicPdfEntity> {
        const anioActual: number = new Date().getFullYear();

        const acta = await this.acta_sic_pdfRepository.createQueryBuilder('acta')
            .addSelect('acta.act_id')
            .orderBy('acta.act_id', 'DESC')
            .getOne();

        if (!acta) {
            const newActa: ActaSicPdfEntity = new ActaSicPdfEntity();
            newActa.act_id = 1;
            return newActa;
        }

        acta.act_creado = new Date(acta.act_creado);

        if (acta.act_creado.getFullYear() === anioActual) {
            acta.act_id++;
        } else {
            acta.act_id = 1;
        }

        
        return acta;
    }




    //ENCONTRAR ACTAS POR FECHA EXACTA
    async findAllFromDate(date: string): Promise<ActaSicPdfEntity[]> {

        const actas = await this.acta_sic_pdfRepository.createQueryBuilder('acta')
            .where('acta.act_creado = :date', { date })
            .getMany();
        if (actas.length === 0) {
            throw new NotFoundException(new MessageDto('No hay actas en esa fecha'));
        }

        return actas;
    }


/*CREACIÓN SIC ACTA PDF */
async create(dto: ActaSicPdfDto): Promise<any> {
    const acta_sicpdf = this.acta_sic_pdfRepository.create(dto);
    await this.acta_sic_pdfRepository.save(acta_sicpdf)
}


}
