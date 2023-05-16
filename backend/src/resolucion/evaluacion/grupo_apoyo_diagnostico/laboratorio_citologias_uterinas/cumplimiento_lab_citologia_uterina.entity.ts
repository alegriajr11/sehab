/* eslint-disable prettier/prettier */
import { PrestadorEntity } from "src/prestador/prestador.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { CriterioLabUterinaEntity } from "./criterio_lab_citologia_uterina.entity";


// import { CumplimientoEstandarSicEntity } from "./cumplimientoestandar.entity";



@Entity({ name: 'cumplimiento_lab_uterina' })
export class CumplimientoLabUterinaEntity {
    @PrimaryGeneratedColumn('increment')
    cump_labuter_id: number;

    @Column({ type: 'varchar', length: 10, nullable: false, unique: true })
    cump_labuter_cumple: string;

    @Column({ type: 'varchar', length: 60, nullable: false, unique: false })
    cump_labuter_hallazgo: string;

    @Column({ type: 'varchar', length: 60, nullable: false, unique: false })
    cump_labuter_accion: string;

    @Column({ type: 'varchar', length: 200, nullable: false, unique: false })
    cump_labuter_responsable: string;

    @Column({ type: 'date', nullable: false, unique: false })
    cump_labuter_fecha_limite: string;

    //Relación MUCHOS a UNO CUMPLOMIENTO LAB_CITOLOGIA UTERINA - PRESTADOR
    @ManyToOne(type => PrestadorEntity, prestador => prestador.cum_lab_cit_uterina)
    prestador: PrestadorEntity
    

    @OneToOne(() => CriterioLabUterinaEntity)
    @JoinColumn()
    criterio_lab_uterina: CriterioLabUterinaEntity

}