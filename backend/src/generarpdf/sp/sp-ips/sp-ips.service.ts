import { Injectable, NotFoundException } from '@nestjs/common';
import { ActaSpIpsEntity } from './sp-ips.entity';
import { ActaSpIpsRepository } from './sp-ips.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageDto } from 'src/common/message.dto';
import { IpsDto } from 'src/generarpdf/sp/dto/sp-ips.dto';
import { TokenDto } from 'src/auth/dto/token.dto';
import { PayloadInterface } from 'src/auth/payload.interface';
import { JwtService } from '@nestjs/jwt';
import { AuditoriaRegistroService } from 'src/auditoria/auditoria_registro/auditoria_registro.service';
import { AuditoriaActualizacionService } from 'src/auditoria/auditoria_actualizacion/auditoria_actualizacion.service';
import { EvaluacionIpsRepository } from 'src/sp/sp_ips/evaluacionips.repository';
import { EvaluacionipsEntity } from 'src/sp/sp_ips/evaluacionips.entity';


@Injectable()
export class SpIpsService {
    constructor(
        @InjectRepository(ActaSpIpsEntity)
        private readonly actaSpIpsRepository: ActaSpIpsRepository,
        @InjectRepository(EvaluacionipsEntity)
        private readonly evaluacionesIps: EvaluacionIpsRepository,
        private readonly jwtService: JwtService,
        private readonly auditoria_registro_services: AuditoriaRegistroService,
        private readonly auditoria_actualizacion_service: AuditoriaActualizacionService
    ) { }

    //LISTAR TODAS LAS ACTAS SP IPS
    async getallActas(tokenDto: string): Promise<ActaSpIpsEntity[]> {

        const usuario = await this.jwtService.decode(tokenDto);
        const payloadInterface: PayloadInterface = {
            usu_id: usuario[`usu_id`],
            usu_nombre: usuario[`usu_nombre`],
            usu_apellido: usuario[`usu_apellido`],
            usu_nombreUsuario: usuario[`usu_nombreUsuario`],
            usu_email: usuario[`usu_email`],
            usu_estado: usuario[`usu_estado`],
            usu_roles: usuario[`usu_roles`]
        };
        if (!payloadInterface.usu_roles.includes('admin')) {
            const acta_ips = await this.actaSpIpsRepository.createQueryBuilder('acta_ips')
                .select(['acta_ips'])
                .where('acta_ips.act_id_funcionario = :id_funcionario', { id_funcionario: payloadInterface.usu_id })
                .getMany()
            if (acta_ips.length === 0) throw new NotFoundException(new MessageDto('No hay Evaluaciones Asignadas'))
            return acta_ips;
        } else {
            const acta_ips = await this.actaSpIpsRepository.createQueryBuilder('acta_ips')
                .select(['acta_ips'])
                .getMany()
            if (acta_ips.length === 0) throw new NotFoundException(new MessageDto('No hay evaluaciones asignadas'))
            return acta_ips;
        }

    }



    //ENCONTRAR POR ACTA
    async findByActa(id: number): Promise<ActaSpIpsEntity> {
        const ips = await this.actaSpIpsRepository.findOne({ where: { id } });
        if (!ips) {
            throw new NotFoundException(new MessageDto('No Existe'));
        }
        return ips;
    }



