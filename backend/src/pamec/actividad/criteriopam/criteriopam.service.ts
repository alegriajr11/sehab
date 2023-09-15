import { Injectable } from '@nestjs/common';
import { BadRequestException, InternalServerErrorException, NotFoundException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageDto } from 'src/common/message.dto';
import { ActividadEntity } from 'src/pamec/actividad.entity';
import { ActividadRepository } from 'src/pamec/actividad.repository';
import { CriteriopamEntity } from 'src/pamec/criteriopam.entity';
import { CriterioPamRepository } from 'src/pamec/criteriopam.repository';
import { CriterioPamDto } from 'src/usuario/dto/Pamec/criteriopam.dto';

@Injectable()
export class CriteriopamService {

    constructor(
        @InjectRepository(CriteriopamEntity)
        private readonly criteriopamRepository: CriterioPamRepository,
        @InjectRepository(ActividadEntity)
        private readonly actividadRepository: ActividadRepository,
    ) { }

    async findByAct(act_id: number): Promise<CriteriopamEntity[]> {
        const criterios = await this.criteriopamRepository.createQueryBuilder('criteriopam')
            .select(['criteriopam', 'crip_actividad.act_nombre'])
            .innerJoin('criteriopam.crip_actividad', 'crip_actividad')
            .where('crip_actividad.act_id = :act', { act: act_id })
            .getMany()
        if (!criterios) throw new NotFoundException(new MessageDto('No Existe'));
        return criterios;
    }

    async getall(): Promise<CriteriopamEntity[]>{
        const usuario = await this.criteriopamRepository.find()
        if(!usuario.length) throw new NotFoundException(new MessageDto('No hay Criterios en la lista'))
        return usuario
    }

     //LISTAR LOS CRITERIOS SI TIENEN UNA EVALUACION ASIGNADA
     async getallcriterio(): Promise<CriteriopamEntity[]> {
        const criterio_ind = await this.criteriopamRepository.createQueryBuilder('criterio')
            .select(['criterio', 'criterio_calificacionpam.cal_nota', 'criterio_calificacionpam.cal_aplica', 'criterio_calificacionpam.cal_observaciones', 'crip_actividad.act_nombre', 'act_evaluacion_pam.eva_id'])
            .innerJoinAndSelect('criterio.criterio_calificacionpam', 'criterio_calificacionpam')
            .innerJoinAndSelect('criterio.crip_actividad', 'crip_actividad')
            .innerJoinAndSelect('crip_actividad.act_evaluacion_pam', 'act_evaluacion_pam')
            .getMany()
        if (!criterio_ind.length) throw new NotFoundException(new MessageDto('No hay una evaluacion asignada en la lista'))
        return criterio_ind
    }

    async findByCri(crip_id: number): Promise<CriteriopamEntity> {
        const criterio = await this.criteriopamRepository.findOne({ where: { crip_id } })
        if (!criterio) {
            throw new NotFoundException(new MessageDto('El criterio No Existe'));
        }
        return criterio
    }

    async findAct(act_id: number): Promise<ActividadEntity> {
        const actividad = await this.actividadRepository.findOne({ where: { act_id } })
        if (!actividad) {
            throw new NotFoundException(new MessageDto('El criterio No Existe'));
        }
        return actividad
    }

    async delete(id: number): Promise<any> {
        const criterio = await this.findByCri(id);
        await this.criteriopamRepository.delete(criterio.crip_id)
        return new MessageDto(`Criterio Eliminado`);
    }

    async update(id: number, dto: CriterioPamDto): Promise<any> {

        const criterio = await this.findByCri(id);
        if (!criterio)
            throw new NotFoundException(new MessageDto('El Criterio No Existe'));

        dto.crip_nombre ? criterio.crip_nombre = dto.crip_nombre : criterio.crip_nombre = criterio.crip_nombre;
        dto.crip_desarrollo_etapas ? criterio.crip_desarrollo_etapas = dto.crip_desarrollo_etapas : criterio.crip_desarrollo_etapas = criterio.crip_desarrollo_etapas;

        await this.criteriopamRepository.save(criterio);

        return new MessageDto(`El Criterio ha sido Actualizado`);
    }

