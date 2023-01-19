/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from "typeorm";
import { RequisitoResEntity } from "./requisito_res.entity";

@EntityRepository(RequisitoResEntity)
export class RequisitoResRepository extends Repository<RequisitoResEntity> {

}