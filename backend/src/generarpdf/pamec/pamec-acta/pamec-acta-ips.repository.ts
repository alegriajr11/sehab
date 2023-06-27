/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from "typeorm";
import { ActaPamecIpsEntity } from "./pamec-acta-ips.entity";




@EntityRepository(ActaPamecIpsEntity)
export class ActaPamecIpsRepository extends Repository<ActaPamecIpsEntity> {
        
}