    async create(act_id: number, dto: CriterioPamDto): Promise<any> {
        const {crip_nombre} = dto;
        const exists = await this.criteriopamRepository.findOne({where: [{crip_nombre: crip_nombre}]});
        if(exists) throw new BadRequestException(new MessageDto('Ese Criterio ya existe'));
        const actividad = await this.actividadRepository.findOne({where: {act_id: act_id}});
        console.log(act_id)
        if(!actividad) throw new InternalServerErrorException(new MessageDto('La actividad no ha sido creada'))
        const criterio = this.criteriopamRepository.create(dto)
        criterio.crip_actividad = actividad
        await this.criteriopamRepository.save(criterio)
        return new MessageDto('El criterio ha sido Creado');
    }

    //actividad
    async getallcriterioxtitulouno(): Promise<CriteriopamEntity[]> {

        let titulo_uno
        titulo_uno = "ACTIVIDADES PREVIAS"

        const criterio = await this.criteriopamRepository.createQueryBuilder('actividad')
            .select(['actividad', 'criterio_calificacionpam.cal_nota', 'criterio_calificacionpam.cal_aplica','criterio_calificacionpam.cal_observaciones', 'crip_actividad.act_nombre'])
            .innerJoin('actividad.crip_actividad', 'crip_actividad')
            .innerJoinAndSelect('actividad.criterio_calificacionpam', 'criterio_calificacionpam')
            .where('crip_actividad.act_nombre LIKE :titulo', { titulo: titulo_uno })
            .getMany()

        return criterio
    }

    //actividad
    async getallcriterioxtitulodos(): Promise<CriteriopamEntity[]> {

        let titulo_dos
        titulo_dos = "AUTOEVALUACIÓN"

        const criterio = await this.criteriopamRepository.createQueryBuilder('actividad')
            .select(['actividad', 'criterio_calificacionpam.cal_nota', 'criterio_calificacionpam.cal_aplica','criterio_calificacionpam.cal_observaciones', 'crip_actividad.act_nombre'])
            .innerJoin('actividad.crip_actividad', 'crip_actividad')
            .innerJoinAndSelect('actividad.criterio_calificacionpam', 'criterio_calificacionpam')
            .where('crip_actividad.act_nombre LIKE :titulo', { titulo: titulo_dos })
            .getMany()

        return criterio
    }

    //actividad
    async getallcriterioxtitulotres(): Promise<CriteriopamEntity[]> {

        let titulo_tres
        titulo_tres = "SELECCIÓN DE LOS PROCESOS A MEJORAR"

        const criterio = await this.criteriopamRepository.createQueryBuilder('actividad')
            .select(['actividad', 'criterio_calificacionpam.cal_nota', 'criterio_calificacionpam.cal_aplica','criterio_calificacionpam.cal_observaciones', 'crip_actividad.act_nombre'])
            .innerJoin('actividad.crip_actividad', 'crip_actividad')
            .innerJoinAndSelect('actividad.criterio_calificacionpam', 'criterio_calificacionpam')
            .where('crip_actividad.act_nombre LIKE :titulo', { titulo: titulo_tres })
            .getMany()

        return criterio
    }

    //actividad
    async getallcriterioxtitulocuatro(): Promise<CriteriopamEntity[]> {

        let titulo_cuatro
        titulo_cuatro = "PRIORIZACION"

        const criterio = await this.criteriopamRepository.createQueryBuilder('actividad')
            .select(['actividad', 'criterio_calificacionpam.cal_nota', 'criterio_calificacionpam.cal_aplica','criterio_calificacionpam.cal_observaciones', 'crip_actividad.act_nombre'])
            .innerJoin('actividad.crip_actividad', 'crip_actividad')
            .innerJoinAndSelect('actividad.criterio_calificacionpam', 'criterio_calificacionpam')
            .where('crip_actividad.act_nombre LIKE :titulo', { titulo: titulo_cuatro })
            .getMany()

        return criterio
    }

    //actividad
    async getallcriterioxtitulocinco(): Promise<CriteriopamEntity[]> {

        let titulo_cinco
        titulo_cinco = "DEFINICIÓN DE LA CALIDAD ESPERADA"

        const criterio = await this.criteriopamRepository.createQueryBuilder('actividad')
            .select(['actividad', 'criterio_calificacionpam.cal_nota', 'criterio_calificacionpam.cal_aplica','criterio_calificacionpam.cal_observaciones', 'crip_actividad.act_nombre'])
            .innerJoin('actividad.crip_actividad', 'crip_actividad')
            .innerJoinAndSelect('actividad.criterio_calificacionpam', 'criterio_calificacionpam')
            .where('crip_actividad.act_nombre LIKE :titulo', { titulo: titulo_cinco })
            .getMany()

        return criterio
    }

