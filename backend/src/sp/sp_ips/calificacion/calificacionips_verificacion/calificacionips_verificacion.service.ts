import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CalificacionVerificacionIpsEntity } from '../../calificacionips_verificacion.entity';
import { CalificacionIpsVerificacionRepository } from '../../calificacionips_verificacion.repository';
import { CriterioVerificacionEntity } from '../../criterioverificacion.entity';
import { CriterioVerifiRepository } from '../../criterioverifi.repository';
import { MessageDto } from 'src/common/message.dto';
import { CalificacionVerificacionDto } from 'src/usuario/dto/SpIps/calificaciones/calificacionverificacion.dto';
import { TokenDto } from 'src/auth/dto/token.dto';
import { JwtService } from '@nestjs/jwt';
import { AuditoriaRegistroService } from 'src/auditoria/auditoria_registro/auditoria_registro.service';
import { AuditoriaActualizacionService } from 'src/auditoria/auditoria_actualizacion/auditoria_actualizacion.service';
import { PayloadInterface } from 'src/auth/payload.interface';

@Injectable()
export class CalificacionipsVerificacionService {

    constructor(
        @InjectRepository(CriterioVerificacionEntity)
        private criterioVerifiRepository: CriterioVerifiRepository,
        @InjectRepository(CalificacionVerificacionIpsEntity)
        private calificacionIpsVerificacionRepository: CalificacionIpsVerificacionRepository,
        private readonly jwtService: JwtService,
        private readonly auditoria_registro_services: AuditoriaRegistroService,
        private readonly auditoria_actualizacion_services: AuditoriaActualizacionService,
    ){}

    //buscar calificacion por id
    async findByCal(cal_id: number): Promise<CalificacionVerificacionIpsEntity> {
        const calificacion = await this.calificacionIpsVerificacionRepository.findOne({ where: { cal_id } })
        if (!calificacion) {
            throw new NotFoundException(new MessageDto('La calificacion No Existe'));
        }
        return calificacion
    }

    //buscar calificacion por criterio
    async findByCri(id: number): Promise<CalificacionVerificacionIpsEntity[]> {
        const criterio = await this.calificacionIpsVerificacionRepository.createQueryBuilder('calificacion')
        .select(['calificacion.cal_id','calificacion.cal_nota', 'calificacion.cal_observaciones','calificacionipsVerif.cri_ver_nombre'])
        .innerJoin('calificacion.calificacionipsVerif','calificacionipsVerif')
        .where('calificacionipsVerif.cri_ver_id = :cri', {cri: id})
        .getMany()
        if(!criterio.length) throw new NotFoundException(new MessageDto('No hay Calificaciones en la lista'))
        return criterio;
    }

    // creacion de  calificacion
    async create( payloads: { dto: CalificacionVerificacionDto, tokenDto: TokenDto }): Promise<any> {
        try {
            const { dto, tokenDto } = payloads;
            const criterio_ind =  await this.criterioVerifiRepository.findOne({ where: { cri_ver_id: dto.cri_ver_id } });
            if (!criterio_ind) {
                throw new NotFoundException(new MessageDto('El criterio no ha sido '))
            }
            //CREAMOS EL DTO PARA TRANSFERIR LOS DATOS
            const calificacion = this.calificacionIpsVerificacionRepository.create(dto)
            //asigna la evaluacion al criterio
            calificacion.calificacionipsVerif = criterio_ind

            const nombre_criterio = criterio_ind.cri_ver_nombre;

            calificacion.cal_evaluacion=criterio_ind.cri_ver_eva.evips_id

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

            await this.calificacionIpsVerificacionRepository.save(calificacion)
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
    async update(id: number, payloads: { dto: CalificacionVerificacionDto, tokenDto: TokenDto }): Promise<any> {

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

            const criterio_ind = await this.criterioVerifiRepository.findOne({ where: { cri_ver_id: dto.cri_ver_id } });
            if (!criterio_ind) {
                throw new NotFoundException(new MessageDto('El criterio no ha sido '))
            }
            calificacion.cal_evaluacion=criterio_ind.cri_ver_eva.evips_id

            const nombre_criterio = criterio_ind.cri_ver_nombre;

            await this.calificacionIpsVerificacionRepository.save(calificacion);
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
        await this.calificacionIpsVerificacionRepository.delete(calificacion.cal_id)
        return new MessageDto(`calificacion Eliminada`);
    }

    //lista las calificaciones con sus criterios
    async getallCalCrixEva(evips_id:number, act_id: number): Promise<CalificacionVerificacionIpsEntity[]> {

        const criterio = await this.calificacionIpsVerificacionRepository.createQueryBuilder('calificacion')
            .select(['calificacion', 'calificacionipsVerif.cri_ver_id', 'calificacionipsVerif.cri_ver_nombre', 'calificacionipsVerif.cri_ver_verificacion', 'cri_ver_eva.evips_nombre'])
            .innerJoinAndSelect('calificacion.calificacionipsVerif', 'calificacionipsVerif')
            .innerJoinAndSelect('calificacionipsVerif.cri_ver_eva', 'cri_ver_eva')
            .innerJoinAndSelect('cri_ver_eva.actas_ips', 'actas_ips')
            .where('actas_ips.id = :id_acta', {id_acta: act_id })
            .andWhere('calificacion.cal_evaluacion = :id_eva',{id_eva:evips_id})
            .getMany()

        return criterio
    }
}
