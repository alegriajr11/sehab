/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from "typeorm";
import { ActaPamecIpsEntity } from "./pamec-acta.entity";




@EntityRepository(ActaPamecIpsEntity)
export class ActaPamecIpsRepository extends Repository<ActaPamecIpsEntity> {
        
}