import { Injectable, NotFoundException } from '@nestjs/common';
import { ActaSpIndependientePdfEntity } from './sp-ind-acta.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ActaSpIndependientePdfRepository } from './sp-ind-acta.repository';
import { MessageDto } from 'src/common/message.dto';
import { IndActaDto } from 'src/generarpdf/sp/dto/sp-ind-acta.dto';

@Injectable()
export class SpIndependientesService {
    constructor(
        @InjectRepository(ActaSpIndependientePdfEntity)
        private readonly actaSpIndependientePdfRepository: ActaSpIndependientePdfRepository,
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


    /*CREACIÓN SP INDEPENDIENTE ACTA PDF */
    async create(dto: IndActaDto): Promise<any> {
        const indep = this.actaSpIndependientePdfRepository.create(dto);
        await this.actaSpIndependientePdfRepository.save(indep)
    }

    //ACTUALIZAR CRITERIOS SP INDEPENDIENTE
    async updateActaInd(id: number, dto: IndActaDto): Promise<any> {
        const indep = await this.findByActa(id);
        if (!indep) {
            throw new NotFoundException(new MessageDto('El acta no existe'))
        }
        dto.act_id ? indep.act_id = dto.act_id : indep.act_id = indep.act_id;
        dto.act_visita_inicial ? indep.act_visita_inicial = dto.act_visita_inicial : indep.act_visita_inicial = indep.act_visita_inicial;
        dto.act_visita_seguimiento ? indep.act_visita_seguimiento = dto.act_visita_seguimiento : indep.act_visita_seguimiento = indep.act_visita_seguimiento;
        dto.act_fecha_inicial ? indep.act_fecha_inicial = dto.act_fecha_inicial : indep.act_fecha_inicial = indep.act_fecha_inicial;
        dto.act_fecha_final ? indep.act_fecha_final = dto.act_fecha_final : indep.act_fecha_final = indep.act_fecha_final;
        dto.act_municipio ? indep.act_municipio = dto.act_municipio : indep.act_municipio = indep.act_municipio;
        dto.act_prestador ? indep.act_prestador = dto.act_prestador : indep.act_prestador = indep.act_prestador;
        dto.act_nit ? indep.act_nit = dto.act_nit : indep.act_nit = indep.act_nit;
        dto.act_direccion ? indep.act_direccion = dto.act_direccion : indep.act_direccion = indep.act_direccion;
        dto.act_barrio ? indep.act_barrio = dto.act_barrio : indep.act_barrio = indep.act_barrio;
        dto.act_telefono ? indep.act_telefono = dto.act_telefono : indep.act_telefono = indep.act_telefono;
        dto.act_email ? indep.act_email = dto.act_email : indep.act_email = indep.act_email;
        dto.act_representante ? indep.act_representante = dto.act_representante : indep.act_representante = indep.act_representante;
        dto.act_cod_prestador ? indep.act_cod_prestador = dto.act_cod_prestador : indep.act_cod_prestador = indep.act_cod_prestador;
        dto.act_obj_visita ? indep.act_obj_visita = dto.act_obj_visita : indep.act_obj_visita = indep.act_obj_visita;
        dto.act_nombre_funcionario ? indep.act_nombre_funcionario = dto.act_nombre_funcionario : indep.act_nombre_funcionario = indep.act_nombre_funcionario;
        dto.act_cargo_funcionario ? indep.act_cargo_funcionario = dto.act_cargo_funcionario : indep.act_cargo_funcionario = indep.act_cargo_funcionario;
        dto.act_nombre_prestador ? indep.act_nombre_prestador = dto.act_nombre_prestador : indep.act_nombre_prestador = indep.act_nombre_prestador;
        dto.act_cargo_prestador ? indep.act_cargo_prestador = dto.act_cargo_prestador : indep.act_cargo_prestador = indep.act_cargo_prestador;

        await this.actaSpIndependientePdfRepository.save(indep);

        return new MessageDto(`El acta ha sido Actualizada`);

    }
}
