import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'auditoria-registro' })
export class AuditoriaRegistroEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    usu_nombre: string

    @Column()
    usu_apellido: string

    @Column()
    accion: string;

    @Column()
    detalles: string;

    @Column()
    direccionIp: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    creadoEn: Date;
}
