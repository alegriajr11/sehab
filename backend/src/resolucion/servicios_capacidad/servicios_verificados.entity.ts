import { PrestadorEntity } from "src/prestador/prestador.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ModalidadEntity } from "./modalidad.entity";
import { ComplejidadEntity } from "./complejidad.entity";
import { GrupoEvaluacionEntity } from "../grupo_evaluacion/grupo_evaluacion.entity";



@Entity({ name: 'servicios_verificados' })
export class ServiciosVerificadosEntity {
    @PrimaryGeneratedColumn('increment')
    ser_id: number;

    @Column({ type: 'varchar', length: 5, nullable: false, unique: false })
    ser_codigo: string;

    @Column({ type: 'varchar', length: 40, nullable: false, unique: false })
    ser_nombre: string;

    //Relacion MUCHOS a UNO SERVICIOS VERIFICADOS- GRUPO EVALUACION
    @ManyToOne(type => GrupoEvaluacionEntity, gtup_eval => gtup_eval.seriv_verif_grup_eval)
    grup_evaluacion: GrupoEvaluacionEntity


    //Relacion MUCHOS a UNO SERVICIOS VERIFICADOS- MODALIDAD
    @ManyToOne(type => ModalidadEntity, modalidad => modalidad.seriv_verif_mod)
    modalidad: ModalidadEntity;

    //Relacion MUCHOS a UNO SERVICIOS VERIFICADOS- COMPLEJIDAD
    @ManyToOne(type => ComplejidadEntity, complejidad => complejidad.seriv_verif_comp)
    complejidad: ComplejidadEntity;

    @ManyToOne(type => PrestadorEntity, prestador => prestador.servicios_verificados)
    prestadores: PrestadorEntity
}