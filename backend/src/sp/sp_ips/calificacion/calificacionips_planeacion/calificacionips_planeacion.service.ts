import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CalificacionPlaneacionIpsEntity } from '../../calificacionips_planeacion.entity';
import { CalificacionIpsPlaneacionRepository } from '../../calificacionips_planeacion.repository';
import { CriterioPlaneacionEntity } from '../../criterioplaneacion.entity';
import { CriterioPlaneacionRepository } from '../../criterioplaneac.repository';
import { MessageDto } from 'src/common/message.dto';
import { CalificacionPlaneacionDto } from 'src/usuario/dto/SpIps/calificaciones/calificacionplaneacion.dto';
import { TokenDto } from 'src/auth/dto/token.dto';
import { JwtService } from '@nestjs/jwt';
import { AuditoriaRegistroService } from 'src/auditoria/auditoria_registro/auditoria_registro.service';
import { AuditoriaActualizacionService } from 'src/auditoria/auditoria_actualizacion/auditoria_actualizacion.service';
import { PayloadInterface } from 'src/auth/payload.interface';

@Injectable()
export class CalificacionipsPlaneacionService {

    constructor(
        @InjectRepository(CriterioPlaneacionEntity)
        private criterioPlaneacionRepository: CriterioPlaneacionRepository,
        @InjectRepository(CalificacionPlaneacionIpsEntity)
        private calificacionIpsPlaneacionRepository: CalificacionIpsPlaneacionRepository,
        private readonly jwtService: JwtService,
        private readonly auditoria_registro_services: AuditoriaRegistroService,
        private readonly auditoria_actualizacion_services: AuditoriaActualizacionService,
    ){}

    //buscar calificacion por id
    async findByCal(cal_id: number): Promise<CalificacionPlaneacionIpsEntity> {
        const calificacion = await this.calificacionIpsPlaneacionRepository.findOne({ where: { cal_id } })
        if (!calificacion) {
            throw new NotFoundException(new MessageDto('La calificacion No Existe'));
        }
        return calificacion
    }

    //buscar calificacion por criterio
    async findByCri(id: number): Promise<CalificacionPlaneacionIpsEntity[]> {
        const criterio = await this.calificacionIpsPlaneacionRepository.createQueryBuilder('calificacion')
        .select(['calificacion.cal_id','calificacion.cal_nota', 'calificacion.cal_observaciones','calificacionipsPlaneacion.cri_pla_nombre'])
        .innerJoin('calificacion.calificacionipsPlaneacion','calificacionipsPlaneacion')
        .where('calificacionipsPlaneacion.cri_pla_id = :cri', {cri: id})
        .getMany()
        if(!criterio.length) throw new NotFoundException(new MessageDto('No hay Calificaciones en la lista'))
        return criterio;
    }

  

     // creacion de  calificacion
     async create( payloads: { dto: CalificacionPlaneacionDto, tokenDto: TokenDto }): Promise<any> {
        try {
            const { dto, tokenDto } = payloads;
            const criterio_ind =  await this.criterioPlaneacionRepository.findOne({ where: { cri_pla_id: dto.cri_pla_id } });
            if (!criterio_ind) {
                throw new NotFoundException(new MessageDto('El criterio no ha sido '))
            }
            //CREAMOS EL DTO PARA TRANSFERIR LOS DATOS
            const calificacion = this.calificacionIpsPlaneacionRepository.create(dto)
            //asigna la evaluacion al criterio
            calificacion.calificacionipsPlaneacion = criterio_ind

            const nombre_criterio = criterio_ind.cri_pla_nombre;

            calificacion.cal_evaluacion=criterio_ind.cri_pla_eva.evips_id

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

            await this.calificacionIpsPlaneacionRepository.save(calificacion)
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
    async update(id: number, payloads: { dto: CalificacionPlaneacionDto, tokenDto: TokenDto }): Promise<any> {

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

            const criterio_ind = await this.criterioPlaneacionRepository.findOne({ where: { cri_pla_id: dto.cri_pla_id } });
            if (!criterio_ind) {
                throw new NotFoundException(new MessageDto('El criterio no ha sido '))
            }
            calificacion.cal_evaluacion=criterio_ind.cri_pla_eva.evips_id

            const nombre_criterio = criterio_ind.cri_pla_nombre;

            await this.calificacionIpsPlaneacionRepository.save(calificacion);
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
        await this.calificacionIpsPlaneacionRepository.delete(calificacion.cal_id)
        return new MessageDto(`calificacion Eliminada`);
    }

    //lista las calificaciones con sus criterios
    async getallCalCrixEva(evips_id:number, act_id: number): Promise<CalificacionPlaneacionIpsEntity[]> {

        const criterio = await this.calificacionIpsPlaneacionRepository.createQueryBuilder('calificacion')
            .select(['calificacion', 'calificacionipsPlaneacion.cri_pla_id', 'calificacionipsPlaneacion.cri_pla_nombre', 'calificacionipsPlaneacion.cri_pla_verificacion', 'cri_pla_eva.evips_nombre'])
            .innerJoinAndSelect('calificacion.calificacionipsPlaneacion', 'calificacionipsPlaneacion')
            .innerJoinAndSelect('calificacionipsPlaneacion.cri_pla_eva', 'cri_pla_eva')
            .innerJoinAndSelect('cri_pla_eva.actas_ips', 'actas_ips')
            .where('actas_ips.id = :id_acta', {id_acta: act_id })
            .andWhere('calificacion.cal_evaluacion = :id_eva',{id_eva:evips_id})
            .getMany()

        return criterio
    }
}
