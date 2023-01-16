/* eslint-disable prettier/prettier */
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { CriteriosicEntity } from "./criteriosic.entity";
import { DominioEntity } from "./dominio.entity";

@Entity({name: 'indicador'})
export class IndicadorEntity {

    @PrimaryColumn({type: 'varchar', length: 7, nullable: false, unique: false})
    ind_id: string

    @Column({type: 'varchar', length: 255, nullable: false, unique: false})
    ind_nombre: string;
    
    //Relacion MUCHOS a UNO INDICADOR - DOMINIO
    @ManyToOne(type => DominioEntity, dominio => dominio.dom_indicador)
    ind_dominio: DominioEntity;


    //Relacion Muchos a Muchos INDICADOR - CRITERIOSIC
    @ManyToMany(type => CriteriosicEntity, criteriosic => criteriosic.indicadores, {eager: true})
    @JoinTable({
        name: 'ind_cri',
        joinColumn: {name: 'ind_cri_id'},
        inverseJoinColumn: {name: 'cri_ind_id'} 
    })
    criterios: CriteriosicEntity[];
}