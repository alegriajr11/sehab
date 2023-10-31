import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CriterioAjusteEntity } from '../../criterioajuste.entity';
import { CriterioAjusteRepository } from '../../criterioajuste.repository';
import { CalificacionAjusteIpsEntity } from '../../calificacionips_ajuste.entity';
import { CalificacionIpsAjusteRepository } from '../../calificacionips_ajuste.repository';
import { MessageDto } from 'src/common/message.dto';
import { CalificacionAjusteDto } from 'src/usuario/dto/SpIps/calificaciones/calificacionajuste.dto';
import { JwtService } from '@nestjs/jwt';
import { AuditoriaRegistroService } from 'src/auditoria/auditoria_registro/auditoria_registro.service';
import { AuditoriaEliminacionService } from 'src/auditoria/auditoria_eliminacion/auditoria_eliminacion.service';
import { AuditoriaActualizacionService } from 'src/auditoria/auditoria_actualizacion/auditoria_actualizacion.service';
import { TokenDto } from 'src/auth/dto/token.dto';
import { PayloadInterface } from 'src/auth/payload.interface';

@Injectable()
export class CalificacionipsAjusteService {

    constructor(
        @InjectRepository(CriterioAjusteEntity)
        private criterioAjusteRepository: CriterioAjusteRepository,
        @InjectRepository(CalificacionAjusteIpsEntity)
        private calificacionIpsAjusteRepository: CalificacionIpsAjusteRepository,
        private readonly jwtService: JwtService,
        private readonly auditoria_registro_services: AuditoriaRegistroService,
        private readonly auditoria_actualizacion_services: AuditoriaActualizacionService,
        // private readonly auditoria_eliminacion_services: AuditoriaEliminacionService
    ) { }

    //buscar calificacion por id
    async findByCal(cal_id: number): Promise<CalificacionAjusteIpsEntity> {
        const criterio = await this.calificacionIpsAjusteRepository.findOne({ where: { cal_id } })
        if (!criterio) {
            throw new NotFoundException(new MessageDto('La calificacion No Existe'));
        }
        return criterio
    }

    async findByCri(id: number): Promise<CalificacionAjusteIpsEntity[]> {
        const calificacion = await this.calificacionIpsAjusteRepository.createQueryBuilder('calificacion')
            .select(['calificacion.cal_id', 'calificacion.cal_nota', 'calificacion.cal_observaciones', 'calificacionipsAjuste.cri_aju_nombre'])
            .innerJoin('calificacion.calificacionipsAjuste', 'calificacionipsAjuste')
            .where('calificacionipsAjuste.cri_aju_id = :cri', { cri: id })
            .getMany()
        if (!calificacion.length) throw new NotFoundException(new MessageDto('No hay Calificaciones en la lista'))
        return calificacion;
    }

    // creacion de calificacion con su respectivo criterio
    async create( payloads: { dto: CalificacionAjusteDto, tokenDto: TokenDto }): Promise<any> {
        try {
            const { dto, tokenDto } = payloads;
            const criterio_ind = await this.criterioAjusteRepository.findOne({ where: { cri_aju_id: dto.cri_aju_id } });
            if (!criterio_ind) {
                throw new NotFoundException(new MessageDto('El criterio no ha sido '))
            }
            //CREAMOS EL DTO PARA TRANSFERIR LOS DATOS
            const calificacion = this.calificacionIpsAjusteRepository.create(dto)
            //asigna la evaluacion al criterio
            calificacion.calificacionipsAjuste = criterio_ind

            const nombre_criterio = criterio_ind.cri_aju_nombre;

            calificacion.cal_evaluacion=criterio_ind.cri_aju_eva.evips_id

            // //ASIGNO EL ACTA ID
            //const acta_idIps =criterio.cri_aju_eva.actas_ips[0].acta_id;


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

            await this.calificacionIpsAjusteRepository.save(calificacion)
            await this.auditoria_registro_services.logCreateCalificacionSpIps(
                payloadInterface.usu_nombre,
                payloadInterface.usu_apellido,
                'ip',
                dto.cal_nota,
                nombre_criterio,
                //acta_idIps,
                year,
            );
            return new MessageDto('La calificacion ha sido Creada');
        } catch (error) {
            throw new InternalServerErrorException(new MessageDto(error.message));
        }
    }


    // actualizacion de calificacion 
    async update(id: number, payloads: { dto: CalificacionAjusteDto, tokenDto: TokenDto }): Promise<any> {

        try {
            const { dto, tokenDto } = payloads;

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

            const calificacion = await this.findByCal(id);
            if (!calificacion)
                throw new NotFoundException(new MessageDto('La calificacion No Existe'));

            dto.cal_nota ? calificacion.cal_nota = dto.cal_nota : calificacion.cal_nota = calificacion.cal_nota;
            dto.cal_observaciones ? calificacion.cal_observaciones = dto.cal_observaciones : calificacion.cal_observaciones = calificacion.cal_observaciones;

            const criterio_ind = await this.criterioAjusteRepository.findOne({ where: { cri_aju_id: dto.cri_aju_id } });
            if (!criterio_ind) {
                throw new NotFoundException(new MessageDto('El criterio no ha sido '))
            }
            calificacion.cal_evaluacion=criterio_ind.cri_aju_eva.evips_id

            const nombre_criterio = criterio_ind.cri_aju_nombre;

            await this.calificacionIpsAjusteRepository.save(calificacion);
            await this.auditoria_actualizacion_services.logUpdateCalificacionSpIps(
                payloadInterface.usu_nombre,
                payloadInterface.usu_apellido,
                'ip',
                dto.cal_nota,
                nombre_criterio,
                //acta_idIps,
                year,
            );
            return new MessageDto(`La calificacion  ha sido Actualizada`);
        } catch (error) {
            throw new InternalServerErrorException(new MessageDto(error.message));
        }
    }


    async delete(id: number): Promise<any> {
        const calificacion = await this.findByCal(id);
        await this.calificacionIpsAjusteRepository.delete(calificacion.cal_id)
        return new MessageDto(`calificacion Eliminada`);
    }

    //lista las calificaciones con sus criterios
    async getallCalCrixEva(evips_id: number, act_id: number): Promise<CalificacionAjusteIpsEntity[]> {

        const criterio = await this.calificacionIpsAjusteRepository.createQueryBuilder('calificacion')
            .select(['calificacion'])
            .innerJoinAndSelect('calificacion.calificacionipsAjuste', 'calificacionipsAjuste')
            .innerJoinAndSelect('calificacionipsAjuste.cri_aju_eva', 'cri_aju_eva')
            .innerJoinAndSelect('cri_aju_eva.actas_ips', 'actas_ips')
            .where('actas_ips.id = :id_acta', { id_acta: act_id })
            .andWhere('calificacion.cal_evaluacion = :id_eva', { id_eva: evips_id })
            .getMany()

        return criterio
    }
}
