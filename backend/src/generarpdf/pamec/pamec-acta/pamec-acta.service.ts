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
import { PrestadorEntity } from 'src/prestador/prestador.entity';
import { PrestadorRepository } from 'src/prestador/prestador.repository';
import { EvaluacionPamecEntity } from 'src/pamec/evaluacion-pamec.entity';
import { EvaluacionPamecRepository } from 'src/pamec/evaluacion-pamec.repository';
import { EvaluacionPamecDto } from 'src/pamec/dto/evaluacionpamec.dto';
import { ActividadEntity } from 'src/pamec/actividad.entity';
import { ActividadRepository } from 'src/pamec/actividad.repository';

@Injectable()
export class PamecActaService {
    constructor(
        @InjectRepository(ActaPamecIpsEntity)
        private readonly actaPamecIpsRepository: ActaPamecIpsRepository,
        private readonly jwtService: JwtService,
        private readonly auditoria_registro_services: AuditoriaRegistroService,
        @InjectRepository(PrestadorEntity)
        private readonly prestadorRepository: PrestadorRepository,
        @InjectRepository(EvaluacionPamecEntity)
        private readonly evaluacionPamecRepository: EvaluacionPamecRepository,
        @InjectRepository(ActividadEntity)
        private readonly actividadRepository: ActividadRepository,
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

    //ENCONTRAR ACTAS POR FECHA EXACTA Y/O NUMERO DE ACTA Y/O NOMBRE PRESTADOR Y/O NIT

    async findAllBusqueda(year?: Date, numActa?: number, nomPresta?: string, nit?: string): Promise<ActaPamecIpsEntity[]> {
        let query = this.actaPamecIpsRepository.createQueryBuilder('acta');

        if (numActa) {
            query = query.where('acta.act_id = :numActa', { numActa });
        }

        if (nomPresta) {
            query = query.andWhere('acta.act_nombre_prestador = :nomPresta', { nomPresta });
        }

        if (nit) {
            query = query.andWhere('acta.act_nit = :nit', { nit });
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


    async create(payloads: { dto: ActaPamecIpsDto, tokenDto: TokenDto }): Promise<any> {
        const { dto, tokenDto } = payloads;


        const acta_sicpdf = this.actaPamecIpsRepository.create(dto);
        const usuario = this.jwtService.decode(tokenDto.token);

        try {
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

            const acta_ultima = await this.actaPamecIpsRepository.createQueryBuilder('acta')
                .addSelect('acta.id')
                .orderBy('acta.act_id', 'DESC')
                .getOne();

            //CONSULTAR LA ULTIMA ACTA QUE SE ASIGNARA A LA EVALUACION
            const acta = await this.actaPamecIpsRepository.findOne({ where: { id: acta_ultima.id } })

            //ASIGNAMOS LOS DATOS DE LA ACTA REGISTRADA PARA CONSTRUIR EL DTO DE EVALUACION-INDEPENDIENTES
            const eva_creado = acta_ultima.act_creado;
            const eva_acta_prestador = acta_ultima.act_cod_prestador; // Valor del ID del prestador

            //CONSULTAR EL PRESTADOR QUE TIENE EL ACTA
            const prestador = await this.prestadorRepository.findOne({ where: { pre_cod_habilitacion: eva_acta_prestador } })


            //ASIGNAMOS LOS DATOS AL DTO
            const evaluacionDto: EvaluacionPamecDto = {
                eva_creado
            }

            //CREAMOS EL DTO
            const evaluacion_pamec = await this.evaluacionPamecRepository.create(evaluacionDto)

            //ASIGNACION DE FORANEA ACTA UNO A UNO
            evaluacion_pamec.eval_acta_pamec = acta
            //ASIGNACION DE FORANEA PRESTADOR UNO A MUCHOS
            evaluacion_pamec.eval_prestador = prestador

            //GUARDAMOS EN LA ENTIDAD EVALUACION-INDEPENDIENTES
            await this.evaluacionPamecRepository.save(evaluacion_pamec)

            //CONSULTAR LA ÚLTIMA EVALUACIÓN EXISTENTE
            const evaluacion_ultima = await this.evaluacionPamecRepository.createQueryBuilder('evaluacion')
                .addSelect('evaluacion.eva_id')
                .orderBy('evaluacion.eva_id', 'DESC')
                .getOne();

            //CONSULTAR LAS ETAPAS EXISTENTES
            const actividad = await this.actividadRepository.find()

            //ASIGNAR LA EVALUACIÓN A LAS ETAPAS
            evaluacion_ultima.eval_actividadpam = actividad

            //GUARDAR LA RELACIÓN ENTRE EVALUACIÓN Y ETAPAS
            await this.evaluacionPamecRepository.save(evaluacion_ultima);

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

        await this.actaPamecIpsRepository.save(ips);
        await this.auditoria_registro_services.logUpdateActaPamec(
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
