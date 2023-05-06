/* eslint-disable prettier/prettier */
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UrgenciasEntity } from "./urgencias.entity";



@Entity({ name: 'criterio_urgencias' })
export class CriterioUrgenciasEntity {
    @PrimaryGeneratedColumn('increment')
    criurge_id: number;
    
    @Column({ type: 'varchar', length: 105, nullable: false, unique: false })
    criurge_modalidad: string;

    @Column({ type: 'varchar', length: 105, nullable: false, unique: false })
    criurge_complejidad: string;

    @Column({ type: 'varchar', length: 10, nullable: false, unique: false })
    criurge_articulo: string;

    @Column({ type: 'varchar', length: 3, nullable: false, unique: false })
    criurge_seccion: string;

    @Column({ type: 'varchar', length: 10, nullable: false, unique: false })
    criurge_apartado: string;

    @Column({ type: 'varchar', length: 700, nullable: false, unique: false })
    criurge_nombre_criterio: string;


    //Relacion MUCHOS a UNO CRITERIOS_URGENCIAS - URGENCIAS (ESTANDARES)
    @ManyToOne(type => UrgenciasEntity,  urgencias=> urgencias.criterios_urgencias)
    urgencias: UrgenciasEntity;


}