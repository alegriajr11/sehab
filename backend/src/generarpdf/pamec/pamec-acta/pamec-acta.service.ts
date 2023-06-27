import { Injectable, NotFoundException } from '@nestjs/common';
import { ActaPamecIpsEntity } from './pamec-acta-ips.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ActaPamecIpsRepository } from './pamec-acta-ips.repository';
import { MessageDto } from 'src/common/message.dto';
import { ActaPamecIpsDto } from 'src/generarpdf/pamec/dto/pamec-acta-ips.dto';

@Injectable()
export class PamecActaService {
    constructor(
        @InjectRepository(ActaPamecIpsEntity)
        private readonly actaPamecIpsRepository: ActaPamecIpsRepository,
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


    /*CREACIÓN PAMEC IPS ACTA PDF */
    async create(dto: ActaPamecIpsDto): Promise<any> {
        const ips = this.actaPamecIpsRepository.create(dto);
        await this.actaPamecIpsRepository.save(ips)
    }

    //ACTUALIZAR PAMEC IPS ACTA PDF
    async updateActaipspam(id: number, dto: ActaPamecIpsDto): Promise<any> {
        const ips = await this.findByActa(id);
        if (!ips) {
            throw new NotFoundException(new MessageDto('El acta no existe'))
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

        await this.actaPamecIpsRepository.save(ips);

        return new MessageDto(`El acta ha sido Actualizada`);


    }
}