/* eslint-disable prettier/prettier */
import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { EvaluacionipsEntity } from "./evaluacionips.entity";
import { ItemEntity } from "./item.entity";

@Entity({name: 'criterio_ajuste'})
export class CriterioAjusteEntity {
    @PrimaryGeneratedColumn('increment')
    cri_aju_id: number;

    @Column({type: 'varchar', length: 500, nullable: false, unique: false})
    cri_aju_nombre: string;
    
    @Column({type: 'varchar', length: 200, nullable: false, unique: false})
    cri_aju_verificacion

    //Relacion Muchos a Uno CRITERIO_AJUSTE - EVALUACIONIPS
    @ManyToOne(type => EvaluacionipsEntity, criterioajuste => criterioajuste.evaluacionipsAjuste)  
    cri_aju_eva: EvaluacionipsEntity

}