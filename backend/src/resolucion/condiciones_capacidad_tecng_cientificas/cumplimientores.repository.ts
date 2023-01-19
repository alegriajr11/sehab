/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from "typeorm";
import { CumplimientoResEntity } from "./cumplimientores.entity";


@EntityRepository(CumplimientoResEntity)
export class CumplimientoResRepository extends Repository<CumplimientoResEntity> {

}