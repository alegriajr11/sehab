import { Injectable, NotFoundException } from '@nestjs/common';
import { ActaSpIndependientePdfEntity } from './sp-ind-acta.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ActaSpIndependientePdfRepository } from './sp-ind-acta.repository';
import { MessageDto } from 'src/common/message.dto';
import { IndActaDto } from 'src/generarpdf/sp/dto/sp-ind-acta.dto';
import { TokenDto } from 'src/auth/dto/token.dto';
import { JwtService } from '@nestjs/jwt';
import { AuditoriaRegistroService } from 'src/auditoria_registro/auditoria_registro.service';
import { PayloadInterface } from 'src/auth/payload.interface';

@Injectable()
export class SpIndependientesService {
    constructor(
        @InjectRepository(ActaSpIndependientePdfEntity)
        private readonly actaSpIndependientePdfRepository: ActaSpIndependientePdfRepository,
        private readonly jwtService: JwtService,
        private readonly auditoria_registro_services: AuditoriaRegistroService
    ) { }

    //LISTAR TODAS LAS ACTAS SP INDEPENDIENTE
    async getallActas(): Promise<ActaSpIndependientePdfEntity[]> {
        const indep = await this.actaSpIndependientePdfRepository.createQueryBuilder('acta')
            .select(['acta'])
            .getMany()
        if (indep.length === 0) throw new NotFoundException(new MessageDto('No hay Evaluaciones Realiazadas SIC en la lista'))
        return indep;
    }

    //ENCONTRAR POR ACTA
    async findByActa(id: number): Promise<ActaSpIndependientePdfEntity> {
        const indep = await this.actaSpIndependientePdfRepository.findOne({ where: { id } });
        if (!indep) {
            throw new NotFoundException(new MessageDto('No Existe'));
        }
        return indep;
    }

    //ENCONTRAR POR ACTA POR FECHAS
    async findAllFromDate(date: string): Promise<ActaSpIndependientePdfEntity[]> {

        const actas = await this.actaSpIndependientePdfRepository.createQueryBuilder('acta')
            .where('acta.act_creado = :date', { date })
            .getMany();
        if (actas.length === 0) {
            throw new NotFoundException(new MessageDto('No hay actas en esa fecha'));
        }

        return actas;
    }

    //ENCONTRAR ACTAS POR FECHA EXACTA Y/O NUMERO DE ACTA

    async findAllFromYear(year?: Date, numActa?: number): Promise<ActaSpIndependientePdfEntity[]> {
        let query = this.actaSpIndependientePdfRepository.createQueryBuilder('acta');

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



    /*CREACIÓN SP INDEPENDIENTE ACTA PDF */
    async create(payloads: { dto: IndActaDto, tokenDto: TokenDto }): Promise<any> {
        const { dto, tokenDto } = payloads;

<<<<<<< HEAD
        const acta_sicpdf = this.actaSpIndependientePdfRepository.create(dto);
        const usuario = this.jwtService.decode(tokenDto.token);
=======
        try {
            const acta_sicpdf = this.actaSpIndependientePdfRepository.create(dto);
            const usuario = await this.jwtService.decode(tokenDto.token);
>>>>>>> c6b50d51fbe9d1ea67cfbac2ca70439989e95786

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

            await this.actaSpIndependientePdfRepository.save(acta_sicpdf);
            await this.auditoria_registro_services.logCreateSpIndep(
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
    async updateActaInd(id: number, payload: { dto: IndActaDto, tokenDto: TokenDto }): Promise<any> {
        const { dto, tokenDto } = payload;
        const ips = await this.findByActa(id);
        if (!ips) {
            throw new NotFoundException(new MessageDto('El Acta no existe'))
        }
        dto.act_id ? ips.act_id = dto.act_id : ips.act_id = ips.act_id;
        dto.act_visita_inicial ? ips.act_visita_inicial = dto.act_visita_inicial : ips.act_visita_inicial = ips.act_visita_inicial;
        dto.act_visita_seguimiento ? ips.act_visita_seguimiento = dto.act_visita_seguimiento : ips.act_visita_seguimiento = ips.act_visita_seguimiento;
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
        dto.act_nombre_prestador ? ips.act_nombre_prestador = dto.act_nombre_prestador : ips.act_nombre_prestador = ips.act_nombre_prestador;
        dto.act_cargo_prestador ? ips.act_cargo_prestador = dto.act_cargo_prestador : ips.act_cargo_prestador = ips.act_cargo_prestador;


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

        await this.actaSpIndependientePdfRepository.save(ips);
        await this.auditoria_registro_services.logUpdateSpIndep(
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

    //ÚLTIMA ACTA REGISTRADA
    async getLastestActa(): Promise<ActaSpIndependientePdfEntity> {
        const anioActual: number = new Date().getFullYear();

        const acta = await this.actaSpIndependientePdfRepository.createQueryBuilder('acta')
            .addSelect('acta.act_id')
            .orderBy('acta.act_id', 'DESC')
            .getOne();

        if (!acta) {
            const newActa: ActaSpIndependientePdfEntity = new ActaSpIndependientePdfEntity();
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
}
