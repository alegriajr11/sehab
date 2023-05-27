/* eslint-disable prettier/prettier */
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CuidIntAdultoEntity } from "./cuid_intens_adulto.entity";



@Entity({ name: 'criterio_cuid_intens_adulto' })
export class CriterioCuidIntensAdultoEntity {
    @PrimaryGeneratedColumn('increment')
    cri_int_adult_id: number;
    
    @Column({ type: 'varchar', length: 105, nullable: true, unique: false })
    cri_int_adult_modalidad: string;

    @Column({ type: 'varchar', length: 105, nullable: true, unique: false })
    cri_int_adult_complejidad: string;

    @Column({ type: 'varchar', length: 10, nullable: true, unique: false })
    cri_int_adult_articulo: string;

    @Column({ type: 'varchar', length: 3, nullable: true, unique: false })
    cri_int_adult_seccion: string;

    @Column({ type: 'varchar', length: 10, nullable: true, unique: false })
    cri_int_adult_apartado: string;

    @Column({ type: 'varchar', length: 700, nullable: true, unique: false })
    cri_int_adult_nombre_criterio: string;


    //Relacion MUCHOS a UNO CRITERIOS_CUIDADO_INTENSIVO_ADULTO - CUIDADO_INTENSIVO_ADULTO (ESTANDARES)
    @ManyToOne(type => CuidIntAdultoEntity,  cuid_int_adulto=> cuid_int_adulto.criterios_cuid_int_adulto)
    cuid_int_adulto: CuidIntAdultoEntity;


}