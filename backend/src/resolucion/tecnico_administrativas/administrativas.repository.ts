/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from "typeorm";
import { TecnicoAdministrativaEntity } from "./administrativas.entity";



@EntityRepository(TecnicoAdministrativaEntity)
export class TecAdministrativaRepository extends Repository<TecnicoAdministrativaEntity> {

}