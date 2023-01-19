/* eslint-disable prettier/prettier */
import { PrestadorEntity } from "src/prestador/prestador.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CriterioIndEntity } from "./criterioind.entity";


@Entity({ name: 'etapaind' })
export class EtapaInd {
    @PrimaryGeneratedColumn('increment')
    eta_id: number;

    @Column({ type: 'varchar', length: 80, nullable: false, unique: false })
    eta_nombre: string;


    //Relacion Uno a Muchos Etapa - Criterio
    @OneToMany(type => CriterioIndEntity, criterio => criterio.eta_item)
    cri_criterio: CriterioIndEntity;

    //Relacion Muchos a Muchos ETAPA - PRESTADOR
    @ManyToMany(type => PrestadorEntity, prestador => prestador.etapaInd, { eager: true })
    @JoinTable({
        name: 'etap_pres',
        joinColumn: { name: 'etap_pres_id' },
        inverseJoinColumn: { name: 'pres_etap_id' }
    })
    prestadores: PrestadorEntity[]
}