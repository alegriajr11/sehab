import { EntityRepository, Repository } from "typeorm";
import { EvaluacionResEntity } from "./evaluacion_res.entity";


@EntityRepository(EvaluacionResEntity)
export class EvaluacionResRepository extends Repository<EvaluacionResEntity> {

}