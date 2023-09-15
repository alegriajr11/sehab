import { IsNumber, IsString, MaxLength } from "class-validator";
import { IsNotBlank } from "src/decorators/is-not-blank.decorator";
import { Column } from "typeorm";

export class calificacionindDto {

    @IsNotBlank()
    cal_nota: number;
    
    @Column({ nullable: true })
    cal_observaciones?: string;

    @Column({ nullable: true })
    cal_asignado?: string;

    @IsNumber()
    cri_id: number

    @IsNumber()
    eva_id: number

}