    //actividad
    async getallcriterioxtituloseis(): Promise<CriteriopamEntity[]> {

        let titulo_seis
        titulo_seis = "DEFINICIÓN DE LA CALIDAD OBSERVADA"

        const criterio = await this.criteriopamRepository.createQueryBuilder('actividad')
            .select(['actividad', 'criterio_calificacionpam.cal_nota', 'criterio_calificacionpam.cal_aplica','criterio_calificacionpam.cal_observaciones', 'crip_actividad.act_nombre'])
            .innerJoin('actividad.crip_actividad', 'crip_actividad')
            .innerJoinAndSelect('actividad.criterio_calificacionpam', 'criterio_calificacionpam')
            .where('crip_actividad.act_nombre LIKE :titulo', { titulo: titulo_seis })
            .getMany()

        return criterio
    }

    //actividad
    async getallcriterioxtitulosiete(): Promise<CriteriopamEntity[]> {

        let titulo_siete
        titulo_siete = "PLAN DE MEJORAMIENTO PARA EL CIERRE DE BRECHAS"

        const criterio = await this.criteriopamRepository.createQueryBuilder('actividad')
            .select(['actividad', 'criterio_calificacionpam.cal_nota', 'criterio_calificacionpam.cal_aplica','criterio_calificacionpam.cal_observaciones', 'crip_actividad.act_nombre'])
            .innerJoin('actividad.crip_actividad', 'crip_actividad')
            .innerJoinAndSelect('actividad.criterio_calificacionpam', 'criterio_calificacionpam')
            .where('crip_actividad.act_nombre LIKE :titulo', { titulo: titulo_siete })
            .getMany()

        return criterio
    }

    //actividad
    async getallcriterioxtituloocho(): Promise<CriteriopamEntity[]> {

        let titulo_ocho
        titulo_ocho = "EJECUCION Y SEGUIMIENTO AL PLAN DE MEJORAMIENTO"

        const criterio = await this.criteriopamRepository.createQueryBuilder('actividad')
            .select(['actividad', 'criterio_calificacionpam.cal_nota', 'criterio_calificacionpam.cal_aplica','criterio_calificacionpam.cal_observaciones', 'crip_actividad.act_nombre'])
            .innerJoin('actividad.crip_actividad', 'crip_actividad')
            .innerJoinAndSelect('actividad.criterio_calificacionpam', 'criterio_calificacionpam')
            .where('crip_actividad.act_nombre LIKE :titulo', { titulo: titulo_ocho })
            .getMany()

        return criterio
    }


    //actividad
    async getallcriterioxtitulonueve(): Promise<CriteriopamEntity[]> {

        let titulo_nueve
        titulo_nueve = "EVALUACION PLAN DE MEJORAMIENTO"

        const criterio = await this.criteriopamRepository.createQueryBuilder('actividad')
            .select(['actividad', 'criterio_calificacionpam.cal_nota', 'criterio_calificacionpam.cal_aplica','criterio_calificacionpam.cal_observaciones', 'crip_actividad.act_nombre'])
            .innerJoin('actividad.crip_actividad', 'crip_actividad')
            .innerJoinAndSelect('actividad.criterio_calificacionpam', 'criterio_calificacionpam')
            .where('crip_actividad.act_nombre LIKE :titulo', { titulo: titulo_nueve })
            .getMany()

        return criterio
    }

    //actividad
    async getallcriterioxtitulodiez(): Promise<CriteriopamEntity[]> {

        let titulo_diez
        titulo_diez = "APRENDIZAJE ORGANIZACIONAL"

        const criterio = await this.criteriopamRepository.createQueryBuilder('actividad')
            .select(['actividad', 'criterio_calificacionpam.cal_nota', 'criterio_calificacionpam.cal_aplica','criterio_calificacionpam.cal_observaciones', 'crip_actividad.act_nombre'])
            .innerJoin('actividad.crip_actividad', 'crip_actividad')
            .innerJoinAndSelect('actividad.criterio_calificacionpam', 'criterio_calificacionpam')
            .where('crip_actividad.act_nombre LIKE :titulo', { titulo: titulo_diez })
            .getMany()

        return criterio
    }


}
