/* eslint-disable prettier/prettier */
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CuidIntermAdultoEntity } from "./cuid_inter_adulto.entity";



@Entity({ name: 'criterio_cuid_interm_adulto' })
export class CriterioCuidIntermAdultoEntity {
    @PrimaryGeneratedColumn('increment')
    cri_inter_adult_id: number;
    
    @Column({ type: 'varchar', length: 105, nullable: true, unique: false })
    cri_inter_adult_modalidad: string;

    @Column({ type: 'varchar', length: 105, nullable: true, unique: false })
    cri_inter_adult_complejidad: string;

    @Column({ type: 'varchar', length: 10, nullable: true, unique: false })
    cri_inter_adult_articulo: string;

    @Column({ type: 'varchar', length: 3, nullable: true, unique: false })
    cri_inter_adult_seccion: string;

    @Column({ type: 'varchar', length: 10, nullable: true, unique: false })
    cri_inter_adult_apartado: string;

    @Column({ type: 'varchar', length: 700, nullable: true, unique: false })
    cri_inter_adult_nombre_criterio: string;


    //Relacion MUCHOS a UNO CRITERIOS_CUIDADO_INTERMEDIO_ADULTO - CUIDADO_INTERMEDIO_ADULTO (ESTANDARES)
    @ManyToOne(type => CuidIntermAdultoEntity,  cuid_inter_adulto=> cuid_inter_adulto.criterios_cuid_inter_adulto)
    cuid_inter_adulto: CuidIntermAdultoEntity;


}