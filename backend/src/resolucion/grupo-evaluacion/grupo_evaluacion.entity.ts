import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, ManyToMany, JoinTable, OneToOne } from 'typeorm';
import { ServicioEntity } from '../grupo-servicios/servicio.entity';

@Entity({ name: 'grupo-evaluacion' })
export class GrupoEvaluacionEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', length: 20, nullable: false})
    servicio_nombre: string

    @OneToOne(() => ServicioEntity, servicios => servicios.evaluacion_servicios)
    servicios_evaluacion: ServicioEntity;

}