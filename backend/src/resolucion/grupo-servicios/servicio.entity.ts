import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, ManyToMany, JoinTable, OneToOne, JoinColumn } from 'typeorm';
import { GrupoEvaluacionEntity } from '../grupo-evaluacion/grupo_evaluacion.entity';

@Entity({ name: 'servicio' })
export class ServicioEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', length: 20, nullable: false})
    nombre: string;

    // RELACION UNO A UNO ACTA VERIFICACION - DATOS VCERIFICADOS ENCONTRADOS
    @OneToOne(() => GrupoEvaluacionEntity, evaluacion => evaluacion.servicios_evaluacion)
    @JoinColumn()
    evaluacion_servicios: GrupoEvaluacionEntity;
}