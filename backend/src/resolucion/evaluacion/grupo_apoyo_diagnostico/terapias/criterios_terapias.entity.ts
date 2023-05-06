/* eslint-disable prettier/prettier */
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { TerapiasEntity } from "./terapias.entity";



@Entity({ name: 'criterio_terapia' })
export class CriterioTerapiaEntity {
    @PrimaryGeneratedColumn('increment')
    criter_id: number;
    
    @Column({ type: 'varchar', length: 105, nullable: false, unique: false })
    criter_modalidad: string;

    @Column({ type: 'varchar', length: 105, nullable: false, unique: false })
    criter_complejidad: string;

    @Column({ type: 'varchar', length: 10, nullable: false, unique: false })
    criter_articulo: string;

    @Column({ type: 'varchar', length: 3, nullable: false, unique: false })
    criter_seccion: string;

    @Column({ type: 'varchar', length: 10, nullable: false, unique: false })
    criter_apartado: string;

    @Column({ type: 'varchar', length: 700, nullable: false, unique: false })
    criter_nombre_criterio: string;


    //Relacion MUCHOS a UNO CRITERIOS_TERAPIA - TERAPIA (ESTANDARES)
    @ManyToOne(type => TerapiasEntity,  terapia=> terapia.criterios_terapia)
    terapia: TerapiasEntity;


}