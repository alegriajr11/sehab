import { EntityRepository, Repository } from "typeorm";
import { ComplejidadEntity } from "./complejidad.entity";


@EntityRepository(ComplejidadEntity)
export class ComplejidadRepository extends Repository<ComplejidadEntity> {

}