/* eslint-disable prettier/prettier */
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { PrestadorEntity } from "src/prestador/prestador.entity";
import { CriterioCirugiaEntity } from "./criterio_cirugia.entity";
import { CumplimientoCirugiaEntity } from "./cumplimiento_cirugia.entity";





@Entity({ name: 'cirugia' })
export class CirugiaEntity {
    @PrimaryGeneratedColumn('increment')
    ciru_id: number;

    @Column({ type: 'varchar', length: 60, nullable: false, unique: true })
    ciru_nombre_estandar: string;

    //Relacion UNO a MUCHOS CIRUGUA (ESTANDARES) - CRITERIOS_URGENCIAS
    @OneToMany(type => CriterioCirugiaEntity, cri_cirugia => cri_cirugia.cirugia)
    criterios_cirugia: CriterioCirugiaEntity;

    // //Relación MUCHOS a UNO CIRUGIA - PRESTADOR
    // @ManyToOne(type => PrestadorEntity, prestador => prestador.cirugia)
    // prestador: PrestadorEntity

    // //Relación MUCHOS a UNO CIRUGIA - CUMPLIMIENTO_CIRUGIA
    // @ManyToOne(type => CumplimientoCirugiaEntity, cumplimineto_cirugia => cumplimineto_cirugia.cirugia)
    // cumplimineto_cirugia: CumplimientoCirugiaEntity

}
