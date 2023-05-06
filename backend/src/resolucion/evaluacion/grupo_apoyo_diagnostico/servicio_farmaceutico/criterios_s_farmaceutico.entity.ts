/* eslint-disable prettier/prettier */
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ServFarmaceuticoEntity } from "./servicio_farmaceutico.entity";



@Entity({ name: 'criterio_ser_farmaceutico' })
export class CriterioSerFarmaceuticoEntity {
    @PrimaryGeneratedColumn('increment')
    criser_farm_id: number;
    
    @Column({ type: 'varchar', length: 105, nullable: false, unique: false })
    criser_farm_modalidad: string;

    @Column({ type: 'varchar', length: 105, nullable: false, unique: false })
    criser_farm_complejidad: string;

    @Column({ type: 'varchar', length: 10, nullable: false, unique: false })
    criser_farm_articulo: string;

    @Column({ type: 'varchar', length: 3, nullable: false, unique: false })
    criser_farm_seccion: string;

    @Column({ type: 'varchar', length: 10, nullable: false, unique: false })
    criser_farm_apartado: string;

    @Column({ type: 'varchar', length: 700, nullable: false, unique: false })
    criser_farm_nombre_criterio: string;


    //Relacion MUCHOS a UNO CRITERIOS_SERVICIO_FARMACEUTICO - SERVICIO_FARMACEUTICO (ESTANDARES)
    @ManyToOne(type => ServFarmaceuticoEntity,  ser_farmaceutico=> ser_farmaceutico.criterios_ser_farmaceutico)
    ser_farmaceutico: ServFarmaceuticoEntity;


}