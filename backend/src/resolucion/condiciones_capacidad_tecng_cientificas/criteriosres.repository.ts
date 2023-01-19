/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from "typeorm";
import { CriteriosResEntity } from "./criteriosres.entity";


@EntityRepository(CriteriosResEntity)
export class CriteriosResRepository extends Repository<CriteriosResEntity> {

}