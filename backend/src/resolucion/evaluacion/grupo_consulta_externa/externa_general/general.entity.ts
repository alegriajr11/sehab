/* eslint-disable prettier/prettier */
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CriterioExternaGeneralEntity } from "./criterio_ext_general.entity";

// import { CumplimientoEstandarSicEntity } from "./cumplimientoestandar.entity";



@Entity({ name: 'externa_general' })
export class ExternaGeneralEntity {
    @PrimaryGeneratedColumn('increment')
    extg_id: number;

    @Column({ type: 'varchar', length: 60, nullable: false, unique: true })
    extg_nombre_estandar: string;

    //Relacion UNO a MUCHOS EXTERNA_GENERAL (ESTANDARES) - CRITERIOS_CONSULTA_EXTERNA_GENERAL
    @OneToMany(type => CriterioExternaGeneralEntity,  cri_ext_general=> cri_ext_general.externa_general)
    criterios_externa_general: CriterioExternaGeneralEntity;

}
