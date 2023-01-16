/* eslint-disable prettier/prettier */
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { EtapaInd } from "./etapaind.entity";



@Entity({name: 'criterioind'})
export class CriterioIndEntity {
    @PrimaryGeneratedColumn('increment')
    cri_id: number;

    @Column({type: 'varchar', length: 350, nullable: false, unique: false})
    cri_nombre: string;

    @Column({type: 'varchar', length: 120, nullable: false, unique: false})
    cri_verificacion: string;

    @ManyToOne(type => EtapaInd, item => item.cri_criterio)  
    eta_item: EtapaInd

}