/* eslint-disable prettier/prettier */
import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CriteriopamEntity } from "./criteriopam.entity";


@Entity({name: 'calificacionpam'})
export class CalificacionpamEntity {
    @PrimaryGeneratedColumn('increment')
    cal_id: number;

    @Column({type: 'int'})
    cal_nota: number;
    
    @Column({type: 'varchar', length: 11, nullable: false, unique: false})
    cal_aplica: string;

    @Column({type: 'varchar', length: 255, nullable: false, unique: false})
    cal_observaciones: string;


    @ManyToMany(type => CriteriopamEntity, criterio => criterio.calificacionpam)
    criteriopam: CriteriopamEntity[];
}