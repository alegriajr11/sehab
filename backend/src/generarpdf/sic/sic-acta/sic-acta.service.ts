import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageDto } from 'src/common/message.dto';
import { ActaSicPdfEntity } from './sic-acta-pdf.entity';
import { ActaSicPdfRepository } from './sic-acta-pdf.repository';
import { ActaSicPdfDto } from '../dto/sic-acta-pdf.dto';
import { LessThan } from 'typeorm';
import { AuditoriaRegistroService } from 'src/auditoria/auditoria_registro/auditoria_registro.service';
import { TokenDto } from 'src/auth/dto/token.dto';
import { JwtService } from '@nestjs/jwt';
import { PayloadInterface } from 'src/auth/payload.interface';
import { PrestadorEntity } from 'src/prestador/prestador.entity';
import { PrestadorRepository } from 'src/prestador/prestador.repository';
import { EvaluacionSicDto } from 'src/sic/dto/evaluacionsic.dto';
import { EvaluacionSicEntity } from 'src/sic/evaluacionsic.entity';
import { EvaluacionsicRepository } from 'src/sic/evaluacionsic.repository';
import { DominioEntity } from 'src/sic/dominio.entity';
import { DominioRepository } from 'src/sic/dominio.repository';
import { AuditoriaActualizacionService } from 'src/auditoria/auditoria_actualizacion/auditoria_actualizacion.service';

@Injectable()
export class SicActaService {

    constructor(
        @InjectRepository(ActaSicPdfEntity)
        private readonly acta_sic_pdfRepository: ActaSicPdfRepository,
        private readonly jwtService: JwtService,
        @InjectRepository(PrestadorEntity)
        private readonly prestadorRepository: PrestadorRepository,
        @InjectRepository(EvaluacionSicEntity)
        private readonly evaluacionSicRepository: EvaluacionsicRepository,
        @InjectRepository(DominioEntity)
        private readonly dominioRepository: DominioRepository,
        private readonly auditoria_registro_services: AuditoriaRegistroService,
        private readonly auditoria_actualizacion_service: AuditoriaActualizacionService
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

    //ÚLTIMA ACTA REGISTRADA ID PRIMARY KEY
    async ultimaActaIdPk(): Promise<ActaSicPdfEntity> {
        const acta = await this.acta_sic_pdfRepository.createQueryBuilder('acta')
            .addSelect('acta.id')
            .orderBy('acta.id', 'DESC')
            .getOne();
        if (!acta) {
            throw new NotFoundException(new MessageDto('No Existe'));
        }
        return acta
    }

    //ÚLTIMA ACTA REGISTRADA Y SE INCREMENTA A UNO
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


    //ENCONTRAR ACTAS POR FECHA EXACTA Y/O NUMERO DE ACTA Y/O NOMBRE PRESTADOR Y/O NIT
    async findAllBusqueda(year?: number, numActa?: number, nomPresta?: string, nit?: string): Promise<ActaSicPdfEntity[]> {
        let query = this.acta_sic_pdfRepository.createQueryBuilder('acta');

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

            const acta_ultima = await this.acta_sic_pdfRepository.createQueryBuilder('acta')
                .addSelect('acta.id')
                .orderBy('acta.act_id', 'DESC')
                .getOne();

            //CONSULTAR LA ULTIMA ACTA QUE SE ASIGNARA A LA EVALUACION
            const acta = await this.acta_sic_pdfRepository.findOne({ where: { id: acta_ultima.id } })

            //ASIGNAMOS LOS DATOS DE LA ACTA REGISTRADA PARA CONSTRUIR EL DTO DE EVALUACION-INDEPENDIENTES
            const eva_creado = acta_ultima.act_creado;  //Fecha de creación del acta
            const eva_acta_prestador = acta_ultima.act_cod_prestador; // Valor del ID del prestador

            //CONSULTAR EL PRESTADOR QUE TIENE EL ACTA
            const prestador = await this.prestadorRepository.findOne({ where: { pre_cod_habilitacion: eva_acta_prestador } })

            //ASIGNAMOS LOS DATOS AL DTO
            const evaluacionDto: EvaluacionSicDto = {
                eva_creado
            }

            //CREAMOS EL DTO
            const evaluacion_sic = await this.evaluacionSicRepository.create(evaluacionDto)

            //ASIGNACION DE FORANEA ACTA UNO A UNO
            evaluacion_sic.eval_acta_sic = acta
            //ASIGNACION DE FORANEA PRESTADOR UNO A MUCHOS
            evaluacion_sic.eval_sic_prestator = prestador

            //GUARDAMOS EN LA ENTIDAD EVALUACION-SIC DE LA BASE DATOS
            await this.evaluacionSicRepository.save(evaluacion_sic)


            //CONSULTAR LA ÚLTIMA EVALUACIÓN EXISTENTE
            const evaluacion_ultima = await this.evaluacionSicRepository.createQueryBuilder('evaluacion')
                .addSelect('evaluacion.eva_id')
                .orderBy('evaluacion.eva_id', 'DESC')
                .getOne();

            //CONSULTAR LOS DOMINIOS EXISTENTES
            const dominios = await this.dominioRepository.find()

            evaluacion_ultima.eva_sic_dom = dominios

            //GUARDAR LA RELACIÓN ENTRE EVALUACIÓN Y ETAPAS
            await this.evaluacionSicRepository.save(evaluacion_ultima);


            //ASIGNAR LA AUDITORIA DEL ACTA CREADA
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


    //CERRAR ACTA
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

            await this.acta_sic_pdfRepository.save(acta);
            await this.auditoria_registro_services.logCierreActaSic(
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



    //ACTUALIZAR ACTA SIC
    async updateActa(id: number, payload: { dto: ActaSicPdfDto, tokenDto: TokenDto }): Promise<any> {
        const { dto, tokenDto } = payload;
        const acta = await this.findByActa(id);
        if (!acta) {
            throw new NotFoundException(new MessageDto('El Acta no existe'))
        }
        dto.act_id ? acta.act_id = dto.act_id : acta.act_id = acta.act_id;
        acta.act_visita_inicial = dto.act_visita_inicial !== undefined ? dto.act_visita_inicial : "";
        acta.act_visita_seguimiento = dto.act_visita_seguimiento !== undefined ? dto.act_visita_seguimiento : "";
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
        dto.act_firma_funcionario ? acta.act_firma_funcionario = dto.act_firma_funcionario : acta.act_firma_funcionario = acta.act_firma_funcionario;
        dto.act_nombre_prestador ? acta.act_nombre_prestador = dto.act_nombre_prestador : acta.act_nombre_prestador = acta.act_nombre_prestador;
        dto.act_cargo_prestador ? acta.act_cargo_prestador = dto.act_cargo_prestador : acta.act_cargo_prestador = acta.act_cargo_prestador;
        dto.act_firma_prestador ? acta.act_firma_prestador = dto.act_firma_prestador : acta.act_firma_prestador = acta.act_firma_prestador;


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
        await this.auditoria_actualizacion_service.logUpdateActaSic(
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
