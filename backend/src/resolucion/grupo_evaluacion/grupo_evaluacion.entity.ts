import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, ManyToMany, JoinTable, OneToOne, OneToMany } from 'typeorm';
import { ServicioEntity } from '../servicio/servicio.entity';

@Entity({ name: 'grupo-evaluacion' })
export class GrupoEvaluacionEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', length: 20, nullable: false})
    nombre: string

    @OneToMany(() => ServicioEntity, servicios => servicios.evaluacion_servicios)
    servicios_evaluacion: ServicioEntity;

}