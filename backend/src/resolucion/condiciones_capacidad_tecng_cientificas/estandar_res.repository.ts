/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from "typeorm";
import { EstandarResEntity } from "./estandar_res.entity";


@EntityRepository(EstandarResEntity)
export class EstandarResRepository extends Repository<EstandarResEntity> {

}