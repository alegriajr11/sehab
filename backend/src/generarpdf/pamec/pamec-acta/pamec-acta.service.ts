import { Injectable, NotFoundException } from '@nestjs/common';
import { ActaPamecIpsEntity } from './pamec-acta.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ActaPamecIpsRepository } from './pamec-acta.repository';
import { MessageDto } from 'src/common/message.dto';
import { ActaPamecIpsDto } from 'src/generarpdf/pamec/dto/pamec-acta-ips.dto';
import { JwtService } from '@nestjs/jwt';
import { AuditoriaRegistroService } from 'src/auditoria_registro/auditoria_registro.service';
import { TokenDto } from 'src/auth/dto/token.dto';
import { PayloadInterface } from 'src/auth/payload.interface';

@Injectable()
export class PamecActaService {
    constructor(
        @InjectRepository(ActaPamecIpsEntity)
        private readonly actaPamecIpsRepository: ActaPamecIpsRepository,
        private readonly jwtService: JwtService,
        private readonly auditoria_registro_services: AuditoriaRegistroService
    ) { }

    //LISTAR TODAS PAMEC IPS ACTA PDF
    async getallActas(): Promise<ActaPamecIpsEntity[]> {
        const indep = await this.actaPamecIpsRepository.createQueryBuilder('acta')
            .select(['acta'])
            .getMany()
        if (indep.length === 0) throw new NotFoundException(new MessageDto('No hay Evaluaciones Realiazadas SIC en la lista'))
        return indep;
    }

    //ENCONTRAR POR ACTA
    async findByActa(id: number): Promise<ActaPamecIpsEntity> {
        const ips = await this.actaPamecIpsRepository.findOne({ where: { id } });
        if (!ips) {
            throw new NotFoundException(new MessageDto('No Existe'));
        }
        return ips;
    }

    //async getallActasYear(): Promise<ActaPamecIpsEntity[]> {


    //ENCONTRAR POR ACTA POR FECHAS
    async findAllFromDate(date: string): Promise<ActaPamecIpsEntity[]> {

        const actas = await this.actaPamecIpsRepository.createQueryBuilder('acta')
            .where('acta.act_creado = :date', { date })
            .getMany();
        if (actas.length === 0) {
            throw new NotFoundException(new MessageDto('No hay actas en esa fecha'));
        }

        return actas;
    }

    

    //ENCONTRAR ACTAS POR FECHA EXACTA Y/O NUMERO DE ACTA

    async findAllFromYear(year?: Date, numActa?: number): Promise<ActaPamecIpsEntity[]> {
        let query = this.actaPamecIpsRepository.createQueryBuilder('acta');

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


    /*CREACIÓN PAMEC IPS ACTA PDF */
    async create(payloads: { dto: ActaPamecIpsDto, tokenDto: TokenDto }): Promise<any> {
        const { dto, tokenDto } = payloads;

        const acta_sicpdf = this.actaPamecIpsRepository.create(dto);
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

        await this.actaPamecIpsRepository.save(acta_sicpdf);
        await this.auditoria_registro_services.logCreatePamecActa(
            payloadInterface.usu_nombre,
            payloadInterface.usu_apellido,
            'ip',
            dto.act_id,
            year,
            dto.act_prestador,
            dto.act_cod_prestador
        );
    }


    //ACTUALIZAR PAMEC IPS ACTA PDF
    
    async updateActaipspam(id: number, payload:{ dto: ActaPamecIpsDto, tokenDto: TokenDto}): Promise<any> {
        const { dto, tokenDto } = payload;
        const ips = await this.findByActa(id);
        if (!ips) {
            throw new NotFoundException(new MessageDto('El Acta no existe'))
        }
        dto.act_id ? ips.act_id = dto.act_id : ips.act_id = ips.act_id;
        dto.act_fecha_visita ? ips.act_fecha_visita = dto.act_fecha_visita : ips.act_fecha_visita = ips.act_fecha_visita;
        dto.act_tipo_visita ? ips.act_tipo_visita = dto.act_tipo_visita : ips.act_tipo_visita = ips.act_tipo_visita;
        dto.act_municipio ? ips.act_municipio = dto.act_municipio : ips.act_municipio = ips.act_municipio;
        dto.act_prestador ? ips.act_prestador = dto.act_prestador : ips.act_prestador = ips.act_prestador;
        dto.act_nit ? ips.act_nit = dto.act_nit : ips.act_nit = ips.act_nit;
        dto.act_direccion ? ips.act_direccion = dto.act_direccion : ips.act_direccion = ips.act_direccion;
        dto.act_barrio ? ips.act_barrio = dto.act_barrio : ips.act_barrio = ips.act_barrio;
        dto.act_telefono ? ips.act_telefono = dto.act_telefono : ips.act_telefono = ips.act_telefono;
        dto.act_email ? ips.act_email = dto.act_email : ips.act_email = ips.act_email;
        dto.act_representante ? ips.act_representante = dto.act_representante : ips.act_representante = ips.act_representante;
        dto.act_cod_prestador ? ips.act_cod_prestador = dto.act_cod_prestador : ips.act_cod_prestador = ips.act_cod_prestador;
        dto.act_nombre_funcionario ? ips.act_nombre_funcionario = dto.act_nombre_funcionario : ips.act_nombre_funcionario = ips.act_nombre_funcionario;
        dto.act_cargo_funcionario ? ips.act_cargo_funcionario = dto.act_cargo_funcionario : ips.act_cargo_funcionario = ips.act_cargo_funcionario;
        ips.act_nombre_funcionario2 = dto.act_nombre_funcionario2 !== undefined ? dto.act_nombre_funcionario2 : "";
        ips.act_cargo_funcionario2 = dto.act_cargo_funcionario2 !== undefined ? dto.act_cargo_funcionario2 : "";
        dto.act_nombre_prestador ? ips.act_nombre_prestador = dto.act_nombre_prestador : ips.act_nombre_prestador = ips.act_nombre_prestador;
        dto.act_cargo_prestador ? ips.act_cargo_prestador = dto.act_cargo_prestador : ips.act_cargo_prestador = ips.act_cargo_prestador;
        ips.act_nombre_prestador2 = dto.act_nombre_prestador2 !== undefined ? dto.act_nombre_prestador2 : "";
        ips.act_cargo_prestador2 = dto.act_cargo_prestador2 !== undefined ? dto.act_cargo_prestador2 : "";
        dto.act_obj_visita ? ips.act_obj_visita = dto.act_obj_visita : ips.act_obj_visita = ips.act_obj_visita;


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

        await this.actaPamecIpsRepository.save(ips);
        await this.auditoria_registro_services.logUpdatePamecActa(
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
