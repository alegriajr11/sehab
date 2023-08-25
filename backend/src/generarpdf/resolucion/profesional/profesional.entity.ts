import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, ManyToMany, JoinTable } from 'typeorm';
import { ActaVerificacionEntity } from '../verificacion/acta-verificacion.entity';

@Entity({ name: 'profesional-apoyo' })
export class ProfesionalEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', length: 20, nullable: false})
    prof_nombre: string

    @Column({type: 'varchar', length: 20, nullable: false})
    prof_apellido: string

    @Column({type: 'varchar', length: 60, nullable: false})
    prof_cargo: string;

    @ManyToMany(type => ActaVerificacionEntity, actaveri => actaveri.verificacion_profecional, { eager: true })
    @JoinTable({
        name: 'profe_veri',
        joinColumn: { name: 'prof_veri_id' },
        inverseJoinColumn: { name: 'veri_profe_id' }
    })
    profesional_verificacion: ActaVerificacionEntity[];

}