    //ÚLTIMA ACTA REGISTRADA
    async getLastestActa(): Promise<ActaSpIpsEntity> {
        const anioActual: number = new Date().getFullYear();

        const acta = await this.actaSpIpsRepository.createQueryBuilder('acta')
            .addSelect('acta.act_id')
            .orderBy('acta.act_id', 'DESC')
            .getOne();

        if (!acta) {
            const newActa: ActaSpIpsEntity = new ActaSpIpsEntity();
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


    //ENCONTRAR ACTAS POR FECHA EXACTA Y/O NUMERO DE ACTA Y/O NOMBRE PRESTADOR Y/O NIT

    //ENCONTRAR ACTAS POR FECHA EXACTA Y/O NUMERO DE ACTA Y/O NOMBRE PRESTADOR Y/O NIT
    async findAllBusqueda(year?: number, numActa?: number, nomPresta?: string, nit?: string): Promise<ActaSpIpsEntity[]> {
        let query = this.actaSpIpsRepository.createQueryBuilder('acta');

        if (numActa) {
            query = query.where('acta.act_id = :numActa', { numActa });
        }

        if (year) {
            if (numActa) {
                query = query.andWhere('YEAR(acta.act_creado) = :year', { year });
            } else {
                query = query.orWhere('YEAR(acta.act_creado) = :year', { year });
            }
        }

        if (nomPresta) {
            query = query.orWhere('acta.act_prestador LIKE :nomPresta', { nomPresta: `%${nomPresta}%` });
        }

        if (nit) {
            query = query.orWhere('acta.act_nit LIKE :nit', { nit: `%${nit}%` });
        }

        const actas = await query.getMany();

        if (actas.length === 0) {
            throw new NotFoundException(new MessageDto('No hay actas con los filtros especificados'));
        }

        return actas;
    }

    /*CREACIÓN SP IPS ACTA PDF */
    async create(payloads: { dto: IpsDto, evaluacionesIds: number[], tokenDto: TokenDto }): Promise<any> {
        const { dto, tokenDto, evaluacionesIds } = payloads;

        try {

            //Crear el ACTA DTO
            const acta_SpIpsPdf = this.actaSpIpsRepository.create(dto);

            //ASIGNACIÓN DE LAS EVALUACIONES
            const evaluaciones = await this.evaluacionesIps.findByIds(evaluacionesIds)
            acta_SpIpsPdf.evaluacionesips = evaluaciones

            //GUARDAR EL ACTA EN LA BASE DE DATOS
            await this.actaSpIpsRepository.save(acta_SpIpsPdf);

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

            await this.auditoria_registro_services.logCreateActaSpIps(
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
            // Devuelve un mensaje de error apropiado
            return { error: true, message: 'Error al crear el acta. Por favor, inténtelo de nuevo.' };
        }
    }

    //ACTUALIZAR  SP IPS ACTA PDF
    async updateActaIps(id: number, payload: { dto: IpsDto, tokenDto: TokenDto }): Promise<any> {
        const { dto, tokenDto } = payload;
        const ips = await this.findByActa(id);
        if (!ips) {
            throw new NotFoundException(new MessageDto('El Acta no existe'))
        }
        dto.act_id ? ips.act_id = dto.act_id : ips.act_id = ips.act_id;
        ips.act_visita_inicial = dto.act_visita_inicial !== undefined ? dto.act_visita_inicial : "";
        ips.act_visita_seguimiento = dto.act_visita_seguimiento !== undefined ? dto.act_visita_seguimiento : "";
        dto.act_fecha_inicial ? ips.act_fecha_inicial = dto.act_fecha_inicial : ips.act_fecha_inicial = ips.act_fecha_inicial;
        dto.act_fecha_final ? ips.act_fecha_final = dto.act_fecha_final : ips.act_fecha_final = ips.act_fecha_final;
        dto.act_municipio ? ips.act_municipio = dto.act_municipio : ips.act_municipio = ips.act_municipio;
        dto.act_prestador ? ips.act_prestador = dto.act_prestador : ips.act_prestador = ips.act_prestador;
        dto.act_nit ? ips.act_nit = dto.act_nit : ips.act_nit = ips.act_nit;
        dto.act_direccion ? ips.act_direccion = dto.act_direccion : ips.act_direccion = ips.act_direccion;
        dto.act_barrio ? ips.act_barrio = dto.act_barrio : ips.act_barrio = ips.act_barrio;
        dto.act_telefono ? ips.act_telefono = dto.act_telefono : ips.act_telefono = ips.act_telefono;
        dto.act_email ? ips.act_email = dto.act_email : ips.act_email = ips.act_email;
        dto.act_representante ? ips.act_representante = dto.act_representante : ips.act_representante = ips.act_representante;
        dto.act_cod_prestador ? ips.act_cod_prestador = dto.act_cod_prestador : ips.act_cod_prestador = ips.act_cod_prestador;
        dto.act_obj_visita ? ips.act_obj_visita = dto.act_obj_visita : ips.act_obj_visita = ips.act_obj_visita;
        dto.act_nombre_funcionario ? ips.act_nombre_funcionario = dto.act_nombre_funcionario : ips.act_nombre_funcionario = ips.act_nombre_funcionario;
        dto.act_cargo_funcionario ? ips.act_cargo_funcionario = dto.act_cargo_funcionario : ips.act_cargo_funcionario = ips.act_cargo_funcionario;
        dto.act_firma_funcionario ? ips.act_firma_funcionario = dto.act_firma_funcionario : ips.act_firma_funcionario = ips.act_firma_funcionario;
        dto.act_nombre_prestador ? ips.act_nombre_prestador = dto.act_nombre_prestador : ips.act_nombre_prestador = ips.act_nombre_prestador;
        dto.act_cargo_prestador ? ips.act_cargo_prestador = dto.act_cargo_prestador : ips.act_cargo_prestador = ips.act_cargo_prestador;
        dto.act_firma_prestador ? ips.act_firma_prestador = dto.act_firma_prestador : ips.act_firma_prestador = ips.act_firma_prestador;
        dto.act_nombre_prestador_acompanante ? ips.act_nombre_prestador_acompanante = dto.act_nombre_prestador_acompanante : ips.act_nombre_prestador_acompanante = ips.act_nombre_prestador_acompanante;
        dto.act_cargo_prestador_acompanante ? ips.act_cargo_prestador_acompanante = dto.act_cargo_prestador_acompanante : ips.act_cargo_prestador_acompanante = ips.act_cargo_prestador_acompanante;
        dto.act_firma_prestador_acompanante ? ips.act_firma_prestador_acompanante = dto.act_firma_prestador_acompanante : ips.act_firma_prestador_acompanante = ips.act_firma_prestador_acompanante;



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

        await this.actaSpIpsRepository.save(ips);
        await this.auditoria_actualizacion_service.logUpdateActaSpIps(
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


    //CERRAR ACTA SP
    async cerrarActa(id: number, payload: { tokenDto: TokenDto }): Promise<any> {

        const { tokenDto } = payload;

        try {
            const acta = await this.findByActa(id);

            if (!acta) {
                throw new NotFoundException(new MessageDto('El Acta no existe'));
            }

            acta.act_estado = '0'

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

            await this.actaSpIpsRepository.save(acta);
            await this.auditoria_registro_services.logCierreActaSpIps(
                payloadInterface.usu_nombre,
                payloadInterface.usu_apellido,
                'ip',
                acta.act_id,
                year,
                acta.act_prestador,
                acta.act_cod_prestador
            );

            return new MessageDto('El Acta ha sido Cerrada');
        } catch (error) {
            // Devuelve un mensaje de error apropiado
            return { error: true, message: 'Ocurrió un error al cerrar el Acta' };
        }
    }
}
