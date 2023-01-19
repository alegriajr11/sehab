import { PrestadorEntity } from "src/prestador/prestador.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";



@Entity({name: 'tecnico_administrativas'})
export class TecnicoAdministrativaEntity {
    @PrimaryGeneratedColumn('increment')
    tec_id: number;

    @Column({type: 'varchar', length: 55, nullable: false, unique: false})
    tec_nombre: string;

    @Column({type: 'varchar', length: 11, nullable: false, unique: false})
    tec_cumple: string;

    @OneToOne(() => PrestadorEntity)
    @JoinColumn()
    prestador: PrestadorEntity
}