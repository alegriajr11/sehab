import { PrestadorEntity } from "src/prestador/prestador.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ConceptoResEntity } from "./concepto_res.entity";



@Entity({ name: 'requisito_res' })
export class RequisitoResEntity {
    @PrimaryGeneratedColumn('increment')
    req_id: number;

    @Column({ type: 'varchar', length: 100, nullable: false, unique: false })
    req_nombre: string;

    //Relacion Uno a Muchos REQUISITOS - CONCEPTO
    @OneToMany(type => ConceptoResEntity, concepto_res => concepto_res.requisito_res)
    concepto_res: ConceptoResEntity;

    @ManyToOne(type => PrestadorEntity, prestador => prestador.requisitos_hab)
    prestadores: PrestadorEntity
}