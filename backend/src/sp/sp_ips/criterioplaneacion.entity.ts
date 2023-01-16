/* eslint-disable prettier/prettier */
import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { EvaluacionipsEntity } from "./evaluacionips.entity";
import { ItemEntity } from "./item.entity";

@Entity({name: 'criterio_planeacion'})
export class CriterioPlaneacionEntity {
    @PrimaryGeneratedColumn('increment')
    cri_pla_id: number;

    @Column({type: 'varchar', length: 620, nullable: false, unique: false})
    cri_pla_nombre: string;

    @Column({type: 'varchar', length: 300, nullable: false, unique: false})
    cri_pla_verificacion
    
    //Relacion Muchos a Uno CRITERIO_AJUSTE - EVALUACIONIPS
    @ManyToOne(type => EvaluacionipsEntity, criterioajuste => criterioajuste.evaluacionipsPlane)  
    cri_pla_eva: EvaluacionipsEntity

}