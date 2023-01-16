/* eslint-disable prettier/prettier */
import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { EvaluacionipsEntity } from "./evaluacionips.entity";
import { ItemEntity } from "./item.entity";

@Entity({name: 'criterio_verificacion'})
export class CriterioVerificacionEntity {
    @PrimaryGeneratedColumn('increment')
    cri_ver_id: number;

    @Column({type: 'varchar', length: 530, nullable: false, unique: false})
    cri_ver_nombre: string;

    @Column({type: 'varchar', length: 200, nullable: false, unique: false})
    cri_ver_verificacion
    
    //Relacion Muchos a Uno CRITERIO_AJUSTE - EVALUACIONIPS
    @ManyToOne(type => EvaluacionipsEntity, criterioajuste => criterioajuste.evaluacionipsVerif)  
    cri_ver_eva: EvaluacionipsEntity

}