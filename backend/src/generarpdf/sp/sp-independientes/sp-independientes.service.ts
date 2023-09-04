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
import { EvaluacionIndependientesRepository } from 'src/sp/sp_ind/evaluacion-independientes.repository';
import { EvaluacionIndependientesEntity } from 'src/sp/sp_ind/evaluacion-independientes.entity';
import { EvaluacionIndependientesDto } from 'src/sp/sp_ind/dto/evaluacion-independientes.dto';
import { PrestadorEntity } from 'src/prestador/prestador.entity';
import { PrestadorRepository } from 'src/prestador/prestador.repository';
import { EtapaInd } from 'src/sp/sp_ind/etapaind.entity';
import { EtapaIndRepository } from 'src/sp/sp_ind/etapaind.repository';

@Injectable()
export class SpIndependientesService {
    constructor(
        @InjectRepository(ActaSpIndependientePdfEntity)
        private readonly actaSpIndependientePdfRepository: ActaSpIndependientePdfRepository,
        @InjectRepository(EvaluacionIndependientesEntity)
        private readonly evaluacionIndependientesRepository: EvaluacionIndependientesRepository,
        @InjectRepository(PrestadorEntity)
        private readonly prestadorRepository: PrestadorRepository,
        @InjectRepository(EtapaInd)
        private readonly etapaIndependientesRepository: EtapaIndRepository,
        private readonly jwtService: JwtService,
        private readonly auditoria_registro_services: AuditoriaRegistroService
    ) { }

    //LISTAR TODAS LAS ACTAS SP INDEPENDIENTE
    async getallActas(): Promise<ActaSpIndependientePdfEntity[]> {
        const indep = await this.actaSpIndependientePdfRepository.createQueryBuilder('acta')
            .select(['acta'])
            .getMany()
        if (indep.length === 0) throw new NotFoundException(new MessageDto('No hay Evaluaciones Realiazadas en la lista'))
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
            throw new NotFoundException(new MessageDto('No hay Actas en esa fecha'));
        }

        return actas;
    }


    //ENCONTRAR ACTAS POR FECHA EXACTA Y/O NUMERO DE ACTA Y/O NOMBRE PRESTADOR Y/O NIT
    async findAllBusqueda(year?: number, numActa?: number, nomPresta?: string, nit?: string): Promise<ActaSpIndependientePdfEntity[]> {
        let query = this.actaSpIndependientePdfRepository.createQueryBuilder('acta');

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



    /*CREACIÓN SP INDEPENDIENTE ACTA PDF */
    async create(payloads: { dto: IndActaDto, tokenDto: TokenDto }): Promise<any> {
        const { dto, tokenDto } = payloads;

        try {
            const acta_sicpdf = this.actaSpIndependientePdfRepository.create(dto);
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

            await this.actaSpIndependientePdfRepository.save(acta_sicpdf);

            const acta_ultima = await this.actaSpIndependientePdfRepository.createQueryBuilder('acta')
                .addSelect('acta.id')
                .orderBy('acta.act_id', 'DESC')
                .getOne();

            //CONSULTAR LA ULTIMA ACTA QUE SE ASIGNARA A LA EVALUACION
            const acta = await this.actaSpIndependientePdfRepository.findOne({ where: { id: acta_ultima.id } })

            //ASIGNAMOS LOS DATOS DE LA ACTA REGISTRADA PARA CONSTRUIR EL DTO DE EVALUACION-INDEPENDIENTES
            const eva_creado = acta_ultima.act_creado;  //Fecha de creación del acta
            const eva_acta_prestador = acta_ultima.act_cod_prestador; // Valor del ID del prestador

            //CONSULTAR EL PRESTADOR QUE TIENE EL ACTA
            const prestador = await this.prestadorRepository.findOne({ where: { pre_cod_habilitacion: eva_acta_prestador } })

            //ASIGNAMOS LOS DATOS AL DTO
            const evaluacionDto: EvaluacionIndependientesDto = {
                eva_creado
            }

            //CREAMOS EL DTO
            const evaluacion_ind = await this.evaluacionIndependientesRepository.create(evaluacionDto)

            //ASIGNACION DE FORANEA ACTA UNO A UNO
            evaluacion_ind.eval_acta_ind = acta
            //ASIGNACION DE FORANEA PRESTADOR UNO A MUCHOS
            evaluacion_ind.eval_prestador = prestador

            //GUARDAMOS EN LA ENTIDAD EVALUACION-INDEPENDIENTES DE LA BASE DATOS
            await this.evaluacionIndependientesRepository.save(evaluacion_ind)

            //CONSULTAR LA ÚLTIMA EVALUACIÓN EXISTENTE
            const evaluacion_ultima = await this.evaluacionIndependientesRepository.createQueryBuilder('evaluacion')
                .addSelect('evaluacion.eva_id')
                .orderBy('evaluacion.eva_id', 'DESC')
                .getOne();

            //CONSULTAR LAS ETAPAS EXISTENTES
            const etapas = await this.etapaIndependientesRepository.find()

            //ASIGNAR LA EVALUACIÓN A LAS ETAPAS
            evaluacion_ultima.eval_etapa_independientes = etapas

            //GUARDAR LA RELACIÓN ENTRE EVALUACIÓN Y ETAPAS
            await this.evaluacionIndependientesRepository.save(evaluacion_ultima);

            //ASIGNAR LA AUDITORIA DEL ACTA CREADA
            await this.auditoria_registro_services.logCreateActaSpIndep(
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


    //CERRAR ACTA SP
    async cerrarActa(id: number, payload: { tokenDto: TokenDto }): Promise<any> {

        const { tokenDto } = payload;

        try {
            const acta = await this.findByActa(id);
            console.log(acta)

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

            await this.actaSpIndependientePdfRepository.save(acta);
            await this.auditoria_registro_services.logCierreActaSpInd(
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
        dto.act_firma_prestador ? ips.act_firma_prestador = dto.act_firma_prestador : ips.act_firma_prestador = ips.act_firma_prestador;
        dto.act_firma_funcionario ? ips.act_firma_funcionario = dto.act_firma_funcionario : ips.act_firma_funcionario = ips.act_firma_funcionario;


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
        await this.auditoria_registro_services.logUpdateActaSpIndep(
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
