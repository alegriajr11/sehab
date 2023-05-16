/* eslint-disable prettier/prettier */
import { PrestadorEntity } from "src/prestador/prestador.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { CriterioImgRadIonizantesEntity } from "./criterio_img_rad_ionizantes.entity";


// import { CumplimientoEstandarSicEntity } from "./cumplimientoestandar.entity";



@Entity({ name: 'cumplimiento_img_ionizante' })
export class CumplimientoImgRadIonizanteEntity {
    @PrimaryGeneratedColumn('increment')
    cump_imgion_id: number;

    @Column({ type: 'varchar', length: 10, nullable: false, unique: true })
    cump_imgion_cumple: string;

    @Column({ type: 'varchar', length: 60, nullable: false, unique: false })
    cump_imgion_hallazgo: string;

    @Column({ type: 'varchar', length: 60, nullable: false, unique: false })
    cump_imgion_accion: string;

    @Column({ type: 'varchar', length: 200, nullable: false, unique: false })
    cump_imgion_responsable: string;

    @Column({ type: 'date', nullable: false, unique: false })
    cump_imgion_fecha_limite: string;

    //Relación MUCHOS a UNO CUMPLOMIENTO IMAGENES DIAGNOSTICAS RAD_IONIZANTES - PRESTADOR
    @ManyToOne(type => PrestadorEntity, prestador => prestador.cum_img_ionizantes)
    prestador: PrestadorEntity
    

    @OneToOne(() => CriterioImgRadIonizantesEntity)
    @JoinColumn()
    criterio_img_rad_noion: CriterioImgRadIonizantesEntity

}