/* eslint-disable prettier/prettier */
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { CriterioIndEntity } from "./criterioind.entity";


@Entity({name: 'calificacion_ind'})
export class CalificacionIndEntity {
    @PrimaryGeneratedColumn('increment')
    cal_id: number;

    @Column({type: 'int'})
    cal_nota: number;

    @Column({type: 'varchar', length: 255, nullable: false, unique: false})
    cal_observaciones: string;


    @ManyToMany(type => CriterioIndEntity, criterioind => criterioind.calificacion_ind, { eager: true })
    @JoinTable({
        name: 'cal_criind',
        joinColumn: { name: 'criind_cal_id' },
        inverseJoinColumn: { name: 'cal_criind_id' }
    })
    criterios_ind: CriterioIndEntity[]
}