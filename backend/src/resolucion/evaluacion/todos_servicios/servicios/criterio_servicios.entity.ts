/* eslint-disable prettier/prettier */
import { PrestadorEntity } from "src/prestador/prestador.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { TodoServiciosEntity } from "./todos_servicios.entity";
// import { CumplimientoEstandarSicEntity } from "./cumplimientoestandar.entity";



@Entity({ name: 'criterio_servicios' })
export class Criterio_servicios {
    @PrimaryGeneratedColumn('increment')
    cris_id: number;

    @Column({ type: 'varchar', length: 105, nullable: true, unique: false })
    cris_modalidad: string;

    @Column({ type: 'varchar', length: 10, nullable: true, unique: false })
    cris_articulo: string;

    @Column({ type: 'varchar', length: 3, nullable: true, unique: false })
    cris_seccion: string;

    @Column({ type: 'varchar', length: 10, nullable: true, unique: false })
    cris_apartado: string;

    @Column({ type: 'varchar', length: 700, nullable: true, unique: false })
    cris_nombre_criterio: string;


    //Relacion MUCHOS a UNO CRITERIO SERVICIOS - TODOS_SERVICIOS RESOLUCION 3100 - 2019
    @ManyToOne(type => TodoServiciosEntity, todosServicios => todosServicios.criteriosServ)
    todos_servicios: TodoServiciosEntity;

}