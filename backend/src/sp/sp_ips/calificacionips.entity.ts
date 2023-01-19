/* eslint-disable prettier/prettier */
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { EvaluacionipsEntity } from "./evaluacionips.entity";



@Entity({name: 'calificacion_ips'})
export class CalificacionIpsEntity {
    @PrimaryGeneratedColumn('increment')
    cal_id: number;

    @Column({type: 'int'})
    cal_nota: number;

    @Column({type: 'varchar', length: 255, nullable: false, unique: false})
    cal_observaciones: string;


    @ManyToMany(type => EvaluacionipsEntity, evaluacionips => evaluacionips.calificacion_ips, { eager: true })
    @JoinTable({
        name: 'eva_calips',
        joinColumn: { name: 'calips_eva_id' },
        inverseJoinColumn: { name: 'eva_calips_id' }
    })
    evaluaciones_ips: EvaluacionipsEntity[]
}