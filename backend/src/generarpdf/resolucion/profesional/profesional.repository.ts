import { EntityRepository, Repository } from "typeorm";
import { ProfesionalEntity } from "./profesional.entity";



@EntityRepository(ProfesionalEntity)
export class ProfesionalRepository extends Repository<ProfesionalEntity> {
        
}