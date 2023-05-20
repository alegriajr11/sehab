/* eslint-disable prettier/prettier */
import { PrestadorEntity } from "src/prestador/prestador.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { CriterioCuidIntermNeonatalEntity } from "./criterio_cuid_inter_neonatal.entity";


// import { CumplimientoEstandarSicEntity } from "./cumplimientoestandar.entity";



@Entity({ name: 'cumplimiento_cui_inter_neonatal' })
export class CumplimientoCuidInterNeonatalEntity {
    @PrimaryGeneratedColumn('increment')
    cump_inter_neona_id: number;

    @Column({ type: 'varchar', length: 10, nullable: false, unique: true })
    cump_inter_neona_cumple: string;

    @Column({ type: 'varchar', length: 60, nullable: false, unique: false })
    cump_inter_neona_hallazgo: string;

    @Column({ type: 'varchar', length: 60, nullable: false, unique: false })
    cump_inter_neona_accion: string;

    @Column({ type: 'varchar', length: 200, nullable: false, unique: false })
    cump_inter_neona_responsable: string;

    @Column({ type: 'date', nullable: false, unique: false })
    cump_inter_neona_fecha_limite: string;

    //Relación MUCHOS a UNO CUMPLIMIENTO CUIDADO_INTERMEDIO_NEONATAL - PRESTAOR
    @ManyToOne(type => PrestadorEntity, prestador => prestador.cump_cuid_inter_neonatal)
    prestador: PrestadorEntity
    

    @OneToOne(() => CriterioCuidIntermNeonatalEntity)
    @JoinColumn()
    criterio_cuid_inter_neona: CriterioCuidIntermNeonatalEntity

}