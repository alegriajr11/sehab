/* eslint-disable prettier/prettier */
import { PrestadorEntity } from "src/prestador/prestador.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { CriterioGestionPretransfusionalEntity } from "./criterio_gestion_pretrans.entity";


// import { CumplimientoEstandarSicEntity } from "./cumplimientoestandar.entity";



@Entity({ name: 'cumplimiento_gest_pretransfusional' })
export class CumplimientoGestionPretransfusionalEntity {
    @PrimaryGeneratedColumn('increment')
    cump_gestpre_id: number;

    @Column({ type: 'varchar', length: 10, nullable: false, unique: true })
    cump_gestpre_cumple: string;

    @Column({ type: 'varchar', length: 60, nullable: false, unique: false })
    cump_gestpre_hallazgo: string;

    @Column({ type: 'varchar', length: 60, nullable: false, unique: false })
    cump_gestpre_accion: string;

    @Column({ type: 'varchar', length: 200, nullable: false, unique: false })
    cump_gestpre_responsable: string;

    @Column({ type: 'date', nullable: false, unique: false })
    cump_gestpre_fecha_limite: string;
    

    @OneToOne(() => CriterioGestionPretransfusionalEntity)
    @JoinColumn()
    criterio_gest_pretransfusional: CriterioGestionPretransfusionalEntity

}