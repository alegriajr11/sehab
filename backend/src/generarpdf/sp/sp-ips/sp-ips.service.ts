import { Injectable, NotFoundException } from '@nestjs/common';
import { ActaSpIpsEntity } from './sp-ips.entity';
import { ActaSpIpsRepository } from './sp-ips.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageDto } from 'src/common/message.dto';
import { IpsDto } from 'src/generarpdf/sp/dto/sp-ips.dto';

@Injectable()
export class SpIpsService {
    constructor(
        @InjectRepository(ActaSpIpsEntity)
        private readonly actaSpIpsRepository: ActaSpIpsRepository,
    ) { }

    //LISTAR TODAS LAS ACTAS SP IPS
    async getallActas(): Promise<ActaSpIpsEntity[]> {
        const ips = await this.actaSpIpsRepository.createQueryBuilder('acta')
            .select(['acta'])
            .getMany()
        if (ips.length === 0) throw new NotFoundException(new MessageDto('No hay Evaluaciones Realiazadas SIC en la lista'))
        return ips;
    }

    //ENCONTRAR POR ACTA
    async findByActa(id: number): Promise<ActaSpIpsEntity> {
        const ips = await this.actaSpIpsRepository.findOne({ where: { id } });
        if (!ips) {
            throw new NotFoundException(new MessageDto('No Existe'));
        }
        return ips;
    }

    //ENCONTRAR POR ACTA POR FECHAS
    async findAllFromDate(date: string): Promise<ActaSpIpsEntity[]> {

        const actas = await this.actaSpIpsRepository.createQueryBuilder('acta')
            .where('acta.act_creado = :date', { date })
            .getMany();
        if (actas.length === 0) {
            throw new NotFoundException(new MessageDto('No hay actas en esa fecha'));
        }

        return actas;
    }

    //ENCONTRAR ACTAS POR AÑO EXACTA
    async findAllFromYear(date: string): Promise<ActaSpIpsEntity[]> {

        const actas = await this.actaSpIpsRepository.createQueryBuilder('acta')
            .where('YEAR(acta.act_creado )= :date', { date })
            .getMany();
        if (actas.length === 0) {
            throw new NotFoundException(new MessageDto('No hay actas en ese año'));
        }

        return actas;
    }

    /*CREACIÓN SP IPS ACTA PDF */
    async create(dto: IpsDto): Promise<any> {
        const ips = this.actaSpIpsRepository.create(dto);
        await this.actaSpIpsRepository.save(ips)
    }

    //ACTUALIZAR  SP IPS ACTA PDF
    async updateActaIps(id: number, dto: IpsDto): Promise<any> {
        const ips = await this.findByActa(id);
        if (!ips) {
            throw new NotFoundException(new MessageDto('El acta no existe'))
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

        await this.actaSpIpsRepository.save(ips);

        return new MessageDto(`El acta ha sido Actualizada`);

    }
}
