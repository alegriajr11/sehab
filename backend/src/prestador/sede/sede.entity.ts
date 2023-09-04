/* eslint-disable prettier/prettier */
import { Column, Entity, JoinColumn,  ManyToOne,  OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { PrestadorEntity } from "../prestador.entity";
import { ActaVerificacionEntity } from "src/generarpdf/resolucion/verificacion/acta-verificacion.entity";

@Entity({ name: 'sede' })
export class SedeEntity {
    @PrimaryGeneratedColumn('increment')
    sede_id: number;

    @Column({ type: 'varchar', length: 3, nullable: false, unique: false })
    sede_numero: string

    @Column({ type: 'varchar', length: 100, nullable: false })
    sede_nombre: string

    @Column({ type: 'varchar', length: 70, nullable: true })
    sede_gerente: string

    @Column({ type: 'varchar', length: 3, nullable: false })
    sede_principal: string

    @Column({ type: 'varchar', length: 2, nullable: false })
    sede_numero_principal: string

    @Column({ type: 'varchar', length: 90, nullable: true })
    sede_direccion: string

    @Column({ type: 'varchar', length: 90, nullable: true })
    sede_barrio: string

    //Relacion Uno a Muchos SEDE - PRESTADOR
    @ManyToOne(type => PrestadorEntity, prestador => prestador.pre_sede)
    sede_prestador: PrestadorEntity;

     //Relacion Uno a uno SEDE - ACTA VERIFICACION 
    @OneToOne(() => ActaVerificacionEntity, actaVerificacion => actaVerificacion.act_sede_veri)
    @JoinColumn()
    acta_verificacion_sede: ActaVerificacionEntity;


}