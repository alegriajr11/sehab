/* eslint-disable prettier/prettier */
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { IndicadorEntity } from "./indicador.entity";

@Entity({name: 'criteriosic'})
export class CriteriosicEntity {
    @PrimaryGeneratedColumn('increment')
    cri_id: number;

    @Column({type: 'varchar', length: 120, nullable: false, unique: false})
    cri_nombre: string;
    

    //Relacion Muchos a Muchos CRITERIOSIC - INDICADOR
    @ManyToMany(type => IndicadorEntity, indicador => indicador.criterios)
    indicadores: IndicadorEntity[];
}