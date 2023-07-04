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

        const { act_id } = dto

        const verf_acta_id = await this.acta_sic_pdfRepository.createQueryBuilder('acta')
            .where('acta.act_id != :act_id', { act_id })
            .andWhere('acta.act_creado')
        const acta_sicpdf = this.acta_sic_pdfRepository.create(dto);
        await this.acta_sic_pdfRepository.save(acta_sicpdf)
    }

    //ACTUALIZAR CRITERIOS SP INDEPENDIENTE
    async updateActa(id: number, dto: ActaSicPdfDto): Promise<any> {
        const acta = await this.findByActa(id);
        if (!acta) {
            throw new NotFoundException(new MessageDto('El acta no existe'))
        }
        dto.act_id ? acta.act_id = dto.act_id : acta.act_id = acta.act_id;
        dto.act_visita_inicial ? acta.act_visita_inicial = dto.act_visita_inicial : acta.act_visita_inicial = acta.act_visita_inicial;
        dto.act_visita_seguimiento ? acta.act_visita_seguimiento = dto.act_visita_seguimiento : acta.act_visita_seguimiento = acta.act_visita_seguimiento;
        dto.act_fecha_inicial ? acta.act_fecha_inicial = dto.act_fecha_inicial : acta.act_fecha_inicial = acta.act_fecha_inicial;
        dto.act_fecha_final ? acta.act_fecha_final = dto.act_fecha_final : acta.act_fecha_final = acta.act_fecha_final;
        dto.act_municipio ? acta.act_municipio = dto.act_municipio : acta.act_municipio = acta.act_municipio;
        dto.act_prestador ? acta.act_prestador = dto.act_prestador : acta.act_prestador = acta.act_prestador;
        dto.act_nit ? acta.act_nit = dto.act_nit : acta.act_nit = acta.act_nit;
        dto.act_direccion ? acta.act_direccion = dto.act_direccion : acta.act_direccion = acta.act_direccion;
        dto.act_barrio ? acta.act_barrio = dto.act_barrio : acta.act_barrio = acta.act_barrio;
        dto.act_telefono ? acta.act_telefono = dto.act_telefono : acta.act_telefono = acta.act_telefono;
        dto.act_email ? acta.act_email = dto.act_email : acta.act_email = acta.act_email;
        acta.act_sede_principal = dto.act_sede_principal !== undefined ? dto.act_sede_principal : "";
        acta.act_sede_localidad = dto.act_sede_localidad !== undefined ? dto.act_sede_localidad : "";
        acta.act_sede_direccion = dto.act_sede_direccion !== undefined ? dto.act_sede_direccion : "";
        dto.act_representante ? acta.act_representante = dto.act_representante : acta.act_representante = acta.act_representante;
        dto.act_cod_prestador ? acta.act_cod_prestador = dto.act_cod_prestador : acta.act_cod_prestador = acta.act_cod_prestador;
        dto.act_obj_visita ? acta.act_obj_visita = dto.act_obj_visita : acta.act_obj_visita = acta.act_obj_visita;
        dto.act_nombre_funcionario ? acta.act_nombre_funcionario = dto.act_nombre_funcionario : acta.act_nombre_funcionario = acta.act_nombre_funcionario;
        dto.act_cargo_funcionario ? acta.act_cargo_funcionario = dto.act_cargo_funcionario : acta.act_cargo_funcionario = acta.act_cargo_funcionario;
        dto.act_nombre_prestador ? acta.act_nombre_prestador = dto.act_nombre_prestador : acta.act_nombre_prestador = acta.act_nombre_prestador;
        dto.act_cargo_prestador ? acta.act_cargo_prestador = dto.act_cargo_prestador : acta.act_cargo_prestador = acta.act_cargo_prestador;

        await this.acta_sic_pdfRepository.save(acta);

        return new MessageDto(`El acta ha sido Actualizada`);

    }


}
