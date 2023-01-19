/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from "typeorm";
import { CalificacionIpsEntity } from "./calificacionips.entity";



@EntityRepository(CalificacionIpsEntity)
export class CalificacionIpsRepository extends Repository<CalificacionIpsEntity> {

}