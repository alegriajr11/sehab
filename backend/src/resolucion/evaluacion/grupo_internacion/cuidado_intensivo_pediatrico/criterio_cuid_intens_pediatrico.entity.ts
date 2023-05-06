/* eslint-disable prettier/prettier */
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CuidIntePediatricoEntity } from "./cuid_intens_pediatrico.entity";



@Entity({ name: 'criterio_cuid_inte_pediatrico' })
export class CriterioCuidIntePediatricoEntity {
    @PrimaryGeneratedColumn('increment')
    cri_int_ped_id: number;
    
    @Column({ type: 'varchar', length: 105, nullable: false, unique: false })
    cri_int_ped_modalidad: string;

    @Column({ type: 'varchar', length: 105, nullable: false, unique: false })
    cri_int_ped_complejidad: string;

    @Column({ type: 'varchar', length: 10, nullable: false, unique: false })
    cri_int_ped_articulo: string;

    @Column({ type: 'varchar', length: 3, nullable: false, unique: false })
    cri_int_ped_seccion: string;

    @Column({ type: 'varchar', length: 10, nullable: false, unique: false })
    cri_int_ped_apartado: string;

    @Column({ type: 'varchar', length: 700, nullable: false, unique: false })
    cri_int_ped_nombre_criterio: string;


    //Relacion MUCHOS a UNO CRITERIOS_CUIDADO_INTENSIVO_PEDIATRICO - CUIDADO_INTENSIVO_PEDIATRICO (ESTANDARES)
    @ManyToOne(type => CuidIntePediatricoEntity,  cuid_int_pediatrico=> cuid_int_pediatrico.criterios_cuid_int_pediatrico)
    cuid_int_pediatrico: CuidIntePediatricoEntity;


}