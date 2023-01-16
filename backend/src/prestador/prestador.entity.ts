/* eslint-disable prettier/prettier */
import { ClasificacionEntity } from "./clasificacion/clasificacion.entity";
import { ClaseEntity } from "./clase/clase.entity";
import { TipoEntity } from "./tipo/tipo.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { MunicipioEntity } from "src/municipio/municipio.entity";
import { DominioEntity } from "src/sic/dominio.entity";
import { ActividadEntity } from "src/pamec/actividad.entity";
import { EvaluacionipsEntity } from "src/sp/sp_ips/evaluacionips.entity";



@Entity({name: 'prestador'})
export class PrestadorEntity {
    
    @PrimaryColumn({type: 'varchar', length: 15, nullable: false, unique: false})
    pre_cod_habilitacion: string

    @Column({type: 'varchar', length: 100, nullable: false})
    pre_nombre: string;

    @Column({type: 'varchar', length: 11, nullable: false})
    pre_nit: string;

    @Column({type: 'varchar', length: 90, nullable: false})
    pre_direccion: string;

    @Column({type: 'varchar', length: 50, nullable: false})
    pre_telefono: string;

    @Column({type: 'varchar', length: 120, nullable: false})
    pre_email: string;

    @Column({type: 'varchar', length: 3, nullable: false})
    pre_habilitado: string;

    @Column({type: 'varchar', length: 60})
    pre_representante: string;


    //Relacion MUCHOS a UNO
    @ManyToOne(type => ClasificacionEntity, clasificacion => clasificacion.cla_prestador)
    pre_clasificacion: ClasificacionEntity;

    @ManyToOne(type => ClaseEntity, clase => clase.clas_prestador)    
    pre_clase: ClaseEntity;

    @ManyToOne(type => TipoEntity, tipo => tipo.tip_prestador)   
    pre_tipo: TipoEntity;


    @ManyToOne(type => MunicipioEntity, municipio => municipio.mun_prestador)  
    pre_municipio: MunicipioEntity

    
    //Relacion Uno a Muchos PRESTADOR - ACTIVIDAD
    @OneToMany(type => ActividadEntity, actividad => actividad.act_prestador)
    pre_actividad: ActividadEntity;
    
    //Relacion Muchos a Muchos PRESTADOR - DOMINIO
    @ManyToMany(type => DominioEntity, dominio => dominio.prestadores, {eager: true})
    @JoinTable({
        name: 'dom_pre',
        joinColumn: {name: 'dom_pre_id'},
        inverseJoinColumn: {name: 'pre_dom_id'} 
    })
    dominios: DominioEntity[];

    //Relacion Muchos a Muchos PRESTADOR - EVALUACIONIPS
    @ManyToMany(type => EvaluacionipsEntity, evaluacionips => evaluacionips.prestadores, {eager: true})
    @JoinTable({
        name: 'evaips_pre',
        joinColumn: {name: 'pre_eva_id'},
        inverseJoinColumn: {name: 'eva_pre_id'} 
    })
    evaluacionesips: EvaluacionipsEntity[];

}