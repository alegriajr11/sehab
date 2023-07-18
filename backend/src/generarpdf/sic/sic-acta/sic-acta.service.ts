import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageDto } from 'src/common/message.dto';
import { ActaSicPdfEntity } from './sic-acta-pdf.entity';
import { ActaSicPdfRepository } from './sic-acta-pdf.repository';
import { ActaSicPdfDto } from '../dto/sic-acta-pdf.dto';
import { LessThan } from 'typeorm';
import { AuditoriaRegistroService } from 'src/auditoria_registro/auditoria_registro.service';
import { TokenDto } from 'src/auth/dto/token.dto';
import { JwtService } from '@nestjs/jwt';
import { PayloadInterface } from 'src/auth/payload.interface';

@Injectable()
export class SicActaService {

    constructor(
        @InjectRepository(ActaSicPdfEntity)
        private readonly acta_sic_pdfRepository: ActaSicPdfRepository,
        private readonly jwtService: JwtService,
        private readonly auditoria_registro_services: AuditoriaRegistroService
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

    //ENCONTRAR ACTAS POR FECHA EXACTA Y/O NUMERO DE ACTA

    async findAllFromYear(year?: Date, numActa?: number): Promise<ActaSicPdfEntity[]> {
        let query = this.acta_sic_pdfRepository.createQueryBuilder('acta');

        if (numActa) {
            query = query.where('acta.act_id = :numActa', { numActa });
        }

        if (year) {
            query = query.andWhere('YEAR(acta.act_creado) = :year', { year });
        }

        const actas = await query.getMany();

        if (actas.length === 0) {
            throw new NotFoundException(new MessageDto('No hay auditorias con los filtros especificados'));
        }

        return actas;
    }


    /*CREACIÓN SIC ACTA PDF*/
    async create(payloads: { dto: ActaSicPdfDto, tokenDto: TokenDto }): Promise<any> {
        const { dto, tokenDto } = payloads;

        try {
            const acta_sicpdf = this.acta_sic_pdfRepository.create(dto);
            const usuario = await this.jwtService.decode(tokenDto.token);

            const payloadInterface: PayloadInterface = {
                usu_id: usuario[`usu_id`],
                usu_nombre: usuario[`usu_nombre`],
                usu_apellido: usuario[`usu_apellido`],
                usu_nombreUsuario: usuario[`usu_nombreUsuario`],
                usu_email: usuario[`usu_email`],
                usu_estado: usuario[`usu_estado`],
                usu_roles: usuario[`usu_roles`]
            };

            const year = new Date().getFullYear().toString();

            await this.acta_sic_pdfRepository.save(acta_sicpdf);
            await this.auditoria_registro_services.logCreateActaSic(
                payloadInterface.usu_nombre,
                payloadInterface.usu_apellido,
                'ip',
                dto.act_id,
                year,
                dto.act_prestador,
                dto.act_cod_prestador
            );

            return { error: false, message: 'El acta ha sido creada' };
        } catch (error) {
            console.log(error)
            // Devuelve un mensaje de error apropiado
            return { error: true, message: 'Error al crear el acta. Por favor, inténtelo de nuevo.' };
        }
    }






    //ACTUALIZAR CRITERIOS SP INDEPENDIENTE
    async updateActa(id: number, payload: { dto: ActaSicPdfDto, tokenDto: TokenDto }): Promise<any> {
        const { dto, tokenDto } = payload;
        const acta = await this.findByActa(id);
        if (!acta) {
            throw new NotFoundException(new MessageDto('El Acta no existe'))
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

        const usuario = await this.jwtService.decode(tokenDto.token);

        const payloadInterface: PayloadInterface = {
            usu_id: usuario[`usu_id`],
            usu_nombre: usuario[`usu_nombre`],
            usu_apellido: usuario[`usu_apellido`],
            usu_nombreUsuario: usuario[`usu_nombreUsuario`],
            usu_email: usuario[`usu_email`],
            usu_estado: usuario[`usu_estado`],
            usu_roles: usuario[`usu_roles`]
        };

        const year = new Date().getFullYear().toString();

        await this.acta_sic_pdfRepository.save(acta);
        await this.auditoria_registro_services.logUpdateActaSic(
            payloadInterface.usu_nombre,
            payloadInterface.usu_apellido,
            'ip',
            dto.act_id,
            year,
            dto.act_prestador,
            dto.act_cod_prestador
        );

        return new MessageDto(`El acta ha sido Actualizada`);

    }